import React from "react";
import { TypeAnimation } from "react-type-animation";
import ScrollService from "../../../utilities/ScrollService";
import {
  socialMediaLinks,
  roleAnimationSequence,
  profileInfo,
} from "../../../data/profileData";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              {socialMediaLinks.map((social) => (
                <a key={social.id} href={social.url} aria-label={social.platform}>
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">{profileInfo.name}</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <TypeAnimation
                  sequence={roleAnimationSequence}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
              <span className="profile-role-tagline">
                {profileInfo.tagline}
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
            <a href={profileInfo.cvFileName} download={profileInfo.cvFileName}>
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
