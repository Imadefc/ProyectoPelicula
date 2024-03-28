import { useEffect, useState } from "react";
import CardPelicula from "./components/CardPelicula";

function App() {
  const [control, setControl] = useState(null);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzA1YWE4OWMyZTMxOTliYThlNjQxOGQ3MDZlMzUwYyIsInN1YiI6IjYyMDMxZGJhZTMyM2YzMDA4ZWRhMTY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDHhSwwgvqEMJ9NOE1o-pwvbtw7y1FX41t21NzLlhXw",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/search/movie?key=" +
        import.meta.VITE_API_KEY +
        "&query=Batman&include_adult=false&language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setControl(response.results[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {control && (
        <CardPelicula
          year={control.release_date}
          title={control.title}
          img={control.poster_path}
          descrp={control.overview}
          puntuacion={control.vote_average}
        />
      )}
    </>
  );
}

export default App;
