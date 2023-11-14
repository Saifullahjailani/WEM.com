import React from "react";
import DefaultLayout from "./Layout/DefaultLayout";
import ProductsHeading from "./ProductsHeading";
import MyCard, { ProductWrapper, ProductsContainer } from "./Card";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
type ClassType = {
  className: string;
  classCode: string;
  logo?: {
    gatsbyImageData: any;
  };
  teacher: {
    name: string;
    avatar: {
      gatsbyImageData: any;
    };
  }[];
  classDescription: RenderRichTextData<ContentfulRichTextGatsbyReference>;
};

type pageContext = {
  sessionId: string;
  sessionName: string;
  classes: ClassType[];
};

const Course: React.FC<{ pageContext: pageContext }> = ({ pageContext }) => {
  console.log(pageContext.classes);
  return (
    <DefaultLayout isMain>
      <ProductsContainer>
        <ProductsHeading>{pageContext.sessionName}</ProductsHeading>
        <ProductWrapper>
          {pageContext.classes.map((item) => (
            <MyCard
              key={item.classCode}
              prop={{
                id: item.classCode,
                image: item?.logo,
                name: item.className,
                preSlug: `sessions/${pageContext.sessionId}/courses`,
                buttonText: "Explore Class",
                instructors: item.teacher,
              }}
            />
          ))}
        </ProductWrapper>
      </ProductsContainer>
    </DefaultLayout>
  );
};

export default Course;
