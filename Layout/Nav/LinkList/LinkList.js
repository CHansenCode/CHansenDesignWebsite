import NavLink from "@/components/NavLink";

import css from "./LinkList.module.scss";

import { deskNav } from "@/config/index";

const LinkList = ({ ternary }) => {
  const inlineStyle = {
    top: ternary ? "100vh" : "0",
  };
  return (
    <ul className={css.ul} style={inlineStyle}>
      {deskNav.map((link, i) => (
        <NavLink exact key={`${link.title}${i}`} href={link.route}>
          {<li>{link.title}</li>}
        </NavLink>
      ))}
    </ul>
  );
};

export default LinkList;
