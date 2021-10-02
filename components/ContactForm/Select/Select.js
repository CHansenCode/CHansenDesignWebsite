import css from "./Select.module.scss";

const Select = ({ text, valid, children }) => {
  return <div className={`${valid ? css.active : null}`}>{children}</div>;
};

export const Option = ({ text, active, onClick }) => {
  const style = {
    padding: "0.25rem 0.5rem",
    textTransform: "capitalize",
    borderRadius: "0.25rem",
    marginRight: "0.5rem",
  };
  return (
    <button style={style} className={`${active && "success-bg interaction"}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Select;
