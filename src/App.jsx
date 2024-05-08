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
import Ajustes from "./components/Ajustes";
import PerfilPelicula from "./components/PerfilPelicula";
import {Layout} from './Layout'

function App() {

  const [ajustes, setAjustes]=useState({     oscuro:localStorage.getItem("oscuro"),     adult:localStorage.getItem("adult"),     lenguaje:localStorage.getItem("lenguaje")   })

  const { selectedMovie } = useContext (Idcontext)

  return (
    <>
    
      {selectedMovie && <PerfilPelicula id={ selectedMovie } />}
        
        <Routes>
          <Route path="ajustes"
           element={
           <Layout>
           <Ajustes />
           </Layout>
           }/>
          <Route
          path="listas"
          element={
            <Layout>
              <Listas />
            </Layout>
          }
        />
        <Route
          path="popular"
          element={
            <Layout>
              <Popular />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Buscar setVarGlobales={setAjustes} varGlobales={ajustes} />
            </Layout>
          }
        />
        <Route
          path="contacto"
          element={
            <Layout>
              <Contactos />
            </Layout>
          }
        />
        </Routes>
    </>
  );
}

export default App;
