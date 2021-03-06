import SectionTitle from "./SectionTitle";

import css from "./Section.module.scss";

const Section = ({ myRef, title, id, minHeight, maxWidth, padding, fullWidth, center, column, children }) => {
  const propStyles = {
    maxWidth: fullWidth ? "100%" : maxWidth,
    minHeight: minHeight,
    padding: padding,
    display: center && "flex",
    alignItems: center && "center",
    justifyContent: center && "center",
    flexDirection: column && "column",
  };
  return (
    <>
      <section style={{ paddingLeft: "1rem" }}>{title && <SectionTitle title={title} />}</section>
      <section className={css.section} ref={myRef} id={id} style={propStyles}>
        {children}
      </section>
    </>
  );
};

Section.defaultProps = {
  padding: "0 0 8vw 0",
};

export default Section;
