import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardPelicula from "./CardPelicula";
import { handleBotonAñadirVistoMastarde } from "../services/customHooks";
import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";

function Slider({url, title}) {
  const{data, loading} = useFetch(url);
  
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 2, // optional, default to 1.
        
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
        
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
        
      },
    };
  
    return (
      <>
        <h1 className="carrusel-title">{title}</h1>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {!loading ? (
            data.map((el) => {
              return (
                <CardPelicula
                  key={el.id}
                  id={el.id}
                  title={el.title}
                  img={el.poster_path}
                  descrp={el.overview}
                  year={el.release_date}
                  puntuacion={el.vote_average}
                  handleBotonDer={() =>
                    handleBotonAñadirVistoMastarde("mastarde", el)
                  }
                  handleBotonIzq={() =>
                    handleBotonAñadirVistoMastarde("visto", el)
                  }
                />
              );
            })
          ) : (
            <div>Cargando...</div>
          )}
        </Carousel>
      </>
    );
  }
  export default Slider;