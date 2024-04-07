import React from 'react'
import Aside from '../components/Aside'

import{ useEffect, useState } from "react";
import CardPelicula from "../components/CardPelicula";
import style from "../styles/Populares.module.css"
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
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setDatos(response.results);
        console.log(response.results);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
    <Aside/>
    <h1 className={style.tituloPopulares}>Titulos Populares</h1>
        <article className={style.contenedor}>
        
        {datos &&datos.map((el) => {
          return (
            <CardPelicula
              key={el.id}
              title={el.title}
              img={el.poster_path}
              descrp={el.overview}
              year={el.release_date}
              puntuacion={el.vote_average}
            />
          );
        })}
      </article>
    </>
  );
}

export default Popular;