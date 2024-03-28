import React, { useState } from "react";
import style from "../style/CardPelicula.module.css";

export function CardPelicula({ year ,img, title, descrp }) {
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
          src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2"+img}
          alt={title}
        />
      </div>

      <div onClick={handleControl} className={style.contenedorInformacion}>
        <h2 className={style.h2}>{title+" ( "+year.substr(0,4)+" )"}</h2>
        <p className={style.h3}>{descrp}</p>
      </div>
      <div className={style.botonVisto}>
          <p>Visto</p>
      </div>
      <div className={style.botonMasTarde}>
          <p>Ver Mas Tarde</p>
      </div>
    </article>
  );
}


