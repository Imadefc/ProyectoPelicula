import React from 'react'
import { Link } from 'react-router-dom';
import "../style/Opciones.css"

function Opciones({ name }) {
  return (
    <div className='opcionesContainer'>
        <Link className='link' to={`/${name}`}> {name} </Link>
    </div>
  )
}

export default Opciones;