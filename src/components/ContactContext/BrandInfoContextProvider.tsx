import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export const BrandInfoContext = React.createContext<ResponseType>({
  cList: undefined,
  brand: undefined,
});

type PropType = {
  children: React.ReactNode;
};

const BrandInfoContextProvider = ({ children }: PropType) => {
  const { cList, brand } = useStaticQuery<ResponseType>(graphql`
    query {
      cList: allContentfulSession(sort: { end: ASC }) {
        nodes {
          sessionName
          sessionId
        }
      }
      brand: contentfulWemWebsiteInfo {
        brand
        slogan
        contacts {
          instagram
          email
          phone
          web
          twitters
        }
        footerInfo {
          footerInfo
        }
        fullAbout {
          raw
        }
        logo {
          gatsbyImageData(placeholder: BLURRED)
        }
        hero {
          url
        }
      }
    }
  `);
  return (
    <BrandInfoContext.Provider value={{ cList, brand }}>
      {children}
    </BrandInfoContext.Provider>
  );
};

export default BrandInfoContextProvider;

export type ResponseType = {
  cList?: CListType;
  brand?: BrandType;
};

export type CListType = {
  nodes: Array<NodeType>;
};

export type NodeType = {
  sessionName?: string;
  sessionId?: string;
};

export type BrandType = {
  brand: string;
  slogan: string;
  contacts: ContactsType;
  footerInfo: FooterInfoType;
  fullAbout: FullAboutType;
  logo: LogoType;
  hero: HeroType;
};

export type HeroType = {
  url: string;
};

export type ContactsType = {
  instagram: string;
  email: string;
  phone: string;
  web: string;
  twitters: string;
};

export type FooterInfoType = {
  footerInfo: string;
};

export type FullAboutType = {
  raw: any;
};

export type LogoType = {
  gatsbyImageData: any;
};
