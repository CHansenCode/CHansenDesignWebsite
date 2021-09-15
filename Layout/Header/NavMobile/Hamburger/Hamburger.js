import css from "./Hamburger.module.scss";

const Hamburger = ({ ternary, onClick }) => {
  return (
    <div className={css.fixedDiv}>
      <div className={css.hamburger} onClick={onClick}>
        <span className={`${!ternary ? css.topBun : css.topBunOpen}`} />
        <span className={`${!ternary ? css.meat : css.meatOpen}`} />
        <span className={`${!ternary ? css.botBun : css.botBunOpen}`} />
      </div>
    </div>
  );
};

export default Hamburger;
