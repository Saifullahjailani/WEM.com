import React, { useState } from "react";

export type CtxProps = {
  active: NavLinkElem["title"];
  setActive: React.Dispatch<React.SetStateAction<TitleType>>;
};

export const NavLinkCtx = React.createContext<CtxProps>({
  active: "Home",
  setActive: () => {},
});

const NavLinkContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [active, setActive] = useState<TitleType>("Home");

  return (
    <NavLinkCtx.Provider value={{ active, setActive }}>
      {children}
    </NavLinkCtx.Provider>
  );
};

export default NavLinkContextProvider;

export const NavLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about/",
  },
  {
    title: "Team",
    link: "/team/",
  },
  {
    title: "Sessions",
    link: "/sessions/",
  },
  {
    title: "Contact",
    link: "/contacts/",
  },
] as const;

export type TitleType = (typeof NavLinks)[number]["title"];
export type NavLinkElem = (typeof NavLinks)[number];
