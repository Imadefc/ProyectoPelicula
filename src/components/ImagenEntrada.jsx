import React from 'react';
import style from '../styles/Principio.module.css';
import { Link } from 'react-router-dom';

function ImagenEntrada({ imagen, onClick, nombre }) {
  return (
    <Link to={"home"} onClick={onClick}>
      <section className={style.contenedor}>
        <div className={style.contenedorImagen}>
          <img className={style.imagen} src={imagen} alt="Entrada"/>
        </div>
      </section>
      <h3>{nombre}</h3>
    </Link>
  );
}

export default ImagenEntrada;