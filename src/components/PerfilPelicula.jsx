import React, { useState, useEffect, useContext } from "react";
import { useIdHook } from "../services/useID";
import "./perfilPelicula.css";
import { CgHeart } from "react-icons/cg";
import { CgUser } from "react-icons/cg";
import { BiTimeFive } from "react-icons/bi";
import { BiCalendar } from "react-icons/bi";
import { VscCircleFilled } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";
import { Idcontext } from "../context/idcontext";

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

function PerfilPelicula({ id, onClose }) {
  const { basicInfo, credits, gallery, plataforms, reviews, loading } =
    useIdHook(id);

  const [mostrarBackdrops, setMostrarBackdrops] = useState(false);
  const [mostrarLogos, setMostrarLogos] = useState(false);
  const [mostrarPosters, setMostrarPosters] = useState(false);
  const [likes, setLikes] = useState(basicInfo ? basicInfo.vote_count : 0);
  const [likeClicked, setLikeClicked] = useState(false);
  const { setSelectedMovie } = useContext(Idcontext);

  useEffect(() => {
    setLikes(basicInfo ? basicInfo.vote_count : 0);
  }, [basicInfo]);

  const handleLikeClick = async () => {
    if (!likeClicked) {
      setLikes(likes + 1);
      setLikeClicked(true);
      try {
        const response = await fetch(
          `http://localhost:5173/tu-endpoint-para-actualizar-likes`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              movieId: basicInfo.id,
              newLikeCount: likes + 1,
            }),
          }
        );
        if (!response.ok) {
          throw new Error("Error al actualizar el recuento de likes");
        }
      } catch (error) {
        console.error("Error al actualizar el recuento de likes:", error);
      }
    }
  };

  const handleClosePerfilPelicula = () => {
    setSelectedMovie(null);
  };

  return (
      <div className="todo_perfilPelicula">
        {!loading && (
          <div
            className="contenedor_general_perfilPelicula"
          >
            <div
    className="contenedor_imagen"
    style={{
      backgroundImage: `url('https://image.tmdb.org/t/p/w600_and_h900_bestv2${basicInfo.poster_path}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat", 
      backgroundSize:'cover',
    }}
  />
            <div
              className="contenedor_volver_atras_perfilPeliculas"
              onClick={handleClosePerfilPelicula}
            >
              <div className="volver_atras_perfilPeliculas">
                <IoClose />
              </div>
            </div>

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

            <div className="contenedor_genera_opciones_vista_perfilPelicula">
              <div className="contenedor_opciones_vista_perfilPelicula">
                <h3>Opciones de alquiler</h3>
                {plataforms.results &&
                  Object.keys(plataforms.results).map((countryCode) => {
                    const countryData = plataforms.results[countryCode];
                    const alquilerOptions =
                      countryData.options &&
                      countryData.options.filter(
                        (option) => option.type === "alquiler"
                      );
                    if (alquilerOptions && alquilerOptions.length > 0) {
                      const imageUrl = obtenerUrlImagenPlataformas(countryData);
                      return (
                        <div key={countryCode}>
                          <h4>En {countryData.name}:</h4>
                          {alquilerOptions.map((option, index) => (
                            <a href={option.link} key={index}>
                              <img
                                src={imageUrl}
                                alt={`Plataforma de visualización en ${countryCode}`}
                              />
                            </a>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  })}
              </div>

              <div className="contenedor_opciones_vista_perfilPelicula">
                <h3>Opciones de compra</h3>
                {plataforms.results &&
                  Object.keys(plataforms.results).map((countryCode) => {
                    const countryData = plataforms.results[countryCode];
                    const compraOptions =
                      countryData.options &&
                      countryData.options.filter(
                        (option) => option.type === "compra"
                      );
                    if (compraOptions && compraOptions.length > 0) {
                      const imageUrl = obtenerUrlImagenPlataformas(countryData);
                      return (
                        <div key={countryCode}>
                          <h4>En {countryData.name}:</h4>
                          {compraOptions.map((option, index) => (
                            <a href={option.link} key={index}>
                              <img
                                src={imageUrl}
                                alt={`Plataforma de visualización en ${countryCode}`}
                              />
                            </a>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  })}
              </div>
            </div>

            <div className="contenedor_reseñas_y_reparto_perfilPelicula">
              <div className="contenedor_reseñas_perfilPelicula">
                <div className="cg_user">
                  <CgUser />
                  <p>{basicInfo.vote_average}</p>
                </div>

                <div className="cg_heart" onClick={handleLikeClick}>
                  <CgHeart />
                  <p>{likes}</p>
                </div>
              </div>

              <div className="contenedor_reparto_perfilPelicula">
                <h2>CAST</h2>

                <div className="contenedor_cast_perfilPelicula">
                  {credits.cast.map((actor) => (
                    <div
                      className="card_reparto_personajes_perfilPelicula"
                      key={actor.id}
                    >
                      <img
                        className="imagen_personaje_pelicula_perfilPelicula"
                        src={
                          actor.profile_path
                            ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                            : "https://previews.123rf.com/images/yupiramos/yupiramos1704/yupiramos170410877/75974212-dise%C3%B1o-de-ilustraci%C3%B3n-de-vector-de-icono-aislado-de-silueta-de-usuario.jpg"
                        }
                        alt={actor.name}
                      />
                      <div className="card_reparto_personajes_texto_perfilPelicula">
                        <p>{actor.name}</p>
                        <p>{actor.character}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="media_pelicula_perfilPelicula">
              <div className="contenedor_media_perfilPelicula">
                <h2>MEDIA</h2>
              </div>

              <div className="contenedor_opciones_media_perfilPelicula">
                <div className="opciones_media_perfilPelicula">
                  <h3
                    onClick={() => {
                      setMostrarBackdrops(true);
                      setMostrarLogos(false);
                      setMostrarPosters(false);
                    }}
                  >
                    Backdrops
                  </h3>
                  {mostrarBackdrops &&
                    gallery.backdrops.map((item, index) => (
                      <img
                        key={index}
                        src={`https://image.tmdb.org/t/p/original${item.file_path}`}
                        alt={`Backdrop ${index}`}
                      />
                    ))}
                </div>

                <div className="opciones_media_perfilPelicula">
                  <h3
                    onClick={() => {
                      setMostrarBackdrops(false);
                      setMostrarLogos(true);
                      setMostrarPosters(false);
                    }}
                  >
                    Logos
                  </h3>
                  {mostrarLogos &&
                    gallery.logos.map((item, index) => (
                      <img
                        key={index}
                        src={`https://image.tmdb.org/t/p/original${item.file_path}`}
                        alt={`Logo ${index}`}
                      />
                    ))}
                </div>

                <div className="opciones_media_perfilPelicula">
                  <h3
                    onClick={() => {
                      setMostrarBackdrops(false);
                      setMostrarLogos(false);
                      setMostrarPosters(true);
                    }}
                  >
                    Posters
                  </h3>
                  {mostrarPosters &&
                    gallery.posters.map((item, index) => (
                      <img
                        key={index}
                        src={`https://image.tmdb.org/t/p/original${item.file_path}`}
                        alt={`Poster ${index}`}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}

export default PerfilPelicula;
