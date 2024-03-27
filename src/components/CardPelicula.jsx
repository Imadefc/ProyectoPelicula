import React, { useState } from "react";
import style from "../styles/CardPelicula.module.css";

function CardPelicula({ img, title, descrp }) {
  const [control, setControl] = useState(true);

  function handleControl() {
    setControl(!control);
  }

  return (
    <article className={style.article}>
      <div className={style.poster}>
        <img
          onClick={handleControl}
          className={style.img}
          src={img}
          alt={title}
        />
      </div>

      <div onClick={handleControl} className={style.contenedorInformacion}>
        <h2 className={style.h2}>{title}</h2>
        <h3 className={style.h3}>{descrp}</h3>
      </div>
    </article>
  );
}

export default CardPelicula;
