import React, { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faCode,
  faLaptopCode,
  faProjectDiagram,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Animations from "../../utilities/Animations";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import {
  resumeBullets,
  programmingSkillsDetails,
  applicationSkillsDetails,
} from "../../data/resumeData";
import { useTranslation } from "../../hooks/useTranslation";
import {
  getTranslatedEducation,
  getTranslatedWorkExperience,
  getTranslatedProjectsDetails,
  getTranslatedInterests,
} from "../../utilities/dataHelpers";
import "./Resume.css";

const Resume = (props) => {
  const { t, language } = useTranslation();
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState<any>({});

  // Get translated data
  const education = useMemo(() => getTranslatedEducation(language), [language]);
  const workExperience = useMemo(() => getTranslatedWorkExperience(language), [language]);
  const projectsDetails = useMemo(() => getTranslatedProjectsDetails(language), [language]);
  const interests = useMemo(() => getTranslatedInterests(language), [language]);

  // Icon mapping for resume bullets - map English labels to icons
  const getBulletIcon = (englishLabel: string) => {
    const iconMap = {
      "Education": faGraduationCap,
      "Work History": faBriefcase,
      "Programming Skills": faCode,
      "Application Skills": faLaptopCode,
      "Projects": faProjectDiagram,
      "Interests": faHeart,
    };
    return iconMap[englishLabel] || faCode;
  };

  // Get translated label
  const getTranslatedLabel = (englishLabel: string): string => {
    const labelMap: { [key: string]: string } = {
      "Education": t.resume.education,
      "Work History": t.resume.workHistory,
      "Programming Skills": t.resume.programmingSkills,
      "Application Skills": t.resume.applicationSkills,
      "Projects": t.resume.projects,
      "Interests": t.resume.interests,
    };
    return labelMap[englishLabel] || englishLabel;
  };

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  useEffect(() => {
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return () => {
      fadeInSubscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeDetails = [
    /* EDUCATION */
    <div className="resume-screen-container" key="education">
      {education.map((edu, index) => (
        <ResumeHeading
          key={index}
          heading={edu.heading}
          subHeading={edu.subHeading}
          fromDate={edu.fromDate}
          toDate={edu.toDate}
        />
      ))}
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={workExperience.heading}
          subHeading={workExperience.subHeading}
          fromDate={workExperience.fromDate}
          toDate={workExperience.toDate}
        />
        {workExperience.descriptions.map((desc, index) => (
          <div className="experience-description" key={index}>
            <span className="resume-description-text">
              {index === 0 ? desc : `- ${desc}`}
            </span>
            <br />
          </div>
        ))}
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* Application SKILLS */
    <div
      className="resume-screen-container application-skills-container"
      key="application-skills"
    >
      {applicationSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((project, index) => (
        <ResumeHeading
          key={index}
          heading={project.title}
          subHeading={project.subHeading}
          description={project.description}
          fromDate={project.duration.fromDate}
          toDate={project.duration.toDate}
        />
      ))}
    </div>,

    /* INTERESTS */
    <div className="resume-screen-container" key="interests">
      {interests.map((interest, index) => (
        <ResumeHeading
          key={index}
          heading={interest.heading}
          description={interest.description}
        />
      ))}
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <FontAwesomeIcon
          className="bullet-logo"
          icon={getBulletIcon(bullet.label)}
        />
        <span className="bullet-label">{getTranslatedLabel(bullet.label)}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={t.resume.title} subHeading={t.resume.subTitle} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
