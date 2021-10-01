import { useState } from "react";

const InfoIcon = ({ size, text, className, forceHover }) => {
  const [hover, setHover] = useState(false);

  function onMouseEnter() {
    setHover(true);
  }
  function onMouseLeave() {
    setHover(false);
  }

  const style = {
    wrapper: {
      position: "relative",
      height: size,
      width: size,

      textAlign: "right",

      display: "flex",
      justifyContent: "flex-end",

      pointer: "help",
    },

    icon: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      border: "thin solid currentColor",
    },

    onHover: {
      position: "absolute",
      top: 0,
      right: size,
      marginRight: size,
      background: "#fff",
      whiteSpace: "nowrap",
    },
  };

  return (
    <div style={style.wrapper} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div style={style.icon}>
        <h6>i</h6>
      </div>

      {(forceHover || hover) && <h5 style={style.onHover}>{text}</h5>}
    </div>
  );
};

export default InfoIcon;

InfoIcon.defaultProps = {
  width: "1rem",
  height: "1rem",
};
