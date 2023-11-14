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
import { ProductsHeading } from "../components/Card";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

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
  return (
    <TextContainer>
      <TeamAvatar>
        <Avatar image={brand?.logo?.gatsbyImageData} alt={brand?.brand} />
      </TeamAvatar>
      <ProductsHeading>{brand?.brand}</ProductsHeading>
      {renderRichText(data)}
    </TextContainer>
  );
};

const Avatar = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TeamAvatar = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 0px 0px 50px 5px rgba(0, 0, 0.2);
  margin-bottom: 25px;
  align-self: center;
`;
