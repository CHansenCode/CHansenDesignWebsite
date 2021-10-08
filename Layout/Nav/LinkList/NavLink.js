import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import css from "./NavLink.module.scss";

const NavLink = ({ href, exact, children, ...props }) => {
  const { pathname } = useRouter();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += ` active ${css.isActive}`;
  }

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};

export default NavLink;

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  exact: false,
};
