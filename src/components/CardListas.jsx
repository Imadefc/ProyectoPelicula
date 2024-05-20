import { useContext, useState } from "react";
import style from "../style/CardPelicula.module.css";
import Votacion from "./Votacion";
import { Idcontext } from "../context/idcontext";

function CardLista({name, arrayContr,setArrayContr,id,array,setArray, botonIzq,botonDer,andleBotonDer,puntuacion ,year="NotF", img, title, descrp }) {
  const [control, setControl] = useState(true);

  const { setSelectedMovie } = useContext ( Idcontext )

  function handleControl() {
    setControl(!control);
  }
  function handleBotonDer(event) {
    const id= event.currentTarget.id;
    setSelectedMovie(null)
    const obj=array.filter((el)=>{
      return id==el.id
    })
    setArrayContr((prev)=>{
      if(prev==null){
        return obj
      }else{
        for(let i=0; i<arrayContr.length;i++){
          if(arrayContr[i].id==id){
            return prev
          }
        }
        return [...prev, ...obj]
        
        
      }
    })
    const aux = array.filter((el)=>{
      return id != el.id
    })
    setArray(aux)
  }
  function handleBotonIzq(event) {
    const id= event.currentTarget.id;
    eliminarContenido(id)
    setSelectedMovie(null);
    console.log(event.currentTarget.name);
  }
  function eliminarContenido(id){
    const nuevoArray=array.filter((el)=>{
      return id!=el.id;
    })
    setArray(nuevoArray)
  }

  return (
    <article className={style.article} id={name} onClick={() => {
      
    }}>
      <div className={style.poster}>
      {img==null &&
          <img
          onClick={() => {
      
    }}
          className={style.img}
          src={"https://i0.wp.com/capri.org.au/wp-content/uploads/2017/10/poster-placeholder.jpg?ssl=1"}
          alt={title}
        />
         }
         {img!=null &&
          <img
          onClick={() => {
      setSelectedMovie (id)
    }}
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
      <div id={id} onClick={handleBotonIzq} className={style.bottonVisto}>
        <p>{botonIzq}</p>
      </div>
      <div  id={id} onClick={handleBotonDer} className={style.bottonMasTarde}>
        <p>{botonDer}</p>
      </div>
    </article>
  );
}

export default CardLista;