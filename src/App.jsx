import { Route, Routes } from "react-router";
import Listas from "../src/pages/Listas";
import Buscar from "./pages/Buscar";
import Popular from "./pages/Popular";
import { useState, useContext, useEffect } from "react";
import Footer from "./components/Footer";
import { opciones } from "./services/opciones";
import OpcionesView from "./pages/OpcionesViews";
import OpcionesIviews from "./pages/OpcionesIviews";
import { opcionesI } from "./services/opcionesI";
import Contactos from "./pages/Contactos";
import { Idcontext } from "./context/idcontext";
import Ajustes from "./pages/Ajustes";
import PerfilPelicula from "./components/PerfilPelicula";
import { Layout } from "./Layout";
import { AudioProvider } from "./context/AudioContext";
import Audio from "./components/Audio";
import UsuariosPrincipio from "./pages/UsuariosPrincipio";
import { LiaYahoo } from "react-icons/lia";

function App() {
  const [ajustes, setAjustes] = useState({
    oscuro: localStorage.getItem("oscuro"),
    adult: localStorage.getItem("adult"),
    lenguaje: localStorage.getItem("lenguaje"),
  });

  const { selectedMovie } = useContext(Idcontext);

  return (
    <AudioProvider>
      <div className="body_app">
        {selectedMovie && <PerfilPelicula id={selectedMovie} />}
        <Routes>
          <Route
            path="ajustes"
            element={
              <Layout>
                <Ajustes />
              </Layout>
            }
          />
          <Route
            path="home"
            element={
              <Layout>
               <Audio />
                <Buscar />
              </Layout>
            }
          />
          <Route
            path="listas"
            element={
              <Layout>
                <Listas />
              </Layout>
            }
          />
          <Route
            path="/"
            element={
              <Layout>
                <UsuariosPrincipio />
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
            path="contacto"
            element={
              <Layout>
                <Contactos />
              </Layout>
            }
          />
          <Route path="*" element={<Footer />} />
          {opciones.map((opcion, index) => (
            <Route
              key={index}
              path={"/" + opcion.name.toLowerCase()}
              element={<OpcionesView {...opcion} />}
            />
          ))}
          {opcionesI.map((opcionI, indexI) => (
            <Route
              key={indexI}
              path={"/" + opcionI.nameI.toLowerCase()}
              element={<OpcionesIviews {...opcionI} />}
            />
          ))}
        </Routes>
      </div>
    </AudioProvider>
  );
}

export default App;
