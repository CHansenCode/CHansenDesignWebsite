import SectionTitle from "./SectionTitle";

import css from "./Section.module.scss";

const Section = ({ myRef, title, id, minHeight, maxWidth, paddingBottom, fullWidth, center, column, children }) => {
  const propStyles = {
    maxWidth: fullWidth ? "100%" : maxWidth,
    minHeight: minHeight,
    paddingBottom: paddingBottom,
    display: center && "flex",
    alignItems: center && "center",
    justifyContent: center && "center",
    flexDirection: column && "column",
  };
  return (
    <>
      <section className={css.section} ref={myRef} id={id} style={propStyles}>
        {title && <SectionTitle title={title} />}
        {children}
      </section>
    </>
  );
};

Section.defaultProps = {
  paddingBottom: "8vw",
};

export default Section;
