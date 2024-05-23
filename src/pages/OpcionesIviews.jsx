import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/OpcionesIviews.css";

function OpcionesIviews({ nameI, imageI, descriptionI, imagen_ejemplo }) {


  return (
    <div className='opcionesIviewContainer'>
      <div className='encabezado_opcionesIviewContainer'>
        <img className='imagen_opcionIviews' src={imageI} alt={nameI} />
        <h1 className='titulo_titulo'>{nameI}</h1>
      </div>
        <div className='body_opcionesIviews'>
          <p className='parrafo_parrafo'>{descriptionI}</p>
        </div>
      
        <div className='imagen_opcionI_ejemplo'>
          <img className='imagen_opcionI_ejemplo' src={imagen_ejemplo} alt=""/>
        </div>

        <div className='volver_atras'>
        <Link to={'/home'} className='link_imagenes_views' >Ir a la pagina principal</Link>
        </div>
       
       
    </div>
  )
}

export default OpcionesIviews;