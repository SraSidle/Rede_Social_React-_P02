import "./Overlay.css";
import React from "react";

function Overlay({ children, overlayClick}) {
  return (
    <div className="Overlay" onClick={() => overlayClick()}>
      {children}
    </div>
  );
}

export default Overlay;
