import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
  renderRichText,
} from "gatsby-source-contentful/rich-text";
import React from "react";
import DefaultLayout from "./Layout/DefaultLayout";
import { TextContainer } from "./TextContainer";
import { Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

type PageContext = {
  node: {
    name: string;
    slug: string;
    title: string;
    avatar: {
      gatsbyImageData: any;
    };
    class: {
      className: string;
      classCode: string;
      session: {
        sessionId: string;
      };
    }[];
    bio: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  };
};

const TeamAbout: React.FC<{ pageContext: PageContext }> = ({ pageContext }) => {
  const { node } = pageContext;

  return (
    <DefaultLayout isMain>
      <TextContainer>
        <TeamAvatar>
          <Avatar image={node.avatar.gatsbyImageData} alt={node.name}></Avatar>
        </TeamAvatar>
        <h1>{node.name}</h1>
        {renderRichText(node.bio)}
        <h2>Explore More Courses</h2>
        <ul>
          {node?.class?.map((classItem, index) => (
            <li key={index}>
              <Link
                to={`/sessions/${classItem?.session?.sessionId}/courses/${classItem.classCode}`}
              >
                {classItem.className}
              </Link>
            </li>
          ))}
        </ul>
      </TextContainer>
    </DefaultLayout>
  );
};

export default TeamAbout;

const Avatar = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const TeamAvatar = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 0px 0px 50px 5px rgba(0, 0, 0.2);
  margin-bottom: 25px;
`;
