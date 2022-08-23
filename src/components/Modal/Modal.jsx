import React from "react";
import "./Modal.css";
import Overlay from "../Overlay/Overlay";

function Modal({ children, closeModal }) {
  const handleClick = (event, canClose) => {
    event.stopPropagation();
    if (canClose) closeModal();
  };

  return (
    <Overlay overlayClick={closeModal}>
      <div className="Modal" onClick={handleClick}>
        <span
          className="Modal__close"
          onClick={(event) => handleClick(event, true)}
        >
          <i className="bi bi-x"></i>
        </span>
        <div className="Modal__body">{children}</div>
      </div>
    </Overlay>
  );
}

export default Modal;
