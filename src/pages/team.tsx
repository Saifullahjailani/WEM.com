import React from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import { TextContainer } from "../components/TextContainer";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Teacher from "../components/Teacher";

const team = () => {
  const { allContentfulInstructor } = useStaticQuery<{
    allContentfulInstructor: AllContentfulInstructor;
  }>(graphql`
    query TeamMembersQuery {
      allContentfulInstructor(sort: { sort: ASC }) {
        edges {
          node {
            name
            slug
            title
            avatar {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);
  return (
    <DefaultLayout isMain>
      <TextContainer style={{ marginBottom: "0" }}>
        <Title>Meet Our Exceptional Team</Title>
      </TextContainer>
      <TeamContainer>
        {allContentfulInstructor.edges.map(({ node }) => (
          <Teacher
            key={node.name}
            teacher={node}
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          />
        ))}
      </TeamContainer>
    </DefaultLayout>
  );
};

export default team;

const Title = styled.h1`
  align-self: center;
  margin-bottom: 25px;
  font-size: clamp(1rem, 5vw, 1rem);
`;

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10%;
  grid-row-gap: 5%;
  padding: 10%;
  padding-top: 0;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

type AllContentfulInstructor = {
  edges: Edge[];
};

type Edge = {
  node: {
    name: string;
    slug: string;
    title: string;
    avatar: {
      gatsbyImageData: any;
    };
  };
};
