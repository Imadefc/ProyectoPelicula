import style from "../style/SectionLista.module.css";
import "react-slideshow-image/dist/styles.css";
import CardPelicula from "../components/CardPelicula";

function SectionLista({setArray,botonIzq,botonDer, title = "NotF", array= null }) {
  return (
    <>
      <h3 className={style.titulo}>{title}</h3>
      <section className={style.contenedor}>
        { array!=[] && array && array.map((el, i) => {
          return (
            <CardPelicula
              array={array}
              setArray={setArray}
              name={el.id}
              key={el.id}
              descrp={el.overview}
              img={el.poster_path}
              year={el.release_date}
              title={el.title}
              puntuacion={el.vote_average}
              botonIzq={botonIzq}
              botonDer={botonDer}
            />
          );
        })}
      </section>
    </>
  );
}

export default SectionLista;
