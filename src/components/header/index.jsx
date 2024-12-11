import "./index.css";

function Header(basement) {
  const {
    level = 1,
    children,
  } = basement;
  const classes = `my-header my-header--${level}`;

  return (
    <p className={classes}>
      {children}
    </p>
  );
}

export default Header;
