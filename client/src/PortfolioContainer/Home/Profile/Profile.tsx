import React, { useMemo } from "react";
import { TypeAnimation } from "react-type-animation";
import ScrollService from "../../../utilities/ScrollService";
import {
  socialMediaLinks,
  profileInfo,
} from "../../../data/profileData";
import { useTranslation } from "../../../hooks/useTranslation";
import { getRoleAnimationSequence } from "../../../utilities/animationHelpers";
import "./Profile.css";

export default function Profile() {
  const { t, language } = useTranslation();

  // Get translated animation sequence
  const roleAnimationSequence = useMemo(
    () => getRoleAnimationSequence(language),
    [language]
  );
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
              {t.home.greeting} <span className="highlighted-text">{profileInfo.name}</span>
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
                {t.home.tagline}
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              {t.home.hireMe}{" "}
            </button>
            <a href={profileInfo.cvFileName} download={profileInfo.cvFileName}>
              <button className="btn highlighted-btn">{t.home.getResume}</button>
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
