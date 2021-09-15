import { useState } from "react";

import css from "./Header.module.scss";

import NavDesktop from "./NavDesktop/NavDesktop";
import NavMobile from "./NavMobile/NavMobile";

const Header = () => {
  return (
    <header className={css.header}>
      <NavDesktop />
      <NavMobile />
    </header>
  );
};

export default Header;
