import React from "react";

export const ButtonIcon = ({ icon, onClick, className }) => (
  <button onClick={onClick} className={className}>
    <img src={icon} alt="buttonImage" />
  </button>
);
