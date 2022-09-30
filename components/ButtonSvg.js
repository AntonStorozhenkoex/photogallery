import React from "react";

export const ButtonSvg = ({ icon, onClick, className }) => (
  <button onClick={onClick} className={className}>
    <img src={icon} alt="buttonImage" />
  </button>
);
