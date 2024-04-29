import { Route, Routes } from "react-router";
import Listas from "../src/pages/Listas";
import Buscar from "./pages/Buscar";
import Popular from "./pages/Popular";
import Ajustes from "./pages/Ajustes";
import { useContext, useState } from "react";
import PerfilPelicula from "./components/PerfilPelicula";
import { Idcontext } from "./context/idcontext";

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
        </Routes>
    </>
  );
}

export default App;
