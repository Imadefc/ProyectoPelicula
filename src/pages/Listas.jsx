import { useEffect, useState } from "react";
import SectionLista from "../components/SectionLista";
import style from "../style/Listas.module.css";
import Aside from "../components/Aside";
import Ajustes from "./Ajustes";
import Footer from "../components/Footer";


function Listas() {
  const [visto, setVisto] = useState(null);
  const [verMasTarde, setMastarde] = useState(null);
  const [control, setControl] = useState(true);
  useEffect(() => {
    if (control) {
      setVisto(JSON.parse(localStorage.getItem("visto")));
      setMastarde(JSON.parse(localStorage.getItem("mastarde")));
      setControl(false);
    }
    localStorage.setItem("visto", JSON.stringify(visto));
    localStorage.setItem("mastarde", JSON.stringify(verMasTarde));
  }, [visto, verMasTarde]);
  return (
    <>
      <Aside />

      <div className="body_listas">
        <article className={style.contenedor}>
          {!visto && <h1 className={style.nohay}>No hay peliculas en Visto</h1>}
          {visto && (
            <SectionLista
              botonIzq={"Eliminar"}
              botonDer={"Ver más tarde"}
              title={"Lista Vistos"}
              array={visto}
              setArray={setVisto}
              setArrayContr={setMastarde}
              arrayContr={verMasTarde}
              name={"Eliminar"}
            />
          )}
          {!verMasTarde && (
            <h1 className={style.nohay}>No hay peliculas en Ver mas tarde</h1>
          )}
          {verMasTarde && (
            <SectionLista
              botonDer={"Visto"}
              botonIzq={"Eliminar"}
              title={"Lista Ver más Tarde"}
              array={verMasTarde}
              setArray={setMastarde}
              setArrayContr={setVisto}
              arrayContr={visto}
            />
          )}
        </article>
      </div>

      <Footer />
    </>
  );
}

export default Listas;
