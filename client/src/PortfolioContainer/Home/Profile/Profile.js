import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/miguel-angel-ochoa-rivera-547750208/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/miguel8arivera">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://twitter.com/Dev28Miguel">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100068604824809">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://twitter.com/Dev28Miguel">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Miguel</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev ❤️",
                    1200,
                    "Full Stack Developer 👨‍💻 ",
                    1200,
                    "MERN Stack Dev 💻 ",
                    1200,
                    "React Dev ✅",
                    1200,
                    "Cross Platform Dev 🔵",
                    1200,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                I am passionate about Front-End development,with a strong focus
                on the MERN stack .
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Let's Discuss!{" "}
            </button>
            <a href="My Portfolio.pdf" download="My Portfolio.pdf">
              <button className="btn highlighted-btn">Get CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
