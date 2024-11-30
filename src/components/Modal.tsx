import { FunctionComponent } from "react";
import "../styles/index.css";

const Modal: FunctionComponent<{ content: JSX.Element }> = ({ content }) => {
  return (
    <div className="primary-modal-container">
      <div className="primary-modal-wrapper">{content}</div>
    </div>
  );
};

export default Modal;
