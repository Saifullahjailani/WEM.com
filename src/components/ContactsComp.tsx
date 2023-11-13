import React, { ReactNode, useContext, useState } from "react";
import styled, { IStyledComponent } from "styled-components";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { TextField, FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsGlobe2 } from "react-icons/bs";
import "./styles/contacts.css";
import { BrandInfoContext } from "./ContactContext/BrandInfoContextProvider";

const ContactsComp = () => {
  const { brand } = useContext(BrandInfoContext);

  return (
    <Container className="container md">
      <ContainerElemRight>
        <InfoBox>
          <FormTitle>Contact Us</FormTitle>
          <Disclaimer>
            We value your feedback, questions, and thoughts. At{" "}
            {brand?.brand ?? "No Brand"}, we're committed to providing
            exceptional service and support. If you have any inquiries, require
            assistance, or simply want to get in touch, please don't hesitate to
            reach out to us. Our dedicated team is here to assist you
          </Disclaimer>
        </InfoBox>

        <SubFieldsContact link={brand?.contacts?.email}>
          <MdEmail className="simpleLogo" />
        </SubFieldsContact>

        <SubFieldsContact link={brand?.contacts?.instagram}>
          <AiFillInstagram className="simpleLogo" />
        </SubFieldsContact>

        <SubFieldsContact link={brand?.contacts?.phone}>
          <BsFillTelephoneFill className="simpleLogo" />
        </SubFieldsContact>

        <SubFieldsContact link={brand?.contacts?.twitters}>
          <FaSquareXTwitter className="simpleLogo" />
        </SubFieldsContact>

        <SubFieldsContact link={brand?.contacts?.web}>
          <BsGlobe2 className="simpleLogo" />
        </SubFieldsContact>
      </ContainerElemRight>
    </Container>
  );
};

export default ContactsComp;

function SubFieldsContact({
  children,
  link,
}: Readonly<{ link: string | undefined; children: ReactNode }>) {
  return (
    <LogoInfoContainer>
      {children}
      <SubField>
        <FieldsBox key={link}>{link}</FieldsBox>
      </SubField>
    </LogoInfoContainer>
  );
}

const SubField = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
`;

const LogoInfoContainer = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  gap: 20px;
`;

const InfoBox = styled.div``;

const FieldsBox = styled.p`
  color: black;
  margin: 0;
`;

const Disclaimer = styled.p`
  color: black;
  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Container = styled.main`
  min-height: calc(100vh - 80px);
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  margin-bottom: 5vh;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;

  @media screen and (max-width: 868px) {
    display: flex;
    flex-direction: column-reverse;
    min-height: auto;
  }

  @media screen and (min-width: 868px) {
    column-gap: 10rem;
  }
`;

const ContainerElemRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 4% 5%;
  row-gap: 1rem;
  border-radius: 10px;
`;

const FormTitle = styled.h2`
  color: black;
  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
