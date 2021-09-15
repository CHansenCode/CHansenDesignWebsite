import NavLinks from "./NavLinks/NavLinks";
import Logo from "./Logo/Logo";
import PlaceIndicator from "./PlaceIndicator/PlaceIndicator";
import Login from "./Login/Login";

import css from "../NavDesktop/NavDesktop.module.scss";

const NavDesktop = () => {
  return (
    <nav className={css.nav}>
      <div className={css.logo}>
        <Logo />
      </div>
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
