import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import DefaultLayout from "../components/Layout/DefaultLayout";
import Hero from "../components/Hero";
import Curriculums from "../components/Sessions";
import ContactsComp from "../components/ContactsComp";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <Hero></Hero>
      <Curriculums></Curriculums>
      <ContactsComp></ContactsComp>
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
