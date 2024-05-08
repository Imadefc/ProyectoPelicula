import { useState, useEffect } from "react";

const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzA1YWE4OWMyZTMxOTliYThlNjQxOGQ3MDZlMzUwYyIsInN1YiI6IjYyMDMxZGJhZTMyM2YzMDA4ZWRhMTY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDHhSwwgvqEMJ9NOE1o-pwvbtw7y1FX41t21NzLlhXw",
    },
  };

function useFetch(url){
const[data, setData] = useState([]);
const[loading, setLoading] = useState(true);
async function fetchData(){
    try {
        const response = await fetch(url, options);
        const info = await response.json();
        setData(info.results);
    } catch (error) {
        console.log(error);
    }
    finally{
        setLoading(false);
    }
 
}
useEffect(()=>{fetchData()

}, [])
useEffect(()=>{console.log(data)

},[data]) 
return{data, loading};
}

export default useFetch;