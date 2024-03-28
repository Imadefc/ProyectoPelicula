
import { useEffect, useState } from 'react'
import {CardPelicula} from './components/CardPelicula'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzA1YWE4OWMyZTMxOTliYThlNjQxOGQ3MDZlMzUwYyIsInN1YiI6IjYyMDMxZGJhZTMyM2YzMDA4ZWRhMTY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDHhSwwgvqEMJ9NOE1o-pwvbtw7y1FX41t21NzLlhXw'
  }
};

function App() {
  const [data, setData]=useState()
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/search/movie?key="+import.meta.VITE_Key_Api+"&query=Batman&include_adult=false&language=en-US&page=1", options)
  .then(response => response.json())
  .then(response => {
    setData(response.results[0]);
    console.log(response.results[0]);
  })
  .catch(err => console.error(err));

  },[])

  return (
    <>
    {data  && <CardPelicula year={data.release_date} title={data.title} img={data.poster_path} descrp={data.overview}/>}
    </>
  )
}

export default App
