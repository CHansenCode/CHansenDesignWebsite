import css from "./SectionTitle.module.scss";

const SectionTitle = ({ title }) => {
  return (
    <div className={css.container}>
      <figure className={`${css.figure} secondary`} />
      <h4>{title}</h4>
    </div>
  );
};

export default SectionTitle;
