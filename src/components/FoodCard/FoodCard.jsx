// src/components/FoodCard/FoodCard.jsx
import { useState } from "react";
import Button from "../Button/Button";
import { useCart } from "../../context/CartContext";
import "./FoodCard.css";

function FoodCard({ id, name, description, price, image, tag, tagColor }) {
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
    const item = {
      id,
      name,
      description,
      price: parseFloat(price),
      image,
      tag,
      tagColor,
      cantidad,
    };
    agregarAlCarrito(item);
    setCantidad(1); // Reset después de agregar
  };

  // Función para manejar errores de imagen
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/300x200?text=Producto";
    e.target.style.objectFit = "cover";
  };

  // Cargar imagen con un enfoque específico para el Cheesecake
  const handleImageLoad = (e) => {
    // Si la imagen es del Cheesecake, aseguramos que se vea bien
    if (name.includes("Cheesecake")) {
      e.target.style.objectFit = "cover";
    }
  };

  return (
    <div className="food-card">
      <div className="food-card__image-container">
        <img
          src={image}
          alt={name}
          className="food-card__image"
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="lazy"
        />
        {tag && (
          <span
            className={`food-card__tag food-card__tag--${tagColor || "blue"}`}
          >
            {tag}
          </span>
        )}
      </div>
      <div className="food-card__body">
        <h4 className="food-card__name">{name}</h4>
        <p className="food-card__desc">{description}</p>

        <div className="food-card__footer">
          <span className="food-card__price">${price}</span>

          <div className="food-card__quantity">
            <label htmlFor={`cantidad-${id}`} className="quantity-label">
              Cant:
            </label>
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
          text={`Agregar ${cantidad > 1 ? `(${cantidad})` : ""}`}
          variant="success"
          onClick={handleAgregar}
        />
      </div>
    </div>
  );
}

export default FoodCard;
