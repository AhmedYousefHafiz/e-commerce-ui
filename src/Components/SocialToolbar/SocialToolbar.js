import React from "react";
const SocialToolbar = (props) => {
  return (
    <div>
      <p class="social-text">Or Sign in with social platforms</p>
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
    </div>
  );
};

export default SocialToolbar;
