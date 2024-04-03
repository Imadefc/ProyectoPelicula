import { useState } from "react";
import style from "../style/CardPelicula.module.css";
import Votacion from "./Votacion";

function CardPelicula({name,array,setArray, botonIzq,handleBotonIzq,botonDer, handleBotonDer,puntuacion ,year="NotF", img, title, descrp }) {
  const [control, setControl] = useState(true);

  function handleControl() {
    setControl(!control);
  }
  function handleBotonIzq(event) {
    const id= event.currentTarget.id;
    const nuevoArray=array.filter((el)=>{
      return id!=el.id;
    })
    setArray(nuevoArray)
    console.log(nuevoArray);
    console.log(id);
  }

  return (
    <article className={style.article} id={name}>
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
        <h3 className={style.h3}>{descrp}</h3>
        <Votacion puntuacion={puntuacion} />
        
      </div>
      <div id={name} onClick={handleBotonIzq} className={style.bottonVisto}>
        <p>{botonIzq}</p>
      </div>
      <div onClick={handleBotonDer} className={style.bottonMasTarde}>
        <p>{botonDer}</p>
      </div>
    </article>
  );
}

export default CardPelicula;