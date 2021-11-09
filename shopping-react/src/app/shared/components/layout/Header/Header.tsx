import React from "react";

import HeaderDesktop from "./partials/HeaderDesktop";
import HeaderMobile from "./partials/HeaderMobile";

const Header = () => {
  return (
    <header className="page-header">
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  );
};
export default Header;
