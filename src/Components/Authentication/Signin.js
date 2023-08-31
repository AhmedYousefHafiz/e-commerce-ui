import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SigninSignup.css";
import { loginUser } from "../../Store/AuthSlice";
import SocialToolbar from "../SocialToolbar/SocialToolbar"
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  // const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const userInfo = useSelector((state) => state.auth.value);
const navigate = useNavigate();

  console.log("userInfo", userInfo);
  const dispatch = useDispatch();

  const navigateSignup = () => {
    navigate("/sign-up");
  };
  const loginHandler = (e) => {
    e.preventDefault();
    const user = { userName, password };
    dispatch(loginUser({email:userName,password})).then((result) => {
      console.log(result);
    });
  };

  return (
    <>
      <div class="container">
        <div class="forms-container">
          <div class="signin-signup">
            <form action="" class="sign-in-form">
              <h2 class="title">Sign In</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button class="btn solid" onClick={loginHandler}>
                Sign In
              </button>

              <SocialToolbar />
            </form>
          </div>
        </div>
        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>New here?</h3>
              <p>
                 You can register with our system.
              </p>
              <button
                class="btn transparent"
                id="sign-up-btn"
                onClick={navigateSignup}
              >
                Sign Up
              </button>
            </div>
            <img src="../Assets/log.svg" class="image" alt="" />
          </div>

          <div class="panel right-panel">
            <img src="../Assets/register.svg" class="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
