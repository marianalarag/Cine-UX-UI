import FoodCard from "../components/FoodCard/FoodCard";
import "./Alimentos.css";

const CATEGORIAS = [
  {
    id: "bebidas",
    titulo: "🥤 Bebidas",
    color: "blue",
    items: [
      {
        name: "Refresco Grande",
        description:
          "Coca-Cola, Pepsi, Fanta o Sprite. Vaso de 40oz. Incluye libre servicio de refresco.",
        price: "69",
        emoji: "🥤",
        tag: "Bebidas",
        tagColor: "blue",
      },
      {
        name: "Refresco Mediano",
        description:
          "Coca-Cola, Pepsi, Fanta o Sprite. Vaso de 30oz. Incluye libre servicio de refresco.",
        price: "69",
        emoji: "🥤",
        tag: "Bebidas",
        tagColor: "blue",
      },
      {
        name: "Refresco Chico",
        description:
          "Coca-Cola, Pepsi, Fanta o Sprite. Vaso de 20oz. Incluye libre servicio de refresco.",
        price: "69",
        emoji: "🥤",
        tag: "Bebidas",
        tagColor: "blue",
      },
    ],
  },
  {
    id: "comestibles",
    titulo: "🍕 Comestibles",
    color: "yellow",
    items: [
      {
        name: "Hot Dog Clásico",
        description:
          "Salchicha de pavo en pan tostado con mostaza, ketchup y cebolla caramelizada.",
        price: "79",
        emoji: "🌭",
        tag: "Comestibles",
        tagColor: "yellow",
      },
      {
        name: "Nachos con Queso",
        description:
          "Totopos crujientes bañados en queso cheddar fundido. Con jalapeños y guacamole.",
        price: "89",
        emoji: "🧀",
        tag: "Comestibles",
        tagColor: "yellow",
      },
      {
        name: "Pizza Personal",
        description:
          "Pizza de 8 pulgadas con mozzarella y tus ingredientes favoritos. ¡Recién horneada!",
        price: "129",
        emoji: "🍕",
        tag: "Comestibles",
        tagColor: "yellow",
      },
    ],
  },
  {
    id: "snacks",
    titulo: "🍬 Snacks y Dulces",
    color: "purple",
    items: [
      {
        name: "Palomitas de Maíz",
        description:
          "Palomitas recién hechas en sabores: natural, mantequilla extra, chile y limón o caramelo.",
        price: "79",
        emoji: "🍿",
        tag: "Snacks",
        tagColor: "purple",
      },
      {
        name: "Gummies Surtidos",
        description:
          "Mix de gomitas de ositos, serpientes y ácidas. Bolsa de 200g para compartir.",
        price: "55",
        emoji: "🍬",
        tag: "Dulces",
        tagColor: "purple",
      },
      {
        name: "Chocolate Premium",
        description:
          "Tableta de chocolate belga 70% cacao. Opciones: amargo, leche o blanco con frutos secos.",
        price: "69",
        emoji: "🍫",
        tag: "Dulces",
        tagColor: "purple",
      },
      {
        name: "Pretzels & Dip",
        description:
          "Pretzels salados con salsa de queso cheddar o mantequilla de maní. Perfecto para compartir.",
        price: "65",
        emoji: "🥨",
        tag: "Snacks",
        tagColor: "purple",
      },
    ],
  },
];

function Alimentos() {
  return (
    <main className="alimentos">
      <div className="alimentos-header">
        <h2 className="page-title">Alimentos</h2>
        <p className="page-subtitle">
          Disfruta lo mejor de nuestra selección gastronómica
        </p>
      </div>

      {CATEGORIAS.map((cat) => (
        <section key={cat.id} className="categoria-section">
          <div className="categoria-header">
            <h3 className={`categoria-titulo categoria-titulo--${cat.color}`}>
              {cat.titulo}
            </h3>
            <div className={`categoria-line categoria-line--${cat.color}`} />
          </div>
          <div className="food-grid">
            {cat.items.map((item) => (
              <FoodCard key={item.name} {...item} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default Alimentos;
