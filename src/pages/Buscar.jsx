import style from "../styles/Buscar.module.css";
import CardPelicula from "../components/CardPelicula";
import Aside from "../components/Aside";
import { useEffect, useState } from "react";
import Ajustes from "./Ajustes";
import PerfilPelicula from "../components/PerfilPelicula";
import audioFile from "../assets/audios/deep-strange-whoosh-183845.mp3";
import {
  customHooksHandleAnterior,
  customHooksHandleBuscar,
  customHooksSiguiente,
  handleBotonAñadirVistoMastarde,
} from "../services/customHooks";
import Footer from "../components/Footer";
import Cartelera from "../components/Cartelera";
import fondo from "../assets/imagenes/ir_solo_al_cinex_razones_por_las_que_deberxas_intentarlox.jpg_1902800913.webp";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzA1YWE4OWMyZTMxOTliYThlNjQxOGQ3MDZlMzUwYyIsInN1YiI6IjYyMDMxZGJhZTMyM2YzMDA4ZWRhMTY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDHhSwwgvqEMJ9NOE1o-pwvbtw7y1FX41t21NzLlhXw",
  },
};

function Buscar({ varGlobales, setVarGlobales }) {
  const [datos, setDatos] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [tituloGuardado, setTituloGuardado] = useState("");
  const [numRes, setNumRes] = useState(null);
  const [page, setPage] = useState({ page: null, pageMax: null });
  const [mensajeBienvenida, setMensajeBienvenida] = useState (true)

  useEffect(() => {
    const audio = new Audio(audioFile);
    if (mensajeBienvenida) {
      console.log("Bienvenido");
      audio.play();
    }

    setTimeout(() => {
      setMensajeBienvenida(false);
    }, 2000);
  }, []);

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
      {mensajeBienvenida && <div className={style.mensaje}><h1 >CineSearch</h1></div>}
      <Aside />

      <div className={style.contenedor_imagen}>
        <img src={fondo} alt="" width={"100%"} height={'100%'} />
      </div>

      <div className={style.buscar}>
        <input
          onChange={(e) => {
            setBusqueda(e.target.value);
          }}
          onKeyDown={handleEnter}
          value={busqueda}
          type="search"
          placeholder="Busca tu pelicula en CineSearh"
          className={style.Buscador}
        />
      </div>

      <img
        onClick={handlebuscar}
        className={style.icono}
        width={"100px"}
        src="https://i.ibb.co/1dPp0wr/imagen-2024-04-04-011057169.png"
      />

      {numRes && (
        <h3 className={style.numRes}>Hay {numRes} elementos encontrados </h3>
      )}

      <article className={style.contenedor}>
        <div className={style.card_pelicula_buscador}>
          {datos &&
            datos.map((el) => {
              return (
                <div onClick={handleControlPerfilPelicula}>
                  <CardPelicula
                    puntuacion={el.vote_average}
                    key={el.id}
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
              );
            })}
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

      {mensajeBienvenida && <div className={style.mensaje_footer}></div>} 
      <Footer />
    </>
  );
}

export default Buscar;
