exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    query SessionExplorer {
      allContentfulSession {
        nodes {
          sessionId
          sessionName
          class {
            classCode
            className
            logo {
              gatsbyImageData
            }
            teacher {
              name
              title
              slug
              avatar {
                gatsbyImageData
              }
            }
            classDescription {
              raw
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const sessions = result.data.allContentfulSession.nodes;

  // Check if nodes array exists before iterating
  if (sessions && sessions.length > 0) {
    sessions.forEach((node) => {
      createPage({
        path: `/sessions/${node.sessionId}/`,
        component: require.resolve("./src/components/Course.tsx"),
        context: {
          sessionId: node.sessionId,
          sessionName: node.sessionName,
          classes: node.class,
        },
      });

      const classes = node.class;
      if (classes && classes.length > 0) {
        classes.forEach((classItem) => {
          createPage({
            path: `/sessions/${node.sessionId}/courses/${classItem.classCode}/`,
            component: require.resolve("./src/components/CourseAbout.tsx"),
            context: {
              class: classItem,
              sessionName: node.sessionName,
              sessionId: node.sessionId,
            },
          });
        });
      }
    });
  }

  const TeamData = await graphql(`
    query TeamDataQuery {
      allContentfulInstructor(sort: { fields: sort, order: ASC }) {
        edges {
          node {
            name
            slug
            title
            avatar {
              gatsbyImageData(placeholder: BLURRED)
            }
            class {
              className
              classCode
              session {
                sessionId
              }
            }
            bio {
              raw
            }
          }
        }
      }
    }
  `);

  if (TeamData.errors) {
    throw TeamData.errors;
  }

  const members = TeamData.data.allContentfulInstructor.edges;

  if (members && members.length > 0) {
    members.map((member) => {
      createPage({
        path: `/team/${member.node.slug}/`,
        component: require.resolve("./src/components/TeamAboutTemelate.tsx"),
        context: {
          node: member.node,
        },
      });
    });
  }
};
