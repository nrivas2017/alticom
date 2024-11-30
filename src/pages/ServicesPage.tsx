import { FunctionComponent, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WrenchIcon from "../assets/wrench.svg";
import LightbulbIcon from "../assets/lightbulb.svg";
import GearIcon from "../assets/gear.svg";
import WrenchBoldIcon from "../assets/wrenchBold.svg";
import LightbulbBoldIcon from "../assets/lightbulbBold.svg";
import GearBoldIcon from "../assets/gearBold.svg";
import "../styles/servicesPage.css";

const ServicesPage: FunctionComponent = () => {
  return (
    <div className="services-page-container">
      <Navbar />
      <ServicesContent />
      <Footer />
    </div>
  );
};

export default ServicesPage;

const ServicesContent: FunctionComponent = () => {
  type buttonKey = "mantenimiento" | "reparaciones" | "modernizacion";

  const services: Array<{
    key: buttonKey;
    icon: string;
    activeIcon: string;
    label: string;
    title: string;
    description: string;
    list: Array<{
      title: string;
      item: string[];
    }>;
  }> = [
    {
      key: "mantenimiento",
      icon: GearIcon,
      activeIcon: GearBoldIcon,
      label: "Mantenimiento",
      title: "Mantenimiento Preventivo Mensual de Ascensores",
      description:
        "El plan garantiza el buen estado y funcionamiento de los ascensores, seguridad de los usuarios y operarios, disponibilidad de uso y cumplimiento de la normativa.",
      list: [
        {
          title:
            "Trabajamos en base a un check list y entre las actividades se realizan:",
          item: [
            "Lubricaciones periódicas",
            "Revisiones sistemáticas de equipos",
            "Calibración y planes de calibración para instrumentos",
            "Planes de inspección de equipos",
            "Entre otros",
          ],
        },
        {
          title: "Entregamos:",
          item: [
            "Servicio de atención a emergencias 24/07, sin costo",
            "Apoyo en el proceso de certificación del ascensor",
            "Calibración y planes de calibración para instrumentos",
            "Sistema intranet: Permite seguimiento online del servicio entregado, carta Gantt, visualizar evidencias por trabajos realizados, pagos, entre otros.",
          ],
        },
      ],
    },
    {
      key: "reparaciones",
      icon: WrenchIcon,
      activeIcon: WrenchBoldIcon,
      label: "Reparaciones",
      title: "Mantenimiento Correctivo de Ascensores",
      description:
        "El mantenimiento correctivo es la actividad técnica ejecutada cuando sucede una falla y tiene como objetivo, restaurar el equipo para dejarlo en condiciones óptimas para el funcionamiento, ya sea con su reparación o sustitución",
      list: [
        {
          title: "Entregamos:",
          item: [
            "Reporte con evidencia",
            "Presupuesto, cotización con opciones de financiamiento",
            "Disponibilidad de repuestos",
            "Garantía de servicio",
          ],
        },
      ],
    },
    {
      key: "modernizacion",
      icon: LightbulbIcon,
      activeIcon: LightbulbBoldIcon,
      label: "Modernización",
      title: "Modernización de Ascensores",
      description:
        "Permite extender la vida útil del equipo, haciendo de él un lugar más seguro y eficiente, mejora la calidad de los viajes y entrega mayor comodidad.",
      list: [
        {
          title: "Entregamos:",
          item: [
            "Reporte técnico con evidencias fotográficas del antes y después",
            "Presupuesto, cotización con opciones de financiamiento",
            "Garantía de servicio",
          ],
        },
      ],
    },
  ];

  const buttons = useMemo(
    () =>
      services.map((s) => ({
        key: s.key,
        label: s.label,
        icon: s.icon,
        activeIcon: s.activeIcon,
      })),
    [services]
  );

  const [activeBtn, setActiveBtn] = useState<buttonKey>("mantenimiento");

  return (
    <div className="services-page-content-container">
      <div className="services-page-section-container">
        <div className="services-page-title-container">
          <h2 className="services-page-title">Servicios</h2>
        </div>
        <div className="services-page-buttons-container">
          {buttons.map((b, idx) => (
            <button
              key={`services-page-button-key-${idx}`}
              className={`secondary-button-style ${
                activeBtn === b.key ? "secondary-button-style-active" : ""
              } services-page-button`}
              onClick={() => setActiveBtn(b.key)}
            >
              <img
                className="services-page-button-img"
                src={activeBtn === b.key ? b.activeIcon : b.icon}
              />{" "}
              {b.label}
            </button>
          ))}
        </div>
        <div className="services-page-details-container">
          <h3 className="services-page-details-title">
            {services.find((s) => s.key === activeBtn)?.title}
          </h3>
          <p className="services-page-details-description">
            {services.find((s) => s.key === activeBtn)?.description}
          </p>
          {services
            .find((s) => s.key === activeBtn)
            ?.list.map((l, lIdx) => (
              <div key={`services-page-list-key-${lIdx}`}>
                <p className="services-page-details-list-title">{l.title}</p>
                <ul className="services-page-details-list-container">
                  {l.item.map((i, iIdx) => (
                    <li
                      key={`services-page-item-key-${iIdx}`}
                      className="services-page-details-list-item"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
        <div className="services-page-contact-button-container">
          <button className="primary-button-style">Contáctanos</button>
        </div>
      </div>
    </div>
  );
};
