import { Route, Routes } from "react-router";
import Home from "../src/pages/Home";
import Listas from "./pages/Listas";
import Buscar from "./pages/Buscar";
import Popular from "./pages/Popular";
import Ajustes from "./pages/Ajustes";
import { useState } from "react";
import Footer from "./components/Footer";
import { opciones } from "./services/opciones";
import OpcionesView from "./pages/OpcionesViews";
import OpcionesIviews from "./pages/OpcionesIviews";
import { opcionesI } from "./services/opcionesI";
import Contactos from "./pages/Contacto";


function App() {
  return (
    <>
        <Routes> 
          <Route path="home" element={<Home />} />
          <Route path="listas" element={<Listas />} />
          <Route path="popular" element={<Popular />} />
          <Route path="/" element={<Buscar setVarGlobales={setAjustes} varGlobales={ajustes} />} />
          <Route path="contacto" element={<Contactos/>}/>
        </Routes>
    </>
  );
}

export default App;
