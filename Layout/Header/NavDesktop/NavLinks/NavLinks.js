import css from "./NavLinks.module.scss";

import NavLink from "@/components/NavLink";

import { deskNav } from "@/config/index";

const LinkList = () => {
  return (
    <ul className={css.ul}>
      {deskNav.map((link, i) => (
        <NavLink exact key={`${link.title}${i}`} href={link.route}>
          {<li>{link.title}</li>}
        </NavLink>
      ))}
    </ul>
  );
};

export default LinkList;
