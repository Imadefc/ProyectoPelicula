import React from 'react'
import { preguntas } from '../services/ayuda'
import AyudaComponent from '../components/AyudaComponent'
import Aside from '../components/Aside'
import Footer from '../components/Footer'
function Ayuda() {
  return (
    <>

    
    
    <h1>Preguntas frecuentes</h1>
    <article>
        {preguntas.map((el)=>{
            return <AyudaComponent pregunta={el.pregunta} respuesta={el.respuesta}/>
        })}
    </article>
    <Footer/>
    </>
    
  )
}

export default Ayuda