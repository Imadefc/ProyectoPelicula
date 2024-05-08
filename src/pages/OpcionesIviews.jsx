import React from 'react';
import { Link } from 'react-router-dom';


function OpcionesIviews({ nameI, imageI, descriptionI }) {


  return (
    <div className='opcionesIviewContainer'>
      <div className='encabezado_opcionesIviewContainer'>
      <img className='imagen_opcionIviews' src={imageI} alt={nameI} />
        <h1>{nameI}</h1>
      </div>
        <div className='body_opcionesIviews'>
          <p>{descriptionI}</p>
            <Link to={'/'} className='link_imagenes_views' >Ir a la pagina principal</Link>
        </div>
       
    </div>
  )
}

export default OpcionesIviews;