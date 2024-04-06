import React from 'react'
import style from '../styles/CardPelicula.module.css'

function Votacion({puntuacion}) {
  return (
    <section>
        {puntuacion<5 &&  <p className={style.puntuacionBaja}>{puntuacion} /10</p>}
        {puntuacion >=5 && puntuacion<7 &&  <p className={style.puntuacionMedia}>{puntuacion} /10</p>}
        { puntuacion>=7 && puntuacion<=10 &&  <p className={style.puntuacionAlta}>{puntuacion} /10</p>}
    </section>
  )
}

export default Votacion