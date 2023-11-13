import React from "react";
import { Button } from "./Button";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { GiTeacher } from "react-icons/gi";

type CardProps = {
  id: string;
  image?: {
    gatsbyImageData: any;
  };
  name: string;
  preSlug?: string;
  buttonText: string;
  slug?: string;
  instructors?: {
    name: string;
  }[];
};

const Card: React.FC<{ prop: CardProps }> = ({ prop }) => {
  const { id, image, name, preSlug, buttonText, instructors } = prop;
  return (
    <ProductCard key={id}>
      <ProductImage image={image?.gatsbyImageData} alt={id}></ProductImage>
      {instructors?.map((instructor, index) => (
        <p key={instructor.name}>hi</p>
      ))}

      <ProductInfo>
        <ProductTitle>{name}</ProductTitle>
        <div>
          <Button primary="true" round="true" to={`/${preSlug}/${id}`}>
            {buttonText}
          </Button>
        </div>
      </ProductInfo>
    </ProductCard>
  );
};

export default Card;

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`;
const ProductImage = styled(GatsbyImage)`
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  position: relative;
  &:hover {
    filter: brightness(100%);
  }
`;
const ProductInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20%;
  padding-left: 8%;
  gap: 5%;
`;

export const ProductDuration = styled.div`
  font-weight: 400;
  font-size: 1.5rem;
  margin-left: 0.5rem;
`;

export const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: transparent;
  color: #fff;
`;
export const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`;

export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;
const ProductTitle = styled.h2`
  margin-top: auto;
`;
