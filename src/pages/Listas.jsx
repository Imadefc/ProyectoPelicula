import React, { useEffect, useState } from "react";
import SectionLista from "../components/SectionLista";
import style from "../style/Listas.module.css";

function Listas() {
  const [visto, setVisto] = useState(null);
  const [verMasTarde, setMastarde] = useState(null);
  useEffect(() => {
    try {
      setVisto(JSON.parse(localStorage.getItem("visto")));
      setMastarde(JSON.parse(localStorage.getItem("mastarde")));
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <article>
        
      <div className={style.contenedor}>
        {!visto && <h1 className= {style.nohay}>No hay peliculas en Visto</h1>}
        {visto && (
          <SectionLista
            botonIzq={"Eliminar"}
            botonDer={"Ver más tarde"}
            title={"Lista Vistos"}
            array={visto}
            setArray={setVisto}
            setArrayContr={setMastarde}
            arrayContr={verMasTarde}
            
            
          />
        )}
        {!verMasTarde && <h1 className= {style.nohay}>No hay peliculas en Ver mas tarde</h1>}
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
      </div>
    </article>
  );
}

export default Listas;
