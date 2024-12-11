import "./index.css";

function Typography(basement) {
  const {
    textSize = "md",
    children,
  } = basement;
  const classes = `my-typography my-typography--${textSize}`;

  return (
    <p className={classes}>
      {children}
    </p>
  );
}

export default Typography;
