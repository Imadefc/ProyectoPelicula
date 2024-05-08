import React from 'react'
import { opcionesI } from '../services/opcionesI'
import { opciones } from '../services/opciones'
import OpcionesI from './OpcionesI'
import Opciones from './Opciones'
import style from "../style/Footer.module.css"

function Footer() {
  return (
    <div>
      <div className={style.contenedor}>
        <div className={style.contenedorInterior}>
          {opcionesI.map((opcionI, index) => (
            <OpcionesI key={index} {...opcionI} />
          ))}
        </div>
       
       <div className={style.contenedorInterior}>
        {opciones.map((opcion, index) => (
          <Opciones key={index} {...opcion} />
        ))}
       </div>
       
      </div>
    </div>
  )
}

export default Footer