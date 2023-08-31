import React from "react";
import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import LandingPage from "./Components/Pages/Landing.page";
import HomePage from "./Components/Pages/Home.page";
import SignIn from "./Components/Authentication/Signin";
import Register from "./Components/Authentication/Register";


function App() {
  return (
    <Router>
      <div style={{height:"100%"}} >
        <LandingPage />
        <Routes>
          <Route exact path="/" Component={HomePage}></Route>
          <Route exact path="/sign-in" Component={SignIn}></Route>
          <Route exact path="/sign-up" Component={Register}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
