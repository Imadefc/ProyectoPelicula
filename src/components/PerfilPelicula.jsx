import React, { useEffect, useState } from 'react'

function PerfilPelicula({id}) {
    const [datos,setDatos]=useState(null);
    useEffect(()=>{
        
    },[])
  return (
    <article>
        <section>
            <img></img>
            <p>
                {id}
            </p>
        </section>
        <section>
            <h4>
                Puedes ver la serie en:
            </h4>
            <div>
                
            </div>
        </section>
    </article>
  )
}

export default PerfilPelicula