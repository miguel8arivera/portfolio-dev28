import { Translations } from '../utilities/LanguageTypes';

export const en: Translations = {
  nav: {
    home: 'Home',
    aboutMe: 'About Me',
    resume: 'Resume',
    projects: 'Projects',
    contactMe: 'Contact Me',
  },

  home: {
    greeting: 'Hello, I am',
    role: 'Full Stack Developer',
    tagline: 'Building scalable and modern web applications',
    hireMe: 'Hire Me',
    getResume: 'Get Resume',
    roleAnimations: {
      enthusiasticDev: 'Enthusiastic Dev ❤️',
      fullStackDev: 'Full Stack Developer 👨‍💻',
      mernStackDev: 'MERN Stack Dev 💻',
      reactDev: 'React Dev ✅',
      crossPlatformDev: 'Cross Platform Dev 🔵',
    },
  },

  aboutMe: {
    title: 'About Me',
    subTitle: 'Why Choose Me?',
    description: 'I am a passionate Full Stack Developer with expertise in building modern web applications. I love creating efficient, scalable, and user-friendly solutions.',
    highlights: 'Here are a Few Highlights:',
    whyChooseMe: [
      'Full Stack web development',
      'Interactive Front End design',
      'React and React Native',
      'Building REST APIs',
      'Managing databases',
    ],
    hireMe: 'Hire Me',
    getResume: 'Get Resume',
  },

  resume: {
    title: 'Resume',
    subTitle: 'My formal Bio Details',
    education: 'Education',
    workHistory: 'Work History',
    programmingSkills: 'Programming Skills',
    applicationSkills: 'Application Skills',
    projects: 'Projects',
    interests: 'Interests',
    educationList: [
      {
        heading: 'University Jorge Basadre Grohmann, Peru',
        subHeading: '',
      },
      {
        heading: 'freeCodeCamp, USA',
        subHeading: 'Front-end Dev',
      },
    ],
    workExperience: {
      heading: 'Realized projects in React and Nodejs',
      subHeading: 'Full-Stack Dev',
      descriptions: [
        'Currently I make projects with the MERN stack, which is used in the UI for a good user experience.',
        'Construction of an E-commerce which provides an approach to current business, connected to a database and business logic.',
        'Creation of a web portfolio made with React, CSS, strengthening the comfort of the use of web technologies.',
      ],
    },
    projectsList: [
      {
        title: 'Budget-app',
        description: 'An application to control the budget, which can be used in any business very intuitive.',
        subHeading: 'Technologies Used: React, CSS, HTML, Sass.',
      },
      {
        title: 'E-commerce',
        description: 'An online store of products which is widely used and with a high demand from users.',
        subHeading: 'Technologies Used: React, Redux, Tailwind, Firebase, TypeScript, Node js.',
      },
      {
        title: 'Instagram-clone',
        description: 'A clone with the same functionality of Instagram applying the different technologies for web development.',
        subHeading: 'Technologies Used: Git, JavaScript, Node, GraphQL, React, Redux, Tailwind, TypeScript.',
      },
    ],
    interestsList: [
      {
        heading: 'Sports',
        description: 'Like to football, and to run.',
      },
      {
        heading: 'Music',
        description: 'I listen to music of all genres and play the guitar and piano.',
      },
      {
        heading: 'Learner',
        description: 'I am open to learning new technologies with a focus on web application development.',
      },
    ],
  },

  projects: {
    title: 'Projects',
    subTitle: 'A Bit of My Project',
    visitButton: 'Visit',
    projectsList: [
      {
        title: 'E-commerce-app',
        description: 'Construction of an E-commerce which provides an approach to current business, connected to a database and business logic.',
      },
      {
        title: 'Portfolio-web',
        description: 'Creation of a web portfolio made with React, CSS, strengthening the comfort of the use of web technologies.',
      },
      {
        title: 'Portfolio-web',
        description: 'Creation of a web portfolio made with React, CSS, strengthening the comfort of the use of web technologies.',
      },
    ],
  },

  contact: {
    title: 'Contact Me',
    subTitle: "Let's keep in Touch",
    description: 'Feel free to reach out if you want to collaborate on a project, have a question, or just want to connect.',
    contactAnimations: {
      haveDiscussion: 'Have a discussion..',
      shareExperience: 'Share experience',
    },
    nameLabel: 'Name',
    namePlaceholder: 'Enter your full name',
    emailLabel: 'Email',
    emailPlaceholder: 'yourname@example.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell me about your project or just say hi...',
    sendButton: 'Send Message',
    sending: 'Sending',
    validation: {
      fillAllFields: 'Please fill all the fields',
      invalidName: 'Name can only contain letters and spaces (no numbers or special characters)',
      invalidEmail: 'Please enter a valid email address (e.g., name@example.com)',
      securityError: 'Invalid input detected. Please remove any HTML tags, scripts, or special code.',
      nameMalicious: '⛔ Invalid input detected. Please enter a valid name without special characters or code.',
      emailMalicious: '⛔ Invalid input detected. Please enter a valid email address.',
      messageMalicious: '⛔ Invalid input detected. Please avoid using HTML tags, scripts, or special code syntax.',
    },
    toast: {
      success: '🎉 Message sent successfully! I\'ll get back to you soon.',
      error: '❌ Oops! Something went wrong. Please try again.',
      fillFields: '⚠️ Please fill all the fields',
      invalidName: '⚠️ Name can only contain letters and spaces',
      invalidEmail: '⚠️ Please enter a valid email address',
      securityError: '⛔ Security Error: Invalid characters or code detected in your input',
    },
  },

  footer: {
    backToTop: 'Back To Top',
  },
};
