import NavLink from "@/components/NavLink";
import Logo from "@/public/Logo/Logo";

import css from "./Logo.module.scss";

const LogoWrapper = () => {
  return (
    <NavLink href="/">
      <a href="">
        <Logo />
      </a>
    </NavLink>
  );
};

export default LogoWrapper;
