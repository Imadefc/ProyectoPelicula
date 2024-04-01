import React, { useState } from "react";
import style from "../styles/CardPelicula.module.css";
import Votacion from "./Votacion";

function CardPelicula({puntuacion ,year="NotF", img, title, descrp }) {
  const [control, setControl] = useState(true);

  function handleControl() {
    setControl(!control);
  }

  return (
    <article className={style.article}>
      <div className={style.poster}>
        {img==null &&
          <img
          onClick={handleControl}
          className={style.img}
          src={"https://i0.wp.com/capri.org.au/wp-content/uploads/2017/10/poster-placeholder.jpg?ssl=1"}
          alt={title}
        />
         }
         {img!=null &&
          <img
          onClick={handleControl}
          className={style.img}
          src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2"+img}
          alt={title}
        />
         }
        
      </div>

      <div onClick={handleControl} className={style.contenedorInformacion}>
        <h2 className={style.h2}>{title+" ( "+year.substr(0,4)+" )"}</h2>
        <h3 className={style.h3}>{descrp}</h3>
        <Votacion puntuacion={puntuacion} />
        
      </div>
      <div className={style.bottonVisto}>
        <p>Visto</p>
      </div>
      <div className={style.bottonMasTarde}>
        <p>Mas Tarde</p>
      </div>
    </article>
  );
}

export default CardPelicula;
