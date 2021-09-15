import Sitemap from "./Sitemap/Sitemap";
import Social from "./Social/Social";
import BackToTop from "./BackToTop/BackToTop";
import Legal from "./Legal/Legal";

import css from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div>
        <div className={css.social}>
          <Social />
        </div>
        <div className={css.info}>
          <Legal />
        </div>
        <div className={css.siteMap}>
          <Sitemap />
        </div>
        <div className={css.backToTop}>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
