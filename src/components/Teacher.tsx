import React from "react";
import { TeacherType } from "./CourseAbout";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { title } from "process";
import { Link } from "gatsby";

type propsType = {
  teacher: TeacherType;
  style: React.CSSProperties | undefined;
};

const Teacher: React.FC<propsType> = ({ teacher, style }) => {
  return (
    <MyLink to={`/team/${teacher.slug}`}>
      <CardContainer style={style}>
        <ImageContainer image={teacher.avatar.gatsbyImageData} alt="Team" />
        <TextContainer>
          <TextBox>
            <TitleContainer>Najiullah Jailani</TitleContainer>
            <InstructorInfo>{teacher.title ?? "Tutor"}</InstructorInfo>
          </TextBox>
        </TextContainer>
      </CardContainer>
    </MyLink>
  );
};

export default Teacher;

export const MyLink = styled(Link)`
  text-decoration: none;
`;

const CardContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  padding-right: 1rem;
  padding-left: 1rem;
  border-radius: 10px;
  transition: 0.2s ease;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
    transform: scale(1.1);
  }
`;

const ImageContainer = styled(GatsbyImage)`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  object-fit: fill;
  padding: 0%;
  margin-left: 20px;
  padding-bottom: 20px;
`;

const TitleContainer = styled.h2`
  font-weight: 500 !important;
  font-family: Roboto, sans-serif !important;
  margin: 0 !important;
  padding: 0 !important;
`;

const InstructorInfo = styled.p`
  font-size: 20px !important;
  font-weight: 400 !important;
  font-family: Roboto, sans-serif !important;
  margin: 0 !important;
  padding: 0 !important;
`;

const TextBox = styled.div`
  margin-top: auto !important;
  display: flex;
  flex-direction: column;
  justify-content: left;
  row-gap: 5px;
`;
