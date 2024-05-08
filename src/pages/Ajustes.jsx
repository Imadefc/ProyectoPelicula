import React, { useState } from 'react'

function Ajustes({datos={oscuro:false,adult:false,lenguaje:"es"},setDatos}) {
    const [control,setControl] = useState(true);
    function handleControl(e){
        if(e.target.name="oscuro"){
            setDatos(prev=>{
                console.log(prev);
                return({...prev, oscuro:!prev.oscuro})
            })
            console.log(datos);
        }
    }
  return (
    <div>
        <img width={"40px"} src='https://i.ibb.co/s5Sscw6/preferences-options-setting-ui-cogwheel-configuration-gear-wheel-settings-icon-210824.png'/>
    
    {control && 
        <div>
            <section>
                <h3>Oscuro</h3>
                <input type='checkbox' name='oscuro' onClick={handleControl} value={datos.oscuro}/>
            </section>
        </div>
    }
    </div>
  )
}

export default Ajustes