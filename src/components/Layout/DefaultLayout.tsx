import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { GlobalStyle } from "../styles/GlobalStyles";
import BrandInfoContextProvider from "../ContactContext/BrandInfoContextProvider";
import NavLinkContextProvider from "../NavLinkContextProvider";

type Prop = {
  children?: ReactNode;
  isMain?: boolean;
};

const DefaultLayout = ({ children, isMain }: Prop) => {
  return (
    <BrandInfoContextProvider>
      <GlobalStyle />
      <NavLinkContextProvider>
        <Navbar isMain={isMain ?? false} />
      </NavLinkContextProvider>
      {children}
      <Footer />
    </BrandInfoContextProvider>
  );
};

export default DefaultLayout;
