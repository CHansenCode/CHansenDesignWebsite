const CodeBlock = ({ title, code, padding, background, color }) => {
  const inlineStyle = {
    padding: padding,
    background: background,
    color: color,
  };
  return (
    <pre style={inlineStyle}>
      {title && <h2 style={{ marginBottom: "1rem" }}>{title}</h2>}
      <code className="secondary">{code}</code>
    </pre>
  );
};

export default CodeBlock;

CodeBlock.defaultProps = {
  padding: "2rem",
  background: "linear-gradient(135deg, rgba(20,50,60,1) 0%, rgba(20,65,65,1) 100%)",
  color: "currentColor",
};
