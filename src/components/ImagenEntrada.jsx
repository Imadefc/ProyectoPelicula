import React from 'react'

function ImagenEntrada({imagen}) {
  return (
    <section>
        <div>
            <img src={imagen}></img>
        </div>
    </section>
  )
}

export default ImagenEntrada