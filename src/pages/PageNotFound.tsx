import { FunctionComponent } from "react";

const PageNotFound: FunctionComponent = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid red",
      }}
    >
      <h1>404</h1>
      <h2>Pagina no encontrada</h2>
      <a href="/">Volver</a>
    </div>
  );
};

export default PageNotFound;
