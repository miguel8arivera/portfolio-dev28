/**
 * Resume Data
 * Contains all resume section data including skills, education, work history, and projects
 */

export const resumeBullets = [
  { label: "Education", logoSrc: "education.svg" },
  { label: "Work History", logoSrc: "work-history.svg" },
  { label: "Programming Skills", logoSrc: "programming-skills.svg" },
  { label: "Application Skills", logoSrc: "programming-skills.svg" },
  { label: "Projects", logoSrc: "projects.svg" },
  { label: "Interests", logoSrc: "interests.svg" },
];

export const programmingSkillsDetails = [
  { skill: "JavaScript", ratingPercentage: 85 },
  { skill: "React", ratingPercentage: 65 },
  { skill: "Redux", ratingPercentage: 75 },
  { skill: "Node JS", ratingPercentage: 65 },
  { skill: "Git", ratingPercentage: 65 },
  { skill: "GraphQL", ratingPercentage: 65 },
  { skill: "TypeScript", ratingPercentage: 80 },
  { skill: "Mongo Db", ratingPercentage: 75 },
  { skill: "SQL Server", ratingPercentage: 90 },
  { skill: "CSS", ratingPercentage: 65 },
  { skill: "Sass", ratingPercentage: 65 },
  { skill: "Tailwind", ratingPercentage: 75 },
  { skill: "HTML", ratingPercentage: 60 },
];

export const applicationSkillsDetails = [
  { skill: "E-commerce", ratingPercentage: 80 },
];

export const projectsDetails = [
  {
    title: "Budget-app",
    duration: { fromDate: "2021", toDate: "June 2022" },
    description:
      "An application to control the budget, which can be used in any business very intuitive.",
    subHeading: "Technologies Used: React, CSS, HTML, Sass.",
  },
  {
    title: "E-commerce",
    duration: { fromDate: "2022", toDate: "present" },
    description:
      "An online store of products which is widely used and with a high demand from users.",
    subHeading:
      "Technologies Used: React, Redux, Tailwind, Firebase, TypeScript, Node js.",
  },
  {
    title: "Instagram-clone",
    duration: { fromDate: "2022", toDate: "present" },
    description:
      "A clone with the same functionality of Instagram applying the different technologies for web development.",
    subHeading:
      "Technologies Used: Git, JavaScript, Node, GraphQL, React, Redux, Tailwind, TypeScript.",
  },
];

export const education = [
  {
    heading: "University Jorge Basadre Grohmann, Peru",
    subHeading: "",
    fromDate: "2012",
    toDate: "2015",
  },
  {
    heading: "freeCodeCamp, USA",
    subHeading: "Front-end Dev",
    fromDate: "2020",
    toDate: "2022",
  },
];

export const workExperience = {
  heading: "Realized projects in React and Nodejs",
  subHeading: "Full-Stack Dev",
  fromDate: "2020",
  toDate: "Present",
  descriptions: [
    "Currently I make projects with the MERN stack, which is used in the UI for a good user experience.",
    "Construction of an E-commerce which provides an approach to current business, connected to a database and business logic.",
    "Creation of a web portfolio made with React, CSS, strengthening the comfort of the use of web technologies.",
  ],
};

export const interests = [
  {
    heading: "Sports",
    description: "Like to football, and to run.",
  },
  {
    heading: "Music",
    description: "I listen to music of all genres and play the guitar and piano.",
  },
  {
    heading: "Learner",
    description:
      "I am open to learning new technologies with a focus on web application development.",
  },
];
