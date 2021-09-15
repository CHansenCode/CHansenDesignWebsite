import NavLink from "@/components/NavLink";

import css from "./Logo.module.scss";

const Logo = () => {
  return (
    <NavLink href="/">
      <div className={css.logo}>LOGO</div>
    </NavLink>
  );
};

export default Logo;
