import React, { useState } from "react";

import "./Landing.page.css";
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const [toggoleSidedrawer, setToggoleSidedrawer] = useState();
  const { loading, error } = useSelector((state) => state.auth);
  const toggoleButtonHandler = () => {
    setToggoleSidedrawer(!toggoleSidedrawer);
  };

  const onBackdropClickHandler = () => {
    setToggoleSidedrawer(false);
  };

  return (
    <>
      <Toolbar click={toggoleButtonHandler}></Toolbar>
      {toggoleSidedrawer && <SideDrawer show={toggoleSidedrawer}></SideDrawer>}
      {toggoleSidedrawer && <Backdrop onClick={onBackdropClickHandler} />}
      {loading && <p>Loading....</p>}
    </>
  );
};

export default LandingPage;
