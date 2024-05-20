import React, { useEffect, useState } from "react";
import "../style/Cartelera.css";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";

function Cartelera() {
  const [indiceImagen, setIndiceImagen] = useState(1);
  const [temporizadorActivo, setTemporizadorActivo] = useState(true);
  const [peliculaClicadaId, setPeliculaClicadaId] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTg0YmM0ZWNhYTVlYTNhNDg5MGVhOGExZTQ1YTI0ZCIsInN1YiI6IjY2MTU4YzBkMTVhNGExMDE2NGY4MzhhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T_zDyJsgu3HaVs-XxOnfuq1-72BVt8F2kg0vfDTxsow",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/324857?language=en-US&key=" +
        import.meta.env.VITE_KEY,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    let temporizador;
    if (temporizadorActivo) {
      temporizador = setTimeout(() => {
        cambiarImagen("derecha");
      }, 3000);
    }
    return () => clearTimeout(temporizador);
  }, [indiceImagen, temporizadorActivo]);

  const cambiarImagen = (direccion) => {
    if (direccion === "izquierda") {
      setIndiceImagen((prevIndice) => (prevIndice === 1 ? 4 : prevIndice - 1));
    } else {
      setIndiceImagen((prevIndice) => (prevIndice === 4 ? 1 : prevIndice + 1));
    }
  };

  const manejarClick = (direccion) => {
    cambiarImagen(direccion);
    setTemporizadorActivo(false);
    setTimeout(() => {
      setTemporizadorActivo(true);
    }, 5000);
  };

  const renderizarRectangulos = () => {
    const rectangulos = [1, 2, 3, 4];
    return rectangulos.map((index) => (
      <div
        key={index}
        className={`rectangulo ${index === indiceImagen ? "iluminado" : ""}`}
        onClick={() => {
          setIndiceImagen(index);
          onChange(index);
        }}
      />
    ));
  };

  const renderizarPerfilPeliculas = () => {
    if (peliculaClicadaId) {
      return <PerfilPeliculas id={peliculaClicadaId} />;
    }
    return null;
  };

  return (
    <>
      <div className="contenedor_general_slider">
        <div className="pantalla_cartelera">
          <img
            className="cartelera_opcion_1 "
            src={
              indiceImagen === 1
                ? "https://es.web.img2.acsta.net/pictures/14/07/09/10/00/277089.jpg"
                : indiceImagen === 2
                ? "https://es.web.img3.acsta.net/pictures/13/12/04/16/18/394160.jpg"
                : indiceImagen === 3
                ? "https://marcialpons.es/media/img/portadas/9788408262336.jpg"
                : "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg"
            }
            alt=""
          />
        </div>

        <div className="contenedor_botones_slider_izq">
          <button
            className="slider_izq"
            onClick={() => manejarClick("izquierda")}
          >
            {" "}
            <BiSolidChevronLeft />{" "}
          </button>
        </div>

        <div className="contenedor_botones_slider_der">
          <button
            className="slider_der"
            onClick={() => manejarClick("derecha")}
          >
            {" "}
            <BiSolidChevronRight />{" "}
          </button>
        </div>

        <div className="rectangulos-container">{renderizarRectangulos()}</div>
      </div>
      {renderizarPerfilPeliculas()}
    </>
  );
}

export default Cartelera;
