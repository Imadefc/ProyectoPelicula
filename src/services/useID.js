import { useEffect, useState } from "react";

export function useIdHook ( id ) {
    const [ data, setData ] = useState ({});
    const [ loading, setLoading ] = useState (true);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTg0YmM0ZWNhYTVlYTNhNDg5MGVhOGExZTQ1YTI0ZCIsInN1YiI6IjY2MTU4YzBkMTVhNGExMDE2NGY4MzhhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T_zDyJsgu3HaVs-XxOnfuq1-72BVt8F2kg0vfDTxsow'
        }
      };

    useEffect ( () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&key=0a84bc4ecaa5ea3a4890ea8a1e45a24d`, options)
        .then(response => response.json())
        .then(response =>{console.log(response); 
          setData(response)})
        .catch(err => console.error(err))
        .finally(() => {
            setLoading(false)
        });
    },[ id ]) ;

    return { data, loading };

         
}

