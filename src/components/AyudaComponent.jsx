import React, { useState } from 'react'

function AyudaComponent({pregunta, respuesta}) {
    const [control, setControl]=useState(false)
    function handleControl(){
        setControl(!control)
    }
  return (
    <article >
        <h3 onClick={handleControl} >{pregunta}</h3>
        {control && <section >
            {respuesta}
        </section> }
        
    </article>
  )
}

export default AyudaComponent