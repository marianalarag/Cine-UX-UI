import { useState } from "react";
import Button from "../Button/Button";
import { useCart } from "../../context/CartContext";
import "./FoodCard.css";

function FoodCard({ id, name, description, price, emoji, tag, tagColor }) {
  const [cantidad, setCantidad] = useState(1);
  const { agregarAlCarrito } = useCart();

  // onChange event - actualiza cantidad
  const handleCantidadChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= 10) {
      setCantidad(value);
    }
  };

  const handleAgregar = () => {
    const item = { id, name, description, price, emoji, tag, cantidad };
    agregarAlCarrito(item);
    setCantidad(1); // Reset después de agregar
  };

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
          
          <div className="food-card__quantity">
            <label htmlFor={`cantidad-${id}`} className="quantity-label">Cant:</label>
            <input
              id={`cantidad-${id}`}
              type="number"
              min="1"
              max="10"
              value={cantidad}
              onChange={handleCantidadChange}
              className="quantity-input"
            />
          </div>
        </div>

        <Button 
          text={`Agregar ${cantidad > 1 ? `(${cantidad})` : ''}`}
          variant="success" 
          onClick={handleAgregar}
        />
      </div>
    </div>
  );
}

export default FoodCard;
