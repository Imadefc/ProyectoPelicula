import style from "../styles/Buscar.module.css";
import CardPelicula from "../components/CardPelicula";
import Aside from "../components/Aside";
import { useState } from "react";
import Ajustes from "../components/Ajustes";
import PerfilPelicula from "../components/PerfilPelicula"
import { customHooksHandleAnterior, customHooksHandleBuscar, customHooksSiguiente, handleBotonAñadirVistoMastarde } from "../services/customHooks";
import Footer from "../components/Footer";
import Cartelera from "../components/Cartelera";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzA1YWE4OWMyZTMxOTliYThlNjQxOGQ3MDZlMzUwYyIsInN1YiI6IjYyMDMxZGJhZTMyM2YzMDA4ZWRhMTY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDHhSwwgvqEMJ9NOE1o-pwvbtw7y1FX41t21NzLlhXw",
  },
};

function Buscar({varGlobales,setVarGlobales}) {
  const [datos, setDatos] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [tituloGuardado, setTituloGuardado] = useState("");
  const [numRes, setNumRes]= useState(null);
  const [page, setPage] = useState({ page: null, pageMax: null });

  

  function handlebuscar(){
    customHooksHandleBuscar(busqueda,setDatos,setTituloGuardado,setPage,setNumRes,setBusqueda)
  }
  function handleEnter(event) {
    if (event.code === "Enter") {
      handlebuscar();
    }
  }

  function handleSiguiente() {
    customHooksSiguiente(page,setPage,tituloGuardado,setDatos,setPage)
  }

  function handleAnterior(){
    customHooksHandleAnterior(page,tituloGuardado,setDatos,setPage)
  }
  function handleControlPerfilPelicula(e){
    console.log(e.currentTarget.name);
  }
  return (
    <>
      <Aside/>
      
      <div className={style.buscar}>
        <input
          onChange={(e) => {
            setBusqueda(e.target.value);
          }}
          onKeyDown={handleEnter}
          value={busqueda}
          type="search"
          placeholder="Busca tu Pelicula"
          className={style.Buscador}
        />
      </div>
      <img onClick={handlebuscar}  className={style.icono} width={"100px"} src="https://i.ibb.co/1dPp0wr/imagen-2024-04-04-011057169.png"/>
      {numRes && <h3 className={style.numRes}>Hay {numRes} elementos encontrados </h3>}
      <article className={style.contenedor}>
        {datos && 
          datos.map((el) => {
            return (
              <div  onClick={handleControlPerfilPelicula}>
              <CardPelicula
                puntuacion={el.vote_average}
                key={el.id}
                year={el.release_date}
                img={el.poster_path}
                descrp={el.overview}
                title={el.title}
                handleBotonDer={()=>handleBotonAñadirVistoMastarde("mastarde",el)}
                handleBotonIzq={()=>handleBotonAñadirVistoMastarde("visto",el)}
             
              />
              </div>
              
            );
          })}
          <span></span>
        {datos && (
          <div className={style.page}>
            <a onClick={handleAnterior}>Anterior</a>
            <p>{page.page}</p>
            <a onClick={handleSiguiente}>Siguiente</a>
          </div>
        )}
        {!datos &&
          <Cartelera/>
        }
      </article>
      <Footer/>

    </>
  );
}

export default Buscar;
