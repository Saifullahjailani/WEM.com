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
              gatsbyImageData(width: 170, placeholder: BLURRED, height: 170)
            }
          }
        }
      }
    }
  `);
  return (
    <DefaultLayout isMain>
      <TextContainer>
        <Title>Meet Our Exceptional Team</Title>
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
      </TextContainer>
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
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
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
