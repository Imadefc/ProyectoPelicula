import React, { useContext, useState } from "react";
import style from "../styles/CardPelicula.module.css";
import Votacion from "./Votacion";

function CardPelicula({handleBotonIzq,handleBotonDer,puntuacion ,year="NotF", img, title, descrp, id }) {
  const [control, setControl] = useState(true);

  const { setSelectedMovie } = useContext(Idcontext)

  function onClick (){
    setSelectedMovie ( id )
  }



  return (
    <article onClick={onClick} className={style.article}>
      <div className={style.poster}>
        {img==null &&
          <img
          className={style.img}
          src={"https://i0.wp.com/capri.org.au/wp-content/uploads/2017/10/poster-placeholder.jpg?ssl=1"}
          alt={title}
        />
         }
         {img!=null &&
          <img
          className={style.img}
          src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2"+img}
          alt={title}
        />
         }
        
      </div>

      <div  className={style.contenedorInformacion}>
        <h2 className={style.h2}>{title+" ( "+year.substr(0,4)+" )"}</h2>
        <h3 className={style.h3}>{descrp}</h3>
        <Votacion puntuacion={puntuacion} />
        
      </div>
      <div onClick={handleBotonIzq} className={style.bottonVisto}>
        <p>Visto</p>
      </div>
      <div onClick={handleBotonDer} className={style.bottonMasTarde}>
        <p>Mas Tarde</p>
      </div>
    </article>
  );
}

export default CardPelicula;
