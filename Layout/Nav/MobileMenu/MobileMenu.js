import NavLink from "@/components/NavLink";
import Logo from "@/public/Logo/Logo";

import css from "./MobileMenu.module.scss";

import { deskNav } from "@/config/index";

const MobileMenu = ({ setMobileMenuOpen }) => {
  return (
    <div className={css.container}>
      <Logo width="200px" />
      {deskNav.map((link, i) => (
        <NavLink exact key={`${link.title}${i}`} href={link.route}>
          {<li onClick={() => setMobileMenuOpen(false)}>{link.title}</li>}
        </NavLink>
      ))}
    </div>
  );
};

export default MobileMenu;
