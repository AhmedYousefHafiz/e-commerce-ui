import React from "react";
import "./Toolbar.css";
import DrawerToggoleButton from "../SideDrawer/DrawerToggoleButton";

const Toolbar = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggole-button">
          <DrawerToggoleButton click = {props.click}></DrawerToggoleButton>
        </div>

        <div className="toolbar__logo">
          <a href="/">E-Commerce</a>
        </div>
        <div className="space"></div>
        <div className="toolbar__navigation-items">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/sign-in">Login</a>
            </li>
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
