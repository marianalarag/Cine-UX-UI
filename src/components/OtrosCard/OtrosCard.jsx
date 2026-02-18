import Button from "../Button/Button";
import "./OtrosCard.css";

function OtrosCard({ title, description, badge, badgeColor, icon, buttonText, buttonVariant, highlight }) {
  return (
    <div className={`otros-card ${highlight ? "otros-card--highlight" : ""}`}>
      {badge && (
        <span className={`otros-card__badge otros-card__badge--${badgeColor || "blue"}`}>
          {badge}
        </span>
      )}
      <div className="otros-card__icon">{icon}</div>
      <h4 className="otros-card__title">{title}</h4>
      <p className="otros-card__desc">{description}</p>
      <Button
        text={buttonText || "Ver más"}
        variant={buttonVariant || "primary"}
      />
    </div>
  );
}

export default OtrosCard;
