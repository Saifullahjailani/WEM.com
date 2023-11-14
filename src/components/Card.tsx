import React from "react";
import { Button } from "./Button";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { GiTeacher } from "react-icons/gi";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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

const MyCard: React.FC<{ prop: CardProps }> = ({ prop }) => {
  return <SingleCard prop={prop}></SingleCard>;
};

export default MyCard;

const ImageContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const ProductCard = styled.div`
  width: 100%;
  width: 400px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`;
const ProductImage = styled(GatsbyImage)`
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`;
const ProductInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  justify-items: center;
  padding: 0 2rem;
  column-gap: 2rem;
  row-gap: 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding-lef: 3rem;
    padding-right: 3rem;
  }
`;
const ProductTitle = styled.h2``;

const SingleCard: React.FC<{ prop: CardProps }> = ({ prop }) => {
  const { id, image, name, preSlug, buttonText, instructors } = prop;
  const first = true;
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia>
        <GatsbyImage image={image?.gatsbyImageData} alt={id} />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span>By: </span>
          {instructors?.map((instructor, index) => (
            <span key={instructor.name}>
              {index <= 1 ? "" : "|"}
              {instructor.name}
            </span>
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Button primary to={`/${preSlug}/${id}`}>
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};
