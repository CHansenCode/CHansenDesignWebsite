import css from "./SectionTitle.module.scss";

const SectionTitle = ({ title }) => {
  return (
    <div className={css.container}>
      <figure className={css.figure} />
      <h3>{title}</h3>
    </div>
  );
};

export default SectionTitle;
