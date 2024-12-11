import "./index.css";

function Tooltip({ text = "Tooltip", position = "top", children }) {
  const classes = `my-tooltip my-tooltip--${position}`;

  return (
    <div className={classes}>
      {children}
      <div className="my-tooltip__text">{text}</div>
    </div>
  );
}

export default Tooltip;
