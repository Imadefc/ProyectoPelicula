import { FaGithub } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { contactos } from "../services/contactos";
import Aside from "../components/Aside";
import Footer from "../components/Footer";

function Contacto({ id, firstName, lastName, email, additionalInfo, img }) {
  return (
    <>
      <div
        style={{
          padding: "10px",
          marginBottom: "10px",
          textAlign: "center",
          flex: "1 0 300px",
        }}
      >
        <img
          src={img}
          alt={`${firstName} ${lastName}`}
          style={{
            width: "100px",
            height: "100px",
            border: "2px solid #ccc",
            borderRadius: "50%",
          }}
        />
        <div>
          <h4>
            {firstName} {lastName}
          </h4>
          <p>
            <FaGithub
              style={{
                marginRight: "5px",
                verticalAlign: "middle",
                color: "#50C4ED",
              }}
            />{" "}
            {/* Icono de GitHub  */}
            <a
              href={additionalInfo}
              style={{ color: "#50C4ED", textDecoration: "none" }}
            >
              {additionalInfo}
            </a>
          </p>
          <p>
            <MdAttachEmail
              style={{
                color: "#00D1FF",
                marginRight: "5px",
                verticalAlign: "middle",
              }}
            />{" "}
            {/* Icono de email */}
            <span style={{ color: "#00D1FF" }}>{email}</span>
          </p>
        </div>
      </div>
    </>
  );
}

function Contactos() {
  return (
    <>
      <Aside />

      <div className="body_contacto" style={{height:"100%"}}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "40px",
            padding: "30px",
          }}
        >
          {contactos.map((contacto) => (
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
      </div>

      <Footer />
    </>
  );
}

export default Contactos;
