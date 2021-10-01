import { useState } from "react";

import InfoIcon from "../InfoIcon";
import css from "./Input.module.scss";

const Input = ({ label, placeholder, valid, required, infoOnHover, id, className, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  function onFocus() {
    setIsFocused(true);
  }
  function onBlur() {
    setIsFocused(false);
  }

  return (
    <div className={`${css.div} ${className}`}>
      <header className={css.header}>
        {label && <h5 className={`${css.label}`}>{label} :</h5>}
        {required && <h6 className={`${css.required} secondary`}>* req.</h6>}
        {infoOnHover && <InfoIcon size="1rem" text={infoOnHover} forceHover={isFocused} />}
      </header>

      <div className={`${css.inputWrapper} ${valid && css.valid} ${valid && "success-bg success"}`}>
        <input
          id={id}
          placeholder={placeholder}
          onFocus={() => onFocus()}
          onBlur={() => onBlur()}
          value={value}
          onChange={onChange}
        />

        {valid && <div className={css.checkmark}>✓</div>}
      </div>
    </div>
  );
};

export default Input;
