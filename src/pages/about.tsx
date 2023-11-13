import React, { useContext } from "react";
import { BrandInfoContext } from "../components/ContactContext/BrandInfoContextProvider";
import DefaultLayout from "../components/Layout/DefaultLayout";
import { TextContainer } from "../components/TextContainer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
  renderRichText,
} from "gatsby-source-contentful/rich-text";

const about = () => {
  return (
    <DefaultLayout isMain>
      <Container />
    </DefaultLayout>
  );
};

export default about;

const Container = () => {
  const { brand } = useContext(BrandInfoContext);
  const data =
    brand?.fullAbout as RenderRichTextData<ContentfulRichTextGatsbyReference>;
  return <TextContainer>{renderRichText(data)}</TextContainer>;
};
