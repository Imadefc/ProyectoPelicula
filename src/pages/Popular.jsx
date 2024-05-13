
import Aside from '../components/Aside'

import{ useEffect, useState } from "react";
import CardPelicula from "../components/CardPelicula";
import style from "../styles/Populares.module.css"
import Ajustes from '../components/Ajustes';
import { handleBotonAñadirVistoMastarde } from '../services/customHooks';
import Footer from "../components/Footer"
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzA1YWE4OWMyZTMxOTliYThlNjQxOGQ3MDZlMzUwYyIsInN1YiI6IjYyMDMxZGJhZTMyM2YzMDA4ZWRhMTY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDHhSwwgvqEMJ9NOE1o-pwvbtw7y1FX41t21NzLlhXw",
  },
};

 function Popular() {
  const [datos, setDatos] = useState(null);
  useEffect(() => {
    const URL ="https://api.themoviedb.org/3/trending/movie/day?key="+import.meta.VITE_API_KEY+"language=es-ES";
    console.log(URL);
    fetch(
      URL,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setDatos(response.results);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
    
    
    <h1 className={style.tituloPopulares}>Titulos Populares</h1>

  
    
        <article className={style.contenedor}>
        
        
        {datos &&datos.map((el) => {
          return (
            <CardPelicula
              key={el.id}
              id={el.id}
              title={el.title}
              img={el.poster_path}
              descrp={el.overview}
              year={el.release_date}
              puntuacion={el.vote_average}
              handleBotonDer={()=>handleBotonAñadirVistoMastarde("mastarde",el)}
              handleBotonIzq={()=>handleBotonAñadirVistoMastarde("visto", el)}
            />
          );
        })}
      </article>
      <Footer/>
    </>
  );
}

export default Popular;