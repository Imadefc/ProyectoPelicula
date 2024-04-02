import React from 'react'

function SectionLista({titulo, array=[]}) {
  return (
    <section>
        <h2>{titulo}</h2>
        {array==[]?<h3>No has Guardado nada</h3>: array.map((el)=>{
          
        }) }
    </section>
  )
}

export default SectionLista