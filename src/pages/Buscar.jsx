import React, { useState } from "react";
import style from "../styles/Buscar.module.css";
import CardPelicula from "../components/CardPelicula";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzA1YWE4OWMyZTMxOTliYThlNjQxOGQ3MDZlMzUwYyIsInN1YiI6IjYyMDMxZGJhZTMyM2YzMDA4ZWRhMTY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDHhSwwgvqEMJ9NOE1o-pwvbtw7y1FX41t21NzLlhXw",
  },
};

function Buscar() {
  const [datos, setDatos] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [tituloGuardado, setTituloGuardado] = useState("");
  const [numRes, setNumRes]= useState(null)
  const [page, setPage] = useState({ page: null, pageMax: null });

  function handleBotonAñadirVistoMastarde(seccion,elemento) {
    let bd=JSON.parse(localStorage.getItem(seccion));
    if(bd){
      const res=bd.filter((el=>{
        return el.id==elemento.id
      }))
      
      if(res.length!=0){
        console.log("hay uno igual");
      }else{
        bd=[...bd,elemento]
        localStorage.setItem(seccion,  JSON.stringify(bd))
      }
      
    }else{
      console.log([elemento])
      localStorage.setItem(seccion, JSON.stringify([elemento]))
      
    }
  }

  function handlebuscar(){
    fetch(
      "https://api.themoviedb.org/3/search/movie?key=" +
        import.meta.VITE_API_KEY +
        "&query=" +
        busqueda +
        "&include_adult=false&language=es-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setDatos(response.results);
        setTituloGuardado(busqueda);
        setPage({ page: response.page, pageMax: response.total_pages });
        console.log(datos);
        setNumRes(response.total_results);
      })
      .catch((err) => console.error(err));
    setBusqueda("");
  }
  function handleEnter(event) {
    if (event.code === "Enter") {
      handlebuscar();
    }
  }

  function handleSiguiente() {
    if (page.page < page.pageMax) {
      setPage({ page: page.page++, pageMax: page.pageMax });
      fetch(
        "https://api.themoviedb.org/3/search/movie?key=" +
          import.meta.VITE_API_KEY +
          "&query=" +
          tituloGuardado +
          "&include_adult=false&language=es-US&page=" +
          page.page,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setDatos(response.results);
          setPage({ page: response.page, pageMax: response.total_pages });
          console.log(datos);
        })
        .catch((err) => console.error(err));
    }
  }

  function handleAnterior(){
    if(page.pageMax>2){
      setPage({page:page.page--, pageMax:page.pageMax})
      fetch("https://api.themoviedb.org/3/search/movie?key="+ import.meta.VITE_API_KEY+"&query="+tituloGuardado+"&include_adult=false&language=es-US&page="+page.page, options)
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    setDatos(response.results)
                    setPage({page:response.page, pageMax:response.total_pages})
                    console.log(datos);
                })
                .catch(err => console.error(err));
    }
  }
  return (
    <>
      <div className={style.buscar}>
        <input
          onChange={(e) => {
            setBusqueda(e.target.value);
          }}
          onKeyDown={handleEnter}
          value={busqueda}
          type="search"
          placeholder="Busca tu Pelicula"
          className={style.Buscador}
        />
      </div>
      <img onClick={handlebuscar}  className={style.icono} width={"100px"} src="https://i.ibb.co/1dPp0wr/imagen-2024-04-04-011057169.png"/>
      {numRes && <h3 className={style.numRes}>Hay {numRes} elementos encontrados </h3>}
      <article className={style.contenedor}>
        {datos &&
          datos.map((el) => {
            return (
              <CardPelicula
                puntuacion={el.vote_average}
                key={el.id}
                year={el.release_date}
                img={el.poster_path}
                descrp={el.overview}
                title={el.title}
                handleBotonDer={()=>handleBotonAñadirVistoMastarde("mastarde",el)}
                handleBotonIzq={()=>handleBotonAñadirVistoMastarde("visto",el)}
             
              />
            );
          })}
        {datos && (
          <div className={style.page}>
            <a onClick={handleAnterior}>Anterior</a>
            <p>{page.page}</p>
            <a onClick={handleSiguiente}>Siguiente</a>
          </div>
        )}
        
      </article>

    </>
  );
}

export default Buscar;
