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
}

function PerfilPelicula({ id }) {
  const { basicInfo, credits, gallery, plataforms, reviews, loading } =
    useIdHook(id);

  /*
  basicInfo: tiene la informacion basica que viste antes (la que se utiliza abajo)
  
  credits: contiene informacion sobre el cast, para la foto del actor, debes utilizar la propiedad "profile_path" justo luego de esta url: "https://image.tmdb.org/t/p/original"

  gallery: contiene imagenes de la pelicula, contiene un array de objetos con el nombre backdrop, utiliza la propieda "file_path" luego de esta url: "https://image.tmdb.org/t/p/original" (algunas peliculas no tienen imagenes)

  plataforms: contiene diversos objetos que equivalen al pais. Por ejemplo, plataforms.results.ES te mostraria la info de donde verlo en españa

  reviews: contiene las reviews de la pelicula, en forma de comentarios

  En la consola te aparecerá toda la info, para que veas como están formados los objetos/arrays
*/

  return (
    <>
      {!loading && (
        <div className="contenedor_general_perfilPelicula">
          <div className="encabezado_perfilPeliculas">
            <div className="contenedor_imagen_pelicula_id_perfilPelicula">
              <img
                className="imagen_pelicula_id_perfilPelicula"
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${basicInfo.poster_path}`}
                alt="Monkey Man"
              />
            </div>

            <div className="descripcion_pelicula_id_perfilPelicula">
              <h1>{basicInfo.title} </h1>

              <div className="fecha_pelicula">
                <BiCalendar />
                <p>{basicInfo.release_date}</p>
              </div>

              <div className="duracion_pelicula">
                <DuracionPelicula duracionEnMinutos={basicInfo.runtime} />
              </div>

              <p>
                {" "}
                <i>{basicInfo.tagline}</i>
              </p>

              <div className="generos_pelicula">
                {basicInfo.genres &&
                  basicInfo.genres.map((genre) => (
                    <p className="generos_pelicula" key={genre.id}>
                      {" "}
                      <VscCircleFilled /> {genre.name}
                    </p>
                  ))}
              </div>

              <p>{basicInfo.overview}</p>
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
              <CgUser />
              <p>{basicInfo.vote_average}</p>
              <CgHeart />
              <p>{basicInfo.vote_count}</p>
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
      )}
    </>
  );
}

export default PerfilPelicula;
