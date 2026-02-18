import OtrosCard from "../components/OtrosCard/OtrosCard";
import "./Otros.css";

const PROMOCIONES = [
  {
    title: "2x1 Miércoles de Cine",
    description:
      "Todos los miércoles lleva a quien más quieras. Paga 1 boleto y obtén el segundo gratis. Aplica en salas 2D y 3D.",
    badge: "Limitado",
    badgeColor: "red",
    icon: "🎟️",
    buttonText: "Activar oferta",
    buttonVariant: "accent",
    highlight: true,
  },
  {
    title: "Estudiante VIP",
    description:
      "Presenta tu credencial de estudiante vigente y disfruta de 30% de descuento en cualquier función de lunes a jueves.",
    badge: "Estudiantes",
    badgeColor: "blue",
    icon: "🎓",
    buttonText: "Ver condiciones",
    buttonVariant: "primary",
  },
  {
    title: "Familia Pack",
    description:
      "4 boletos + 2 palomitas grandes + 4 refrescos medianos. El paquete ideal para salir en familia con hasta un 25% de ahorro.",
    badge: "Popular",
    badgeColor: "green",
    icon: "👨‍👩‍👧‍👦",
    buttonText: "Comprar pack",
    buttonVariant: "success",
  },
];

const MEMBRESIAS = [
  {
    title: "Club Cinépolis",
    description:
      "Acumula puntos en cada compra y canjéalos por boletos, palomitas o regalos exclusivos. ¡Gratis al registrarte!",
    badge: "Gratis",
    badgeColor: "green",
    icon: "⭐",
    buttonText: "Unirme ahora",
    buttonVariant: "success",
  },
  {
    title: "Cinépolis Klic",
    description:
      "Suscripción mensual que te da acceso a un boleto semanal y descuentos exclusivos en alimentos. La mejor relación calidad-precio.",
    badge: "$149/mes",
    badgeColor: "purple",
    icon: "💜",
    buttonText: "Suscribirme",
    buttonVariant: "purple",
    highlight: true,
  },
  {
    title: "Tarjeta Regalo",
    description:
      "Regala experiencias únicas. Disponible en montos de $200, $500 y $1,000 pesos. Sin fecha de vencimiento.",
    badge: "Regalo",
    badgeColor: "yellow",
    icon: "🎁",
    buttonText: "Comprar tarjeta",
    buttonVariant: "accent",
  },
];

const PREVENTAS = [
  {
    title: "Mission Impossible 8",
    description:
      "El espectacular regreso de Ethan Hunt. Preventa disponible con 15% de descuento y asientos preferenciales garantizados.",
    badge: "Estreno",
    badgeColor: "red",
    icon: "🕵️",
    buttonText: "Preventa",
    buttonVariant: "accent",
    highlight: true,
  },
  {
    title: "Spider-Man: Brand New Day",
    description:
      "El hombre araña vuelve al Universo Marvel. Asegura tu lugar desde hoy y recibe un poster coleccionable.",
    badge: "Próximo",
    badgeColor: "blue",
    icon: "🕷️",
    buttonText: "Reservar",
    buttonVariant: "primary",
  },
];

const FORMATOS = [
  {
    title: "IMAX",
    description:
      "La experiencia de imagen y sonido más inmersiva del cine. Pantalla gigante que ocupa tu campo visual completo.",
    badge: "Premium",
    badgeColor: "yellow",
    icon: "📺",
    buttonText: "Ver funciones",
    buttonVariant: "accent",
  },
  {
    title: "4DX",
    description:
      "Sillas en movimiento, efectos de viento, agua y aromas. Tu cuerpo vivirá la película en tiempo real.",
    badge: "Sensorial",
    badgeColor: "purple",
    icon: "🌀",
    buttonText: "Ver funciones",
    buttonVariant: "purple",
  },
  {
    title: "Sala VIP",
    description:
      "Butacas reclinables con servicio a la butaca, menú gourmet y ambiente exclusivo. Cine de primera clase.",
    badge: "Exclusivo",
    badgeColor: "yellow",
    icon: "🛋️",
    buttonText: "Reservar VIP",
    buttonVariant: "accent",
    highlight: true,
  },
  {
    title: "3D Cinépolis",
    description:
      "Tecnología 3D de última generación para una imagen nítida y profunda. Incluye lentes especiales reutilizables.",
    badge: "Disponible",
    badgeColor: "green",
    icon: "👓",
    buttonText: "Ver funciones",
    buttonVariant: "success",
  },
];

function Otros() {
  return (
    <main className="otros">
      {/* Promociones */}
      <section className="otros-section">
        <div className="otros-section-header">
          <h2 className="page-title">Promociones</h2>
          <p className="page-subtitle">
            Descuentos y ofertas exclusivas para que disfrutes más gastando
            menos
          </p>
        </div>
        <div className="otros-grid otros-grid--3">
          {PROMOCIONES.map((item) => (
            <OtrosCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Membresías */}
      <section className="otros-section">
        <div className="otros-section-header">
          <h2 className="page-title">Membresías</h2>
          <p className="page-subtitle">
            Únete a nuestra comunidad y accede a beneficios exclusivos
          </p>
        </div>
        <div className="otros-grid otros-grid--3">
          {MEMBRESIAS.map((item) => (
            <OtrosCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Preventas */}
      <section className="otros-section">
        <div className="otros-section-header">
          <h2 className="page-title">Preventas</h2>
          <p className="page-subtitle">
            Sé el primero en ver los estrenos más esperados del año
          </p>
        </div>
        <div className="otros-grid otros-grid--2">
          {PREVENTAS.map((item) => (
            <OtrosCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Formatos especiales */}
      <section className="otros-section">
        <div className="otros-section-header">
          <h2 className="page-title">Formatos Especiales</h2>
          <p className="page-subtitle">
            Tecnología de vanguardia para una experiencia única e incomparable
          </p>
        </div>
        <div className="otros-grid otros-grid--4">
          {FORMATOS.map((item) => (
            <OtrosCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Otros;
