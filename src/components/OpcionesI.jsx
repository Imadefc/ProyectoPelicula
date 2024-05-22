import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/OpcionesI.css"
function OpcionesI ({ imageI, nameI }) {

    return (
        <div className='opcionesIcontainer'>
          <Link className='linkI' to={`/${nameI}`}> <img className='imagenes_footer' src={imageI} alt={nameI} /> </Link>
      </div> 
    );
  }
  

export default OpcionesI;