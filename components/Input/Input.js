import css from "./Input.module.scss";

const Input = ({ label, infoHover, placeholder, id, className, value, onChange }) => {
  return (
    <div className={`${css.div} ${className}`}>
      {label && <h5>{label} :</h5>}

      <input id={id} placeholder={placeholder} onChange={onChange} value={value} />

      {infoHover && <InfoHover data={infoHover} />}
    </div>
  );
};

export default Input;

const InfoHover = ({ data }) => {
  return (
    <div className={css.infoHover}>
      i<span>{data}</span>
    </div>
  );
};
