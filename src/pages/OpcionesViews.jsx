import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function OpcionesView({ name, description, listado }) {
  
  const [respuesta, setRespuesta] = useState({});
  
  const toggleRespuesta = (pregunta) => {
    setRespuesta((prevState) => ({
      ...prevState,
      [pregunta]: !prevState[pregunta],
    }));
  };

  
  return (
    <div className='opcionesViewContainer'>
      <h1>{name}</h1> 
      <h2>{description}</h2>
      {listado && Object.keys(listado).length > 0 && (
          <ul>
          {Object.keys(listado).map((pregunta, index) => {
            if (pregunta.includes('pregunta')){
              const numeroPregunta = pregunta.replace('pregunta', '');
              const respuestaKey = `respuesta${numeroPregunta}`;

              return(
                <li className='contenedor_preguntas' key={index}>
                  <p className='preguntas' onClick={() => toggleRespuesta(pregunta)}>
                    {listado[pregunta]}
                  </p>
                  {respuesta[pregunta] && (
                    <p>{listado[respuestaKey]}</p>
                  )}
                </li>
              );
            }
            return null;
          })}
        </ul>
      )}
      <Link to={'/'} className='link_texto_views' >Ir a la pagina principal</Link>
    </div>
  );
}
          
export default OpcionesView;