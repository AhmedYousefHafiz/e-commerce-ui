import React from "react";

import "./DrawerToggoleButton.css";

const DrawerToggoleButton = (props) => {
  return (
    <button className="toggole-button" onClick={props.click}>
      <div className="toggole-button__line"></div>
      <div className="toggole-button__line"></div>
      <div className="toggole-button__line"></div>
    </button>
  );
};

export default DrawerToggoleButton;
