import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cartelera from "../pages/Cartelera";
import Alimentos from "../pages/Alimentos";
import Otros from "../pages/Otros";
import Detalle from "../pages/Detalle";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cartelera" element={<Cartelera />} />
      <Route path="/alimentos" element={<Alimentos />} />
      <Route path="/otros" element={<Otros />} />
      <Route path="/pelicula/:id" element={<Detalle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
