import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
  renderRichText,
} from "gatsby-source-contentful/rich-text";
import React from "react";
import DefaultLayout from "./Layout/DefaultLayout";
import { TextContainer } from "./TextContainer";
import { Link } from "gatsby";

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
