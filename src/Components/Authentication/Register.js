import React from "react";
import { useNavigate } from "react-router-dom";
import "./SigninSignup.css";

const Register = () => {
  const navigate = useNavigate();

  const navigateToSignin = () => {
    navigate("/sign-in");
  };
  return (
    <>
      <div class="container sign-up-mode">
        <div class="forms-container">
          <div class="signin-signup">
            <form action="" class="sign-up-form">
              <h2 class="title">Sign Up</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Sign Up" class="btn solid" />

              <p class="social-text">Or Sign up with social platforms</p>
              <div class="social-media">
                <a href="https://www.facebook.com/" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/?lang=en" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.google.com/" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a href="https://www.linkedin.com/" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div class="panels-container">
          <div class="panel left-panel"></div>

          <div class="panel right-panel">
            <div class="content">
              <h3>One of us?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                minus natus est.
              </p>
              <button
                class="btn transparent"
                id="sign-in-btn"
                onClick={navigateToSignin}
              >
                Sign In
              </button>
            </div>
            <img src="../Assets/register.svg" class="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
