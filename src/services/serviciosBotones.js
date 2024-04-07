export function handleBotonAñadirVistoMastarde(seccion,elemento) {
    let bd=JSON.parse(localStorage.getItem(seccion));
    if(bd){
      const res=bd.filter((el=>{
        return el.id==elemento.id
      }))
      
      if(res.length!=0){
        console.log("hay uno igual");
      }else{
        bd=[...bd,elemento]
        localStorage.setItem(seccion,  JSON.stringify(bd))
      }
      
    }else{
      console.log([elemento])
      localStorage.setItem(seccion, JSON.stringify([elemento]))
      
    }
  }