import { useState } from "react";

import NavLink from "@/components/NavLink";

import MobileMenu from "./MobileMenu/MobileMenu";

import LinkList from "./LinkList/LinkList";
import PlaceIndicator from "./PlaceIndicator/PlaceIndicator";
import Logo from "@/public/Logo/Logo";
import Hamburger from "@/components/Hamburger/Hamburger";

import css from "./Nav.module.scss";

const NavDesktop = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink href="/">
          <div className={css.logo}>
            <Logo />
          </div>
        </NavLink>

        <div className={css.threeWords}>
          <h5>Architecture</h5>
          <h5>Webdesign</h5>
          <h5>& Graphics</h5>
        </div>

        <div className={css.indicator}>
          <PlaceIndicator />
        </div>

        <div className={css.links}>
          <LinkList ternary={mobileMenuOpen} />
        </div>

        <div className={css.hamburger}>
          <Hamburger ternary={mobileMenuOpen} onClick={(e) => setMobileMenuOpen(!mobileMenuOpen)} />
        </div>

        <div className={`${css.mobileMenu} ${mobileMenuOpen && css.mobileMenu_open}`}>
          <MobileMenu setMobileMenuOpen={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} />
        </div>
      </nav>
    </header>
  );
};

export default NavDesktop;
