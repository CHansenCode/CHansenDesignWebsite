import { sitemap } from "config/";
import NavLink from "@/components/NavLink";

import css from "./Sitemap.module.scss";

const Sitemap = () => {
  return (
    <ul className={css.ul}>
      {sitemap.map((link, i) => (
        <NavLink key={`${link.title}${i}`} href={link.route} exact>
          <li>{link.title}</li>
        </NavLink>
      ))}
    </ul>
  );
};

export default Sitemap;
