import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Card, {
  ProductWrapper,
  ProductsContainer,
  ProductsHeading,
} from "./Card";

const Curriculums = () => {
  const data = GetCurriculums();
  return (
    <ProductsContainer id="sessions">
      <ProductsHeading>Sessions</ProductsHeading>
      <ProductWrapper>{GetCurriculumsImage(data)}</ProductWrapper>
    </ProductsContainer>
  );
};

export default Curriculums;

function GetCurriculumsImage(data: NodeType[]) {
  const _curriculums: JSX.Element[] = [];
  data.forEach((item) =>
    _curriculums.push(
      <Card
        prop={{
          id: item.sessionId,
          image: item.cover,
          name: item.sessionName,
          preSlug: "sessions",
          buttonText: "Explore Session",
        }}
      />
    )
  );
  return _curriculums;
}

const GetCurriculums = () =>
  useStaticQuery<RetType>(graphql`
    query {
      allContentfulSession(sort: { start: DESC }) {
        nodes {
          end
          cover {
            gatsbyImageData(placeholder: BLURRED)
          }
          sessionId
          sessionName
          start
        }
      }
    }
  `).allContentfulSession?.nodes;

type SessionType = {
  nodes: NodeType[];
};

type NodeType = {
  end: Date;
  start: Date;
  cover: {
    gatsbyImageData: any;
  };
  sessionId: string;
  sessionName: string;
};
interface RetType {
  allContentfulSession: SessionType;
}
