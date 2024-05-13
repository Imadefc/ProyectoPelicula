import { Route, Routes } from "react-router";
import Listas from "../src/pages/Listas";
import Buscar from "./pages/Buscar";
import Popular from "./pages/Popular";
import { useState } from "react";
import Footer from "./components/Footer";
import { opciones } from "./services/opciones";
import OpcionesView from "./pages/OpcionesViews";
import OpcionesIviews from "./pages/OpcionesIviews";
import { opcionesI } from "./services/opcionesI";
import Contactos from "./pages/Contactos";
import Entrada from "./pages/Entrada";


function App() {
  const [ajustes, setAjustes]=useState({
    oscuro:localStorage.getItem("oscuro"),
    adult:localStorage.getItem("adult"),
    lenguaje:localStorage.getItem("lenguaje")
  })
  return (
    <>
        <Routes> 
          <Route path="listas" element={<Listas />} />
          <Route path="popular" element={<Popular />} />
          <Route path="/" element={<Entrada/>}/>
          <Route path="contacto" element={<Contactos/>}/>
        </Routes>
    </>
  );
}
//<Route path="/" element={<Buscar setVarGlobales={setAjustes} varGlobales={ajustes} />} />
export default App;
