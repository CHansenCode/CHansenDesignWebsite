import { useState } from "react";

import css from "./OnHoverTranslate.module.scss";

const OnHoverTranslate = ({ children }) => {
  const [hover, setHover] = useState(false);
  //
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className={`${css.base} ${hover && css.onHover}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {hover}
    </div>
  );
};

export default OnHoverTranslate;
