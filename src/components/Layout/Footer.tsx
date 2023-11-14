import React, { useContext } from "react";
import styled from "styled-components";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, graphql, useStaticQuery } from "gatsby";

import "./footerStyle.css";
import FooterContacts, { ContactType } from "./Navbar/FooterContacts";
import {
  BrandInfoContext,
  BrandType,
  CListType,
} from "../ContactContext/BrandInfoContextProvider";

const Footer = () => {
  const { cList, brand } = useContext(BrandInfoContext);

  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Curriculums</h3>
              <CurriculumsList data={cList}></CurriculumsList>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/team">Team</Link>
                </li>
                <li>
                  <Link to="/contacts">Contacts</Link>
                </li>
              </ul>
            </div>
            <BrandList data={brand}></BrandList>
          </div>
          <p className="copyright">
            {brand?.brand} © {new Date().getFullYear()}
          </p>
          <p className="copyright">
            Designed and Developed by{" "}
            <a className="author" href="https://saifullahjailani.com/">
              Saifullah Jailani
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

function CurriculumsList({ data }: Readonly<{ data: CListType | undefined }>) {
  return (
    <ul>
      {data?.nodes.map((item) => {
        return (
          <li key={item.sessionId}>
            <Link to={`/sessions/${item.sessionId}`}>{item.sessionName}</Link>
          </li>
        );
      })}
    </ul>
  );
}

function BrandList({ data }: Readonly<{ data: BrandType | undefined }>) {
  return (
    <>
      <div className="col-md-6 item text">
        <div>
          <h3>{data?.brand}</h3>
          <p>{data?.footerInfo.footerInfo}</p>
        </div>
      </div>
      <div className="col item social">
        <FooterContacts
          href={data?.contacts.phone}
          type={ContactType.phone}
        ></FooterContacts>
        <FooterContacts
          href={data?.contacts.email}
          type={ContactType.email}
        ></FooterContacts>
        <FooterContacts
          href={data?.contacts.instagram}
          type={ContactType.instagram}
        ></FooterContacts>
        <FooterContacts
          href={data?.contacts.twitters}
          type={ContactType.twitter}
        ></FooterContacts>
      </div>
    </>
  );
}
