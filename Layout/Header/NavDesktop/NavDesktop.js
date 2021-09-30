import NavLink from "@/components/NavLink";

import NavLinks from "./NavLinks/NavLinks";
import LogoWrapper from "./LogoWrapper/LogoWrapper";
import PlaceIndicator from "./PlaceIndicator/PlaceIndicator";
import Login from "./Login/Login";
import Logo from "@/public/Logo/Logo";

import css from "../NavDesktop/NavDesktop.module.scss";

const NavDesktop = () => {
  return (
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
        <NavLinks />
      </div>

      <div className={css.login}>
        <Login />
      </div>
    </nav>
  );
};

export default NavDesktop;
