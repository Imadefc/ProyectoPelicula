import Aside from '../components/Aside'
import Footer from '../components/Footer'
import {contactos} from '../services/contactos'
function Contacto() {
  return (
    <>
    <Aside/>
    {contactos && contactos.map((el)=>{
        return <div>
            <img width={"200px"} src={el.img} alt={el.firstName}/>
            <div>
                <h3>{el.firstName} {el.lastName}</h3>
                <h4>Email: {el.email}</h4>
                <h4>Github: {el.additionalInfo}</h4>
            </div>
            
        </div>
    })}
    <Footer/>
    </>
  )
}

export default Contacto