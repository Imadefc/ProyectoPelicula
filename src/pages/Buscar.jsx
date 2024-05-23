import React, { useEffect, useState } from 'react';
import style from "../styles/Buscar.module.css";
import CardPelicula from "../components/CardPelicula";
import Aside from "../components/Aside";
import {
  customHooksHandleAnterior,
  customHooksHandleBuscar,
  customHooksSiguiente,
  handleBotonAñadirVistoMastarde,
} from "../services/customHooks";
import Footer from "../components/Footer";
import Cartelera from "../components/Cartelera";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzA1YWE4OWMyZTMxOTliYThlNjQxOGQ3MDZlMzUwYyIsInN1YiI6IjYyMDMxZGJhZTMyM2YzMDA4ZWRhMTY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDHhSwwgvqEMJ9NOE1o-pwvbtw7y1FX41t21NzLlhXw",
  },
};

function Buscar({ varGlobales, setVarGlobales }) {
  const [datos, setDatos] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [tituloGuardado, setTituloGuardado] = useState("");
  const [numRes, setNumRes] = useState(null);
  const [page, setPage] = useState({ page: null, pageMax: null });

  function handlebuscar() {
    customHooksHandleBuscar(
      busqueda,
      setDatos,
      setTituloGuardado,
      setPage,
      setNumRes,
      setBusqueda
    );
  }

  function handleEnter(event) {
    if (event.code === "Enter") {
      handlebuscar();
    }
  }

  function handleSiguiente() {
    customHooksSiguiente(page, setPage, tituloGuardado, setDatos, setPage);
  }

  function handleAnterior() {
    customHooksHandleAnterior(page, tituloGuardado, setDatos, setPage);
  }

  function handleControlPerfilPelicula(e) {
    console.log(e.currentTarget.name);
  }

  return (
    <>
      <div className="body_buscar">
        <Aside />
   
        <div className={style.buscar}>
          <input
            onChange={(e) => {
              setBusqueda(e.target.value);
            }}
            onKeyDown={handleEnter}
            value={busqueda}
            type="search"
            placeholder="Busca tu pelicula en CineSearch"
            className={style.Buscador}
          />
               <img
          onClick={handlebuscar}
          className={style.icono}
          width={"100px"}
          src="https://i.ibb.co/1dPp0wr/imagen-2024-04-04-011057169.png"
        />
      
        </div>

       

        {numRes && (
          <h3 className={style.numRes}>Hay {numRes} elementos encontrados</h3>
        )}

        <article className={style.contenedor}>
          <div className={style.card_pelicula_buscador}>
            {datos &&
              datos.map((el) => (
                <div onClick={handleControlPerfilPelicula} key={el.id}>
                  <CardPelicula
                    puntuacion={el.vote_average}
                    year={el.release_date}
                    img={el.poster_path}
                    id={el.id}
                    descrp={el.overview}
                    title={el.title}
                    handleBotonDer={() =>
                      handleBotonAñadirVistoMastarde("mastarde", el)
                    }
                    handleBotonIzq={() =>
                      handleBotonAñadirVistoMastarde("visto", el)
                    }
                  />
                </div>
              ))}
            {datos && <span></span>}
          </div>

          {datos && (
            <div className={style.page_padre}>
              <div className={style.page}>
                <a onClick={handleAnterior}>Anterior</a>
                <p>{page.page}</p>
                <a onClick={handleSiguiente}>Siguiente</a>
              </div>
            </div>
          )}

          <div className={style.contenedor_home_principal}>
            {!datos && <Cartelera />}
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}

export default Buscar;