import React, { useEffect, useState } from 'react';
import "./Cartelera.css";
import { BiSolidChevronLeft } from "react-icons/bi";
import { BiSolidChevronRight } from "react-icons/bi";

function Cartelera() {

  const [indiceImagen, setIndiceImagen] = useState(1);
  const [temporizadorActivo, setTemporizadorActivo] = useState(true);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTg0YmM0ZWNhYTVlYTNhNDg5MGVhOGExZTQ1YTI0ZCIsInN1YiI6IjY2MTU4YzBkMTVhNGExMDE2NGY4MzhhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T_zDyJsgu3HaVs-XxOnfuq1-72BVt8F2kg0vfDTxsow'
      }
    };
    
    fetch('https://api.themoviedb.org/3/movie/324857?language=en-US&key=' + import.meta.env.VITE_KEY , options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, []) 

  useEffect (() => {
    let temporizador;
    if(temporizadorActivo){
      temporizador = setTimeout(() => {
        cambiarImagen("derecha");
      }, 5000);
    }
    return () => clearTimeout (temporizador);
  }, [indiceImagen, temporizadorActivo]);

  const cambiarImagen = (direccion) => {
    if(direccion === "izquierda") {
      setIndiceImagen((prevIndice) => (prevIndice === 1 ? 4 : prevIndice - 1));
    } else {
      setIndiceImagen((prevIndice) => (prevIndice === 4 ? 1 : prevIndice + 1))
    }
  };

  const manejarClick = (direccion) => {
    cambiarImagen(direccion);
    setTemporizadorActivo(false);
    setTimeout(() => {
      setTemporizadorActivo(true);
    }, 15000);
  };

  const reorganizarMinipantallas = () => {
    let minipantallas = [];
    for (let i = 0 ; i < 3 ; i ++ ){
      const newIndex = indiceImagen + i + 1;
      minipantallas.push(newIndex > 4 ? newIndex - 4 : newIndex);
    }
    return minipantallas;
  };

  return (
    <>
    <div className='contenedor_general_slider'>
    <div className='pantalla_cartelera'>
        <img className='cartelera_opcion_1' src={
            indiceImagen === 1 ? "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fmegxZBz7GF8k4eme4ZJXXGI0TO.jpg" :
            indiceImagen === 2 ?  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/40ollvfwHaVF85lkkg522SIl3Qc.jpg":
            indiceImagen === 3 ?  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iacLPcp2o2pClRToPjNAZjGhxAK.jpg":
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hB2VqiLDiHAyLdZ1dlXIGqDJy06.jpg" 
          } alt="" />
    </div>

    <div className='minipantallas_opciones_peliculas'>
          {reorganizarMinipantallas().map((index) => (
            <img
              key={index}
              className={`cartelera_opcion_${index}`}
              src={
                index === 1 ? "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fmegxZBz7GF8k4eme4ZJXXGI0TO.jpg" :
                index === 2 ? "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/40ollvfwHaVF85lkkg522SIl3Qc.jpg" :
                index === 3 ? "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iacLPcp2o2pClRToPjNAZjGhxAK.jpg" :
                "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hB2VqiLDiHAyLdZ1dlXIGqDJy06.jpg" 
              }
              alt=""/>
          ))}
        </div>

    <div className='contenedor_botones_slider'>
        <button className='slider_izq' onClick={() => manejarClick('izquierda')}> <BiSolidChevronLeft /> </button>
        <button className='slider_der' onClick={() => manejarClick('derecha')}>  <BiSolidChevronRight /> </button>
    </div>

    </div>
    </>
  )
}

export default Cartelera