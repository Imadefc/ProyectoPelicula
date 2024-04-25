import { FaGithub } from 'react-icons/fa';
import { MdAttachEmail } from "react-icons/md"; 

function Contacto({ id, firstName, lastName, email, additionalInfo, img }) {
  return (
    <div style={{ padding: '10px', marginBottom: '10px', textAlign: 'center', flex: '1 0 300px' }}>
      <img src={img} alt={`${firstName} ${lastName}`} style={{ width: '100px', height: '100px', border: '2px solid #ccc', borderRadius: '50%' }} />
      <div>
        <h3>{firstName} {lastName}</h3>
        <p>
          <FaGithub style={{ marginRight: '5px', verticalAlign: 'middle', color: '#50C4ED' }} /> {/* Icono de GitHub  */}
          <a href={additionalInfo} style={{ color: '#50C4ED', textDecoration: 'none' }}>
            {additionalInfo}
          </a>
        </p>
        <p>
          <MdAttachEmail style={{ color: '#00D1FF', marginRight: '5px', verticalAlign: 'middle' }} /> {/* Icono de email */}
          <span style={{ color: '#00D1FF' }}>{email}</span>
        </p>
      </div>
    </div>
  );
}

function Contactos() {
  const contactos = [
    { id: 1, firstName: 'Adriana', lastName: 'Alexe', email: 'Adriana.alexe10@gmail.com', additionalInfo: "https://github.com/adrianaa90", img: "https://i.ibb.co/r63m3Vj/fotoadri.jpg" },
    { id: 2, firstName: 'Gabriel', lastName: 'Barrionuevo Hernandez', email: 'gabriel@gmail.com', additionalInfo: "https://github.com/PleaseDoNotMindMe", img: "https://i.ibb.co/c80H1Tx/fotogabriel.jpg" },
    { id: 3, firstName: 'Imad', lastName: 'El Founti Chaib', email: 'imadelfountichaib@gmail.com', additionalInfo: "https://github.com/Imadefc", img: "https://i.ibb.co/8xWLpNp/imgIMAD.jpg" },
    { id: 4, firstName: 'Daniel', lastName: 'Tibamoza Cubillos', email: 'Daniel.cinesearch@gmail.com', additionalInfo: "https://github.com/Dtibamoza96", img: "https://i.ibb.co/ky6NmPn/fotodaniel.jpg" },
    { id: 5, firstName: 'Rafael', lastName: 'Medina', email: 'medinadiazchess@gmail.com', additionalInfo: "https://github.com/Virtualchess", img: "https://i.ibb.co/BGNkM7w/image.png" },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '40px', padding: '30px' }}>
      {contactos.map(contacto => (
        <Contacto
          key={contacto.id}
          id={contacto.id}
          firstName={contacto.firstName}
          lastName={contacto.lastName}
          email={contacto.email}
          additionalInfo={contacto.additionalInfo}
          img={contacto.img}
        />
      ))}
    </div>
  );
}

export default Contactos;
