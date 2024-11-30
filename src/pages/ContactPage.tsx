import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import TextInput from "../components/TextInput";
import Modal from "../components/Modal";
import "../styles/contactPage.css";

const ContactPage: FunctionComponent = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="contact-page-container">
      <Navbar />
      <ContactContent />
      <Footer />
    </div>
  );
};

const ContactContent: FunctionComponent = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<{
    name: string;
    phone: number | null;
    contact: "whatsapp" | "phone" | "any";
    email: string;
    address: string;
    floorQuantity: number | null;
    elevatorQuantity: number | null;
  }>({
    name: "",
    phone: null,
    contact: "whatsapp",
    email: "",
    address: "",
    floorQuantity: null,
    elevatorQuantity: null,
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //TODO: change to the path of the endpoint to which the data will be sent
    const res = await axios.post("/api/contact", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res && res.status === 200) {
      setModal(true);
      setData({
        name: "",
        phone: null,
        contact: "whatsapp",
        email: "",
        address: "",
        floorQuantity: null,
        elevatorQuantity: null,
      });
    }
  };

  useEffect(() => {
    if (
      !data.name ||
      !data.phone ||
      !data.contact ||
      !data.email ||
      !data.address ||
      data.floorQuantity === null ||
      data.elevatorQuantity === null
    ) {
      setError(true);
    } else {
      setError(false);
    }
  }, [data]);

  return (
    <>
      {modal && (
        <Modal
          content={
            <div className="contact-page-modal-container">
              <h2 className="contact-page-modal-title">
                ¡Gracias por escribirnos!
              </h2>
              <p className="contact-page-modal-text">
                Nos pondremos en contacto a la brevedad.
              </p>
              <button
                className="primary-button-style"
                style={{ padding: "12px 40px" }}
                onClick={() => setModal(false)}
              >
                Cerrar
              </button>
            </div>
          }
        />
      )}

      <div className="contact-page-content-container">
        <div className="contact-page-section-container">
          <h2 className="contact-page-title">Agenda una visita y/o cotiza</h2>
          <p className="contact-page-description">
            Cuéntanos un poco de ti y de tu edificio. Nos pondrémos en contacto
            a la brevedad
          </p>
          <form className="contact-page-form-container" onSubmit={onSubmit}>
            <TextInput
              type="text"
              label="Nombre y apellido"
              placeholder="Ej. Juan González"
              value={data.name}
              onChange={(e) =>
                setData((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />

            <TextInput
              type="number"
              label="Número de contacto"
              fixedText="+56"
              placeholder="9876 54321"
              value={(data.phone || "")?.toString()}
              onChange={(e) => {
                const value = !isNaN(Number(e.target.value))
                  ? Number(e.target.value)
                  : 0;
                if (value.toString().length > 9) {
                  return;
                }

                return setData((prev) => ({
                  ...prev,
                  phone: value,
                }));
              }}
              required
              customStyle={{ input: { paddingLeft: "3px" } }}
            />

            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <label
                className="input-label-style"
                style={{ fontWeight: "600" }}
              >
                Prefiero que me contacten por:
              </label>
              <div className="contact-page-grouping-radio-input">
                <div className="radio-input-container">
                  <input
                    className="primary-radio-input-style"
                    type="radio"
                    checked={data.contact === "whatsapp"}
                    onChange={() =>
                      setData((prev) => ({ ...prev, contact: "whatsapp" }))
                    }
                  />
                  <label>Whatsapp</label>
                </div>
                <div className="radio-input-container">
                  <input
                    className="primary-radio-input-style"
                    type="radio"
                    checked={data.contact === "phone"}
                    onChange={() =>
                      setData((prev) => ({ ...prev, contact: "phone" }))
                    }
                  />
                  <label>Llamado</label>
                </div>
                <div className="radio-input-container">
                  <input
                    className="primary-radio-input-style"
                    type="radio"
                    checked={data.contact === "any"}
                    onChange={() =>
                      setData((prev) => ({ ...prev, contact: "any" }))
                    }
                  />
                  <label>Me es indiferente</label>
                </div>
              </div>
            </div>

            <TextInput
              type="email"
              label="Email"
              placeholder="Ej. miemail@email.com"
              value={data.email}
              onChange={(e) =>
                setData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />

            <TextInput
              type="text"
              label="Dirección"
              placeholder="Ej. nombre de la calle #33, comuna, ciudad"
              value={data.address}
              onChange={(e) =>
                setData((prev) => ({ ...prev, address: e.target.value }))
              }
              required
            />

            <div className="contact-page-grouping-horizontal-input">
              <TextInput
                type="number"
                label="Número de pisos"
                placeholder="Ej.10"
                value={(data.floorQuantity || "")?.toString()}
                onChange={(e) => {
                  const value = !isNaN(Number(e.target.value))
                    ? Number(e.target.value)
                    : 0;

                  if (value && !/^[1-9]\d*$/.test(value.toString())) {
                    return;
                  }

                  return setData((prev) => ({
                    ...prev,
                    floorQuantity: value,
                  }));
                }}
                required
                min={0}
              />

              <TextInput
                type="number"
                label="Número ascensores"
                placeholder="Ej.2"
                value={(data.elevatorQuantity || "")?.toString()}
                onChange={(e) => {
                  const value = !isNaN(Number(e.target.value))
                    ? Number(e.target.value)
                    : 0;

                  if (value && !/^[1-9]\d*$/.test(value.toString())) {
                    return;
                  }
                  return setData((prev) => ({
                    ...prev,
                    elevatorQuantity: value,
                  }));
                }}
                required
                min={0}
              />
            </div>

            <div className="contact-page-form-action-button">
              <button className="primary-button-style" disabled={error}>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
