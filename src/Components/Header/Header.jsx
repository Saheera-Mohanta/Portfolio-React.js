import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="main-container">
      <div className="info-part">
        <p>Hello,</p>
        <h2>
          <b>
            {" "}
            I'm <span>Saheera Mohanta</span>
          </b>
        </h2>
        <div className="ani">
          <div className="animation">
            {/* <p>and I'm a</p> */}
            <div class="typed-out">
              <h1>Web developer....</h1>
            </div>
          </div>
          <p>
            I am a skilled and passionate web designer with experience in 
            creating visually appending and user-friendly websites.
          </p>
          <div id="button">
            <button>
              <Link to="/About">Hire Me</Link>
            </button>
          </div>
        </div>
        <div className="arrow">
          <a href="#container-4">
            <span></span>
            <span></span>
            <span></span>
          </a>
          <p>
             <Link to="/About">Continu About</Link>
          </p>
        </div>
      </div>

      {/* *************************************************IMAGE_PART********************************** */}
      <div className="image-part"></div>
    </div>
  );
};

export default Header;
