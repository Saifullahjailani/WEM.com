import React from "react";
import DefaultLayout from "./Layout/DefaultLayout";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";

import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
  renderRichText,
} from "gatsby-source-contentful/rich-text";
import { TextContainer } from "./TextContainer";
import Teacher from "./Teacher";
import { randomUUID } from "crypto";
import { Link } from "gatsby";

export type TeacherType = {
  name: string;
  title?: string;
  slug: string;
  avatar: {
    gatsbyImageData: any;
  };
};
type ClassType = {
  classCode: string;
  className: string;
  logo: {
    gatsbyImageData: any;
  };
  teacher: TeacherType[];
  classDescription: RenderRichTextData<ContentfulRichTextGatsbyReference>;
};

type PageContext = {
  class: ClassType;
  sessionName: string;
  sessionId: string;
};

const CourseAbout: React.FC<{ pageContext: PageContext }> = ({
  pageContext,
}) => {
  return (
    <DefaultLayout isMain>
      <TextContainer>
        <h1>{pageContext.class.className}</h1>
        {renderRichText(pageContext.class.classDescription, options)}
        <h2>Instructors</h2>
        {pageContext.class.teacher.map((teacherItem, index) => (
          <Teacher key={index} teacher={teacherItem} />
        ))}
      </TextContainer>
    </DefaultLayout>
  );
};

export default CourseAbout;

const options = {};
