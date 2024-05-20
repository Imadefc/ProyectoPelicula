import React from 'react'
import style from "../styles/Principio.module.css"

function AñadirFotoEntrada({control, setControl}) {
  return (
    <section className={style.contenedorIconoMas} onClick={()=>{setControl(!control)}}>
        <img className={style.iconoMas} src='https://i.ibb.co/QHSQz5S/anadir.png'></img>
    </section>
  )
}

export default AñadirFotoEntrada