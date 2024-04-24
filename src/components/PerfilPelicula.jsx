import React from "react";
import { useIdHook } from "../services/useID";
import "./perfilPelicula.css";
import { CgHeart } from "react-icons/cg";
import { CgUser } from "react-icons/cg";
import { BiTimeFive } from "react-icons/bi";
import { BiCalendar } from "react-icons/bi";
import { VscCircleFilled } from "react-icons/vsc";


function DuracionPelicula({ duracionEnMinutos }) {
  const convertirAHorasYMinutos = (minutos) => {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    return `${horas}h ${minutosRestantes}min`;
  };

  return (
    <div className="duracion_pelicula">
      <BiTimeFive />
      <p>{convertirAHorasYMinutos(duracionEnMinutos)}</p>
    </div>
  );
};

function PerfilPelicula({ id }) {
  const { data, loading } = useIdHook(id);

  return (
    <>
      <div className="contenedor_general_perfilPelicula">

        <div className="encabezado_perfilPeliculas">
          <div className="contenedor_imagen_pelicula_id_perfilPelicula">
            <img className="imagen_pelicula_id_perfilPelicula"
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`}
              alt="Monkey Man"
            />
          </div>

          <div className="descripcion_pelicula_id_perfilPelicula">
            <h1>{data.title} </h1>

            <div className="fecha_pelicula">
            <BiCalendar /><p>{data.release_date}</p>
            </div>
           
            <div className="duracion_pelicula">
              <DuracionPelicula duracionEnMinutos={data.runtime} /> 
            </div>
    
            <p> <i>{data.tagline}</i></p>

            <div className="generos_pelicula">
            {data.genres && data.genres.map(genre => ( <p className="generos_pelicula" key={genre.id}> <VscCircleFilled /> {genre.name}</p>))}
            </div>

            <p>{data.overview}</p>
          </div>

        </div>

        <div className="contenedor_opciones_vista_perfilPelicula">
          <a href="">
            {" "}
            <img src="" alt="" />
          </a>
        </div>

        <div className="contenedor_reseñas_y_reparto_perfilPelicula">
          <div className="contenedor_reseñas_perfilPelicula">
            <CgUser /><p>{data.vote_average}</p>
            <CgHeart /><p>{data.vote_count}</p>
          </div>

          <div className="contenedor_reparto_perfilPelicula">
            <p>Cast:</p>

            <div className="card_reparto_personajes_perfilPelicula">
              <img
                className="imagen_personaje_pelicuola_perfilPelicula"
                src=""
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PerfilPelicula;
