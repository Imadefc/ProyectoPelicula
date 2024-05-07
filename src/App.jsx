import { Route, Routes } from "react-router";
import Listas from "../src/pages/Listas";
import Buscar from "./pages/Buscar";
import Popular from "./pages/Popular";
import { useState, useContext } from "react";
import Footer from "./components/Footer";
import { opciones } from "./services/opciones";
import OpcionesView from "./pages/OpcionesViews";
import OpcionesIviews from "./pages/OpcionesIviews";
import { opcionesI } from "./services/opcionesI";
import Contactos from "./pages/Contactos";
import { Idcontext } from "./context/idcontext";
import Ajustes from "./pages/Ajustes";
import PerfilPelicula from "./components/PerfilPelicula";


function App() {

  const [ajustes, setAjustes]=useState({     oscuro:localStorage.getItem("oscuro"),     adult:localStorage.getItem("adult"),     lenguaje:localStorage.getItem("lenguaje")   })

  const { selectedMovie } = useContext (Idcontext)

  return (
    <>

      {selectedMovie && <PerfilPelicula id={ selectedMovie } />}
        
        <Routes>
          <Route path="ajustes" element={<Ajustes />} />
          <Route path="listas" element={<Listas />} />
          <Route path="popular" element={<Popular />} />
          <Route path="/" element={<Buscar setVarGlobales={setAjustes} varGlobales={ajustes} />} />
          <Route path="contacto" element={<Contactos/>}/>
        </Routes>
    </>
  );
}

export default App;
