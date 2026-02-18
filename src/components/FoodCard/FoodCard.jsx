import Button from "../Button/Button";
import "./FoodCard.css";

function FoodCard({ name, description, price, emoji, tag, tagColor }) {
  return (
    <div className="food-card">
      <div className={`food-card__emoji food-card__emoji--${tagColor || "blue"}`}>
        {emoji}
      </div>
      <div className="food-card__body">
        {tag && (
          <span className={`food-card__tag food-card__tag--${tagColor || "blue"}`}>
            {tag}
          </span>
        )}
        <h4 className="food-card__name">{name}</h4>
        <p className="food-card__desc">{description}</p>
        <div className="food-card__footer">
          <span className="food-card__price">${price}</span>
          <Button text="Agregar" variant="success" />
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
