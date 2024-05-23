import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/OpcionesView.css";

function OpcionesView({ name, description, listado }) {
  const [respuesta, setRespuesta] = useState({});

  const toggleRespuesta = (pregunta) => {
    setRespuesta((prevState) => ({
      ...prevState,
      [pregunta]: !prevState[pregunta],
    }));
  };

  return (
    <div className="opcionesViewContainer">
      <div className="encabezado_opciones">
        <h1 className="titulo_opciones">{name}</h1>
        <h2 className="descripcion_opciones">{description}</h2>
      </div>

      {listado && Object.keys(listado).length > 0 && (
        <ul className="listado_preguntas">
          {Object.keys(listado).map((pregunta, index) => {
            if (pregunta.includes("pregunta")) {
              const numeroPregunta = pregunta.replace("pregunta", "");
              const respuestaKey = `respuesta${numeroPregunta}`;

              return (
                <div className="contenedor_preguntas">
                  <li className="contenedor_preguntas" key={index}>
                    <p
                      className="preguntas"
                      onClick={() => toggleRespuesta(pregunta)}
                    >
                      {listado[pregunta]}
                    </p>
                    {respuesta[pregunta] && (
                      <p className="respuesta_opciones">
                        {listado[respuestaKey]}
                      </p>
                    )}
                  </li>
                </div>
              );
            }
            return null;
          })}
        </ul>
      )}
      <div className="volver_atras_opciones">
        <Link to={"/home"} className="link_texto_views">
          Ir a la pagina principal
        </Link>
      </div>
    </div>
  );
}

export default OpcionesView;
