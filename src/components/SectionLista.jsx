import style from "../style/SectionLista.module.css";
import CardLista from '../components/CardListas';

function SectionLista({name,arrayContr,setArrayContr,setArray,botonIzq,botonDer, title = "NotF", array= null }) {
  return (
    <>
      <h3 className={style.titulo}>{title}</h3>
      <section className={style.contenedor}>
        { array!=[] && array && array.map((el) => {
          return (
            <CardLista
              array={array}
              setArrayContr={setArrayContr}
              setArray={setArray}
              id={el.id}
              key={el.id}
              descrp={el.overview}
              img={el.poster_path}
              year={el.release_date}
              title={el.title}
              puntuacion={el.vote_average}
              botonIzq={botonIzq}
              botonDer={botonDer}
              name={name}
              arrayContr={arrayContr}
            />
          );
        })}
      </section>
    </>
  );
}

export default SectionLista;
