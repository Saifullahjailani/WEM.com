import React from "react";
import { BiPhone } from "react-icons/bi";
import { FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

export enum ContactType {
  phone,
  email,
  instagram,
  twitter,
  web,
}

type propType = {
  href?: string;
  type: ContactType;
};

const GetIcon = (type: ContactType) => {
  switch (type) {
    case ContactType.phone:
      return <BiPhone />;
    case ContactType.email:
      return <MdEmail />;
    case ContactType.instagram:
      return <AiFillInstagram />;
    case ContactType.twitter:
      return <FaTwitterSquare />;
    case ContactType.web:
      return null; // or any other component you want to render for the 'web' case
    default:
      return null;
  }
};

const FooterContacts = ({ href, type }: propType) => {
  if (href && href.length > 0) {
    return (
      <a href={href}>
        <i className="icon ion-social-instagram">{GetIcon(type)}</i>
      </a>
    );
  } else {
    return null;
  }
};

export default FooterContacts;
