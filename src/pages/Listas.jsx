import React, { useEffect } from 'react'
import SectionLista from '../components/SectionLista';

function Listas() {
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzA1YWE4OWMyZTMxOTliYThlNjQxOGQ3MDZlMzUwYyIsInN1YiI6IjYyMDMxZGJhZTMyM2YzMDA4ZWRhMTY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDHhSwwgvqEMJ9NOE1o-pwvbtw7y1FX41t21NzLlhXw'
            }
          };
          
          fetch("https://api.themoviedb.org/3/search/movie?key="+import.meta.VITE_API_KEY+"&query=batman&include_adult=false&language=en-US&page=1", options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err)); 
    },[])
  return (
    <article>
        <SectionLista />
    </article>
  )
}

export default Listas