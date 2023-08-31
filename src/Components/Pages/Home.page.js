import React from "react";
import "./Landing.page.css";
import HOME_IMAGE from "../Assets/image-1.svg";

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="column-left">
            <h1>Send Unlimited Messages</h1>
            <p>
              No contracts or unwanted fees. Exclusive offer for new customers
              only.
            </p>
            <button className="primary-btn">Get Started</button>
          </div>
          <div className="column-right">
            <img src={HOME_IMAGE} alt="Illustration" className="hero-image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
