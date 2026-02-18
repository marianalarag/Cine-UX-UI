import "./Button.css";

function Button({ text, onClick, variant = "primary", icon, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`custom-button custom-button--${variant}`}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {text}
    </button>
  );
}

export default Button;
