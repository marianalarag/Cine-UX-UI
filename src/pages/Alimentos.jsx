// src/pages/Alimentos/Alimentos.jsx
import FoodCard from "../components/FoodCard/FoodCard";
import CarritoWidget from "../components/CarritoWidget/CarritoWidget";
import "./Alimentos.css";

const CATEGORIAS = [
  {
    id: "combos",
    titulo: "Combos Especiales",
    color: "red",
    items: [
      {
        id: "combo-1",
        name: "Combo Familiar",
        description:
          "2 palomitas grandes + 4 refrescos medianos + 2 hot dogs. ¡Ideal para 4 personas!",
        price: "399",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/tradicional/MC_familiar_jumbo_promotional.png",
        tag: "Combos",
        tagColor: "red",
      },
      {
        id: "combo-2",
        name: "Combo Cinépolis",
        description:
          "Palomitas grandes + 2 refrescos medianos + nachos con queso. Para compartir en pareja.",
        price: "329",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/tradicional/maxi_combo_nachos_promotional.png",
        tag: "Combos",
        tagColor: "red",
      },
      {
        id: "combo-3",
        name: "Combo Hot Dog",
        description:
          "Palomitas grandes + 2 hot dogs + 2 refrescos medianos. La combinación perfecta.",
        price: "359",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/tradicional/maxi_combo_hotdog_small.png",
        tag: "Combos",
        tagColor: "red",
      },
    ],
  },
  {
    id: "palomitas",
    titulo: "Palomitas",
    color: "yellow",
    items: [
      {
        id: "palomitas-1",
        name: "Palomitas Jumbo",
        description:
          "Palomitas recién hechas con mantequilla. Tamaño jumbo para compartir.",
        price: "149",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/tradicional/palomitas_jumbo_promotional.png",
        tag: "Palomitas",
        tagColor: "yellow",
      },
      {
        id: "palomitas-2",
        name: "Palomitas Skwinkles",
        description:
          "Palomitas con el sabor ácido y picosito de Skwinkles. ¡Nuevo!",
        price: "129",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/tradicional/Skwinkles_TRAD_promotinal2.png",
        tag: "Palomitas",
        tagColor: "yellow",
      },
      {
        id: "palomitas-3",
        name: "Palomitas Colmillo",
        description:
          "Edición especial Colmillo de la amistad. Palomitas con chocolate.",
        price: "159",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/tradicional/Palomitas_Colmillo_promo.jpg",
        tag: "Palomitas",
        tagColor: "yellow",
      },
    ],
  },
  {
    id: "bebidas",
    titulo: "Bebidas",
    color: "blue",
    items: [
      {
        id: "bebida-1",
        name: "ICEE®",
        description:
          "La bebida frozen más famosa. Sabores: Coca-Cola, fresa o frambuesa.",
        price: "99",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/tradicional/icee_jumbo_promotional.png",
        tag: "Bebidas",
        tagColor: "blue",
      },
      {
        id: "bebida-2",
        name: "Refresco",
        description:
          "Coca-Cola, Pepsi, Fanta o Sprite. Tamaño mediano con refill.",
        price: "85",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/tradicional/refrescos_promotional.png",
        tag: "Bebidas",
        tagColor: "blue",
      },
      {
        id: "bebida-3",
        name: "Dragon Ice",
        description: "Bebida energizante frozen. Sabor dragón frutal.",
        price: "94",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/atmosfera/promotional_dragon_ice.png",
        tag: "Bebidas",
        tagColor: "blue",
      },
      {
        id: "bebida-4",
        name: "Agua Embotellada",
        description: "Agua natural o mineral. Presentación 600 ml.",
        price: "38",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/tradicional/agua_promotional.png",
        tag: "Bebidas",
        tagColor: "blue",
      },
    ],
  },
  {
    id: "snacks",
    titulo: "Snacks Salados",
    color: "orange",
    items: [
      {
        id: "snack-1",
        name: "Nachos",
        description: "Totopos de maíz bañados en queso cheddar. Con jalapeños.",
        price: "90",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/tradicional/400x268_nachos_tajin_promotional.jpg",
        tag: "Snacks",
        tagColor: "orange",
      },
      {
        id: "snack-2",
        name: "Hot Dog Jumbo",
        description:
          "Salchicha de pavo en pan artesanal con cebolla caramelizada.",
        price: "79",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/atmosfera/hotdog_mx_promotional.png",
        tag: "Snacks",
        tagColor: "orange",
      },
      {
        id: "snack-3",
        name: "Boneless",
        description:
          "Alitas de pollo sin hueso con salsa BBQ o Buffalo. Con papas gajo.",
        price: "132",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/atmosfera/boneless_promotional.png",
        tag: "Snacks",
        tagColor: "orange",
      },
      {
        id: "snack-4",
        name: "Papas Twister",
        description:
          "Papas en espiral con queso y condimentos. Crujientes y deliciosas.",
        price: "79",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/atmosfera/papas_twister_promotional.png",
        tag: "Snacks",
        tagColor: "orange",
      },
    ],
  },
  {
    id: "dulces",
    titulo: "Dulcería",
    color: "purple",
    items: [
      {
        id: "dulce-1",
        name: "Skwinkles® Chunks",
        description: "Tiras enchiladas de tamarindo. El clásico mexicano.",
        price: "73",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/tradicional/skwinkles_chunks_promotional.png",
        tag: "Dulces",
        tagColor: "purple",
      },
      {
        id: "dulce-2",
        name: "M&M's® Mega",
        description:
          "Chocolate con cacahuate en cubierta de colores. Presentación mega.",
        price: "85",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/tradicional/m&m_grandes_promotional.png",
        tag: "Dulces",
        tagColor: "purple",
      },
      {
        id: "dulce-3",
        name: "Skittles®",
        description: "Gomitas con sabor a frutas. Bolsa de 100g.",
        price: "48",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/tradicional/skittles_chicos_promotional.png",
        tag: "Dulces",
        tagColor: "purple",
      },
      {
        id: "dulce-4",
        name: "Pelón Pelonazo®",
        description:
          "El clásico dulce líquido de tamarindo. Sabor ácido y picosito.",
        price: "49",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/tradicional/pelon_promotional.png",
        tag: "Dulces",
        tagColor: "purple",
      },
    ],
  },
  {
    id: "cafeteria",
    titulo: "Cafetería",
    color: "brown",
    items: [
      {
        id: "cafe-1",
        name: "Frappé",
        description:
          "Bebida frozen a base de café. Sabores: vainilla, caramelo o moka.",
        price: "106",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/atmosfera/frappe_agua_promotional.png",
        tag: "Cafetería",
        tagColor: "brown",
      },
      {
        id: "cafe-2",
        name: "Capuccino",
        description:
          "Café espresso con leche vaporizada y espuma. Delicioso y cremoso.",
        price: "85",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/atmosfera/cafe_capuccino_promotional.png",
        tag: "Cafetería",
        tagColor: "brown",
      },
      {
        id: "cafe-3",
        name: "Americano",
        description: "Café americano recién preparado. Puro y aromático.",
        price: "65",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/atmosfera/cafe_americano_promotional.png",
        tag: "Cafetería",
        tagColor: "brown",
      },
      {
        id: "cafe-4",
        name: "Té Chai Latte",
        description: "Té chai con leche y especias. Cremoso y aromático.",
        price: "80",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/atmosfera/te_chai_latte_promotional.png",
        tag: "Cafetería",
        tagColor: "brown",
      },
    ],
  },
  {
    id: "postres",
    titulo: "Postres",
    color: "pink",
    items: [
      {
        id: "postre-1",
        name: "Cheesecake",
        description: "Pay de queso estilo neoyorkino con topping de fresa.",
        price: "100",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/atmosfera/cheesecake_white_promotional.png",
        tag: "Postres",
        tagColor: "pink",
      },
      {
        id: "postre-2",
        name: "Brownie Oreo®",
        description:
          "Brownie de chocolate con trozos de galleta Oreo®. Esponjoso y delicioso.",
        price: "105",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/atmosfera/brownie_oreo_promotional.png",
        tag: "Postres",
        tagColor: "pink",
      },
      {
        id: "postre-3",
        name: "Churro Bites",
        description:
          "Bocados de churro espolvoreados con azúcar y canela. Con salsa de chocolate.",
        price: "85",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/atmosfera/Churros_promotional.png",
        tag: "Postres",
        tagColor: "pink",
      },
      {
        id: "postre-4",
        name: "Waffles",
        description:
          "Waffles crujientes con jarabe de maple y topping de fresas.",
        price: "95",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/tradicional/TRAD-Waffles_414X268.jpg",
        tag: "Postres",
        tagColor: "pink",
      },
    ],
  },
  {
    id: "helados",
    titulo: "Helados",
    color: "cyan",
    items: [
      {
        id: "helado-1",
        name: "Helado Micha",
        description:
          "Helado de crema con trozos de galleta. Sabor único Cinépolis.",
        price: "84",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/tradicional/micha_promotional.png",
        tag: "Helados",
        tagColor: "cyan",
      },
      {
        id: "helado-2",
        name: "Mordisko® Oreo®",
        description:
          "Helado de vainilla cubierto de chocolate y galleta Oreo®. Mordisko original.",
        price: "46",
        image:
          "https://foods-static-content.cinepolis.com/redesign/MX/menus/tradicional/mordisko_oreo_promotional.png",
        tag: "Helados",
        tagColor: "cyan",
      },
    ],
  },
];

function Alimentos() {
  return (
    <main className="alimentos">
      <div className="alimentos-header">
        <h2 className="page-title">Dulcería</h2>
        <p className="page-subtitle">
          Los mejores snacks para acompañar tu película
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
              <FoodCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      ))}

      <CarritoWidget />
    </main>
  );
}

export default Alimentos;
