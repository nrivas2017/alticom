import { FunctionComponent } from "react";
import logo from "../assets/logo-alticom-white.svg";
import { useNavigate } from "react-router-dom";
import { servicesKey } from "../pages/ServicesPage";
import "../styles/footer.css";

const Footer: FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <img src={logo} className="logo-footer" />
        <a className="footer-underline-text" href="">
          Nuestras ventajas
        </a>
        <a className="footer-underline-text" href="">
          Quienes somos
        </a>
      </div>
      <div className="footer-content-container">
        <h3 className="footer-subtitle-text">Servicios</h3>
        <a
          className="footer-underline-text"
          onClick={() =>
            navigate(`/servicios?servicio=${servicesKey.mantenimiento}`)
          }
        >
          Mantenimiento
        </a>
        <a
          className="footer-underline-text"
          onClick={() =>
            navigate(`/servicios?servicio=${servicesKey.reparaciones}`)
          }
        >
          Reparaciones
        </a>
        <a
          className="footer-underline-text"
          onClick={() =>
            navigate(`/servicios?servicio=${servicesKey.modernizacion}`)
          }
        >
          Modernización
        </a>
      </div>
      <div className="footer-content-container">
        <h3 className="footer-subtitle-text">Contacto</h3>
        <div className="footer-contact-text-container">
          <p className="footer-contact-text">
            Horario de atención 08:00 - 18:00 hrs.
          </p>
          <p className="footer-contact-text">Av. Apoquindo 6410, Las Condes</p>
          <p className="footer-contact-text">contacto@alticom.cl</p>
          <p className="footer-contact-text">+569 4426 1598</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
