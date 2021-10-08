const StyledDiv = ({ children, padding, boxShadow, border }, props) => {
  const inlineStyle = {
    padding: padding,
    boxShadow: boxShadow,
    border: border,
  };
  return <div style={inlineStyle}>{children}</div>;
};

export default StyledDiv;

StyledDiv.defaultProps = {
  padding: "2rem",
  boxShadow: "0 0 2rem -1rem currentColor",
  border: "thin solid currentColor",
};
