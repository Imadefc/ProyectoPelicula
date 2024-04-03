import React, { useEffect, useState } from "react";
import SectionLista from "../components/SectionLista";
import style from "../style/Listas.module.css";

function Listas() {
  const [visto, setVisto] = useState(null);
  const [verMasTarde, setMastarde] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzA1YWE4OWMyZTMxOTliYThlNjQxOGQ3MDZlMzUwYyIsInN1YiI6IjYyMDMxZGJhZTMyM2YzMDA4ZWRhMTY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDHhSwwgvqEMJ9NOE1o-pwvbtw7y1FX41t21NzLlhXw",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/search/movie?key=" +
        import.meta.VITE_API_KEY +
        "&query=batman&include_adult=false&language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response.results))
      .catch((err) => console.error(err));
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
            array={data}
            setArray={setVisto}
            
            
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
          />
        )}
      </div>
    </article>
  );
}

export default Listas;
