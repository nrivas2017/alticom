import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import edificiosMobile from "../assets/edificios-mobile.svg";
import edificios from "../assets/edificios.svg";
import money from "../assets/money.svg";
import deadline from "../assets/deadline.svg";
import certificate from "../assets/certificate.svg";
import tecnico from "../assets/tecnico.svg";
import test from "../assets/test.svg";
import guarantee from "../assets/guarantee.svg";
import hands from "../assets/hands.svg";
import worker from "../assets/worker.svg";
import ingresos from "../assets/ingresos.svg";
import logo from "../assets/logo-alticom.svg";
import { servicesKey } from "./ServicesPage";
import "../styles/homePage.css";

const HomePage: FunctionComponent = () => {
  return (
    <div className="home-page-container">
      <Navbar />
      <HomeContent />
      <Footer />
    </div>
  );
};

export default HomePage;

const HomeContent: FunctionComponent = () => {
  const navigate = useNavigate();
  const ourAdvantages: Array<{
    img: string;
    title: string;
    description: string;
    gridColumn: "1-5" | "5-9" | "9-13";
  }> = [
    {
      img: money,
      title: "Los Mejores Precios",
      description: "Mantenimiento de ascensores desde 3 UF",
      gridColumn: "1-5",
    },
    {
      img: deadline,
      title: "Rapidez ante Emergencias",
      description:
        "Tiempos de respuestas entre las primeras horas del incidente",
      gridColumn: "5-9",
    },
    {
      img: certificate,
      title: "Empresa Certificada",
      description: "Nuestra empresa está cerfificada por el MINVU",
      gridColumn: "9-13",
    },
    {
      img: tecnico,
      title: "Técnicos 24/7",
      description: "Técnicos siempre disponibles ante alguna emergencia",
      gridColumn: "1-5",
    },
    {
      img: test,
      title: "Transparencia en Reportes",
      description:
        "Te entregamos la información desglosada del estado de tu ascensor",
      gridColumn: "5-9",
    },
    {
      img: guarantee,
      title: "Trabajos Garantizados",
      description:
        "Garantizamos nuestros arreglos desde los 6 meses hasta los 5 años",
      gridColumn: "9-13",
    },
    {
      img: hands,
      title: "Atención Personalizada",
      description: "Sabemos quienes son nuestros clientes y sus necesidades",
      gridColumn: "1-5",
    },
    {
      img: worker,
      title: "Experiencia",
      description: "Técnicos con más de 10 años de experiencia",
      gridColumn: "5-9",
    },
    {
      img: ingresos,
      title: "Planes de Financiamiento",
      description: "Puedes pagar en cuota los arreglos",
      gridColumn: "9-13",
    },
  ];

  const services: Array<{
    title: string;
    description: string;
    service: servicesKey;
    gridColumn: "1-5" | "5-9" | "9-13";
  }> = [
    {
      title: "Mantenimiento",
      description:
        "El plan garantiza el buen estado y funcionamiento de los ascensores, seguridad de los usuarios y operarios, disponibilidad de uso y cumplimiento de la normativa",
      service: servicesKey.mantenimiento,
      gridColumn: "1-5",
    },
    {
      title: "Reparaciones",
      description:
        "Actividad técnica ejecutada cuando sucede una falla y tiene como objetivo, restaurar el equipo para dejarlo en condiciones óptimas para el funcionamiento.",
      service: servicesKey.reparaciones,
      gridColumn: "5-9",
    },
    {
      title: "Modernización",
      description:
        "Permite extender la vida útil del equipo, haciendo de él un lugar más seguro y eficiente, mejora la calidad de los viajes y entrega mayor comodidad.",
      service: servicesKey.modernizacion,
      gridColumn: "9-13",
    },
  ];

  return (
    <div className="home-page-content-container">
      <div className="home-page-section-container">
        <div className="home-page-title-container">
          <div className="home-page-title">
            <h1>Conoce el estado de tus ascensores</h1>
            <h1>Agenda una visita gratuita</h1>
          </div>
          <p className="home-page-description">
            Vamos a tu edificio y te entregamos un informe técnico con el estado
            actual de tus ascensores, sin costo.
          </p>
          <div className="home-page-schedule-visit-btn-container">
            <button
              className="primary-button-style home-page-schedule-visit-btn"
              onClick={() => navigate("/contactanos")}
            >
              Agendar visita
            </button>
          </div>
        </div>
        <img src={edificios} className="home-page-edificios-img" />
        <img src={edificiosMobile} className="home-page-edificios-mobile-img" />
      </div>
      <div className="home-page-section-container home-page-our-advantages-section-container">
        <div className="home-page-section-title-container">
          <h2 className="home-page-section-title" style={{ color: "#00ACE4" }}>
            Nuestras ventajas
          </h2>
          <div
            className="home-page-divider-line"
            style={{ backgroundColor: "#00ACE4" }}
          ></div>
        </div>
        {ourAdvantages.map((o, idx) => (
          <div
            key={`home-page-our-advantages-key-${idx}`}
            className={`home-page-our-advantages-container home-page-our-advantages-container-${o.gridColumn}`}
          >
            <img src={o.img} className="home-page-our-advantages-img" />
            <div className="home-page-our-advantages-text-container">
              <h3 className="home-page-our-advantages-title">{o.title}</h3>
              <p className="home-page-our-advantages-description">
                {o.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="home-page-section-container home-page-our-advantages-section-container"
        style={{ backgroundColor: "#f6f6f6" }}
      >
        <div className="home-page-section-title-container">
          <h2 className="home-page-section-title" style={{ color: "#18273c" }}>
            Servicios
          </h2>
          <div
            className="home-page-divider-line"
            style={{ backgroundColor: "#18273c" }}
          ></div>
        </div>
        {services.map((s, idx) => (
          <div
            key={`home-page-services-key-${idx}`}
            className={`home-page-services-container home-page-services-container-${s.gridColumn}`}
          >
            <h3 className="home-page-services-title">{s.title}</h3>
            <p className="home-page-services-description">{s.description}</p>
            <a
              className="home-page-services-link"
              onClick={() => navigate(`/servicios?servicio=${s.service}`)}
            >
              Conocer más
            </a>
          </div>
        ))}
      </div>
      <div className="home-page-section-container home-page-about-us-container">
        <div className="home-page-section-title-container">
          <h2 className="home-page-section-title" style={{ color: "#18273c" }}>
            Quienes Somos
          </h2>
          <div
            className="home-page-divider-line"
            style={{ backgroundColor: "#18273c" }}
          ></div>
        </div>
        <div className="home-page-about-us-logo-img-container">
          <img src={logo} className="home-page-about-us-logo-img" />
        </div>

        <div className="home-page-about-us-text-container">
          <p className="home-page-about-us-text">
            Somos una empresa chilena fundada en 2022, joven en trayectoria pero
            con una vasta experiencia en el rubro del transporte vertical.
            Nuestros especialistas cuentan con más de 10 años de conocimiento y
            experiencia. Contamos con un equipo multidisciplinario de
            profesionales, que incluye desde ingenieros hasta técnicos
            especializados en elevadores, garantizando siempre el óptimo
            funcionamiento de sus equipos.
          </p>
          <p className="home-page-about-us-text">
            Nuestro compromiso es estar cerca de nuestros clientes y construir
            relaciones basadas en la confianza. Esto lo logramos gracias a la
            transparencia de nuestros informes, la calidad de nuestros servicios
            y precios competitivos que nos diferencian en el mercado.
          </p>
          <a
            className="home-page-about-us-link-text"
            onClick={() => navigate("/contactanos")}
          >
            Agendar visita
          </a>
        </div>
      </div>
    </div>
  );
};
