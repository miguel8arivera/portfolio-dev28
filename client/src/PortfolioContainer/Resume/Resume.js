import React, { useState } from "react";
import Animations from "../../utilities/Animations";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

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

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Application Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React", ratingPercentage: 65 },
    { skill: "Redux", ratingPercentage: 75 },
    { skill: "Node JS", ratingPercentage: 65 },
    { skill: "Git", ratingPercentage: 65 },
    { skill: "GraphQql", ratingPercentage: 65 },
    { skill: "TypeScript", ratingPercentage: 80 },
    { skill: "Mongo Db", ratingPercentage: 75 },
    { skill: "SQL Server", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 65 },
    { skill: "Sass", ratingPercentage: 65 },
    { skill: "Tailwind", ratingPercentage: 75 },
    { skill: "HTML", ratingPercentage: 60 },
  ];

  const applicationSkillsDetails = [
    { skill: "E-comerce", ratingPercentage: 80 },
    /* { skill: "", ratingPercentage: 85 },
    { skill: "ArcGIS Platform", ratingPercentage: 85 },
    { skill: "Grafana", ratingPercentage: 75 },
    { skill: "Azure Cloud Server", ratingPercentage: 50 },
    { skill: "E&P - Petrel", ratingPercentage: 70 },
    { skill: "E&P - Kingdom", ratingPercentage: 85 },
    { skill: "E&P - Hampson-Russell", ratingPercentage: 85 },
    { skill: "E&P - Paradigm", ratingPercentage: 75 }, */
  ];

  const projectsDetails = [
    {
      title: "Budget-app",
      duration: { fromDate: " 2021", toDate: "June 2022" },
      description:
        "An application to control the budget, which can be used in any business very intuitive.",
      subHeading: "Technologies Used: React, Css, Html, Sass.",
    },
    {
      title: "E-comerce",
      duration: { fromDate: "2022", toDate: "present" },
      description:
        "An online store of products which is widely used and with a high demand from users.",
      subHeading:
        "Technologies Used:  React, Redux, Taildwin, Firebase, TypeScript, Node js.",
    },
    {
      title: "Instagram-clone",
      duration: { fromDate: "2022", toDate: "present" },
      description:
        "A clone with the same functionality of Instagram applying the different technologies for web development..",
      subHeading:
        "Technologies Used: Git, JavaScript, Node, GraphQL, React, Redux, Taildwin,TypeScript.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University Jorge Basadre Grohmann, Peru"}
        subHeading={""}
        fromDate={"2012"}
        toDate={"2015"}
      />

      <ResumeHeading
        heading={"freeCodeCamp, USA"}
        subHeading={"Front-end Dev"}
        fromDate={"2020"}
        toDate={"2022"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Realized projects in React and Nodejs"}
          subHeading={"Full-Stack Dev"}
          fromDate={"2020"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently I make projects with the MERN stack, which is used in the
            UI for a good user experience.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Construction of an E-commerce which provides an approach to
            current business, connected to a database and business logic.
          </span>
          <br />
          <span className="resume-description-text">
            - Creation of a web portfolio made with React, CSS, strengthening
            the comfort of the use of web technologies.
          </span>
          <br />
          <span className="resume-description-text">
            {/*   - Developed ETL tools to digitize multi-document format into
            semi-automated services and database. */}
          </span>
          <br />
        </div>
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
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Sports"
        description="Like to football,  and to run."
      />
      <ResumeHeading
        heading="Music"
        description="I listen to music of all genres and play the guitar and piano."
      />
      <ResumeHeading
        heading="Learner"
        description="I am open to learning new technologies with a focus on web application development."
      />
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
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
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
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
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
