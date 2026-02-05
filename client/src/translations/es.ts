import { Translations } from '../utilities/LanguageTypes';

export const es: Translations = {
  nav: {
    home: 'Inicio',
    aboutMe: 'Sobre Mí',
    resume: 'Currículum',
    projects: 'Proyectos',
    contactMe: 'Contacto',
  },

  home: {
    greeting: 'Hola, soy',
    role: 'Desarrollador Full Stack',
    tagline: 'Construyendo aplicaciones web escalables y modernas',
    hireMe: 'Contrátame',
    getResume: 'Ver Currículum',
    roleAnimations: {
      enthusiasticDev: 'Desarrollador Entusiasta ❤️',
      fullStackDev: 'Desarrollador Full Stack 👨‍💻',
      mernStackDev: 'Desarrollador MERN Stack 💻',
      reactDev: 'Desarrollador React ✅',
      crossPlatformDev: 'Desarrollador Multiplataforma 🔵',
    },
  },

  aboutMe: {
    title: 'Sobre Mí',
    subTitle: '¿Por qué elegirme?',
    description: 'Soy un Desarrollador Full Stack apasionado con experiencia en la construcción de aplicaciones web modernas. Me encanta crear soluciones eficientes, escalables y fáciles de usar.',
    highlights: 'Algunos aspectos destacados:',
    whyChooseMe: [
      'Desarrollo web Full Stack',
      'Diseño Front End interactivo',
      'React y React Native',
      'Construcción de APIs REST',
      'Gestión de bases de datos',
    ],
    hireMe: 'Contrátame',
    getResume: 'Ver Currículum',
  },

  resume: {
    title: 'Currículum',
    subTitle: 'Mis Detalles Formales',
    education: 'Educación',
    workHistory: 'Experiencia Laboral',
    programmingSkills: 'Habilidades de Programación',
    applicationSkills: 'Habilidades de Aplicación',
    projects: 'Proyectos',
    interests: 'Intereses',
    educationList: [
      {
        heading: 'Universidad Jorge Basadre Grohmann, Perú',
        subHeading: '',
      },
      {
        heading: 'freeCodeCamp, USA',
        subHeading: 'Desarrollador Front-end',
      },
    ],
    workExperience: {
      heading: 'Proyectos realizados en React y Nodejs',
      subHeading: 'Desarrollador Full-Stack',
      descriptions: [
        'Actualmente realizo proyectos con el stack MERN, que se utiliza en la interfaz de usuario para una buena experiencia de usuario.',
        'Construcción de un comercio electrónico que proporciona un enfoque al negocio actual, conectado a una base de datos y lógica de negocio.',
        'Creación de un portafolio web hecho con React, CSS, fortaleciendo la comodidad del uso de tecnologías web.',
      ],
    },
    projectsList: [
      {
        title: 'Aplicación de Presupuesto',
        description: 'Una aplicación para controlar el presupuesto, que puede ser utilizada en cualquier negocio de manera muy intuitiva.',
        subHeading: 'Tecnologías Utilizadas: React, CSS, HTML, Sass.',
      },
      {
        title: 'E-commerce',
        description: 'Una tienda en línea de productos que es ampliamente utilizada y con una alta demanda de usuarios.',
        subHeading: 'Tecnologías Utilizadas: React, Redux, Tailwind, Firebase, TypeScript, Node js.',
      },
      {
        title: 'Clon de Instagram',
        description: 'Un clon con la misma funcionalidad de Instagram aplicando las diferentes tecnologías para el desarrollo web.',
        subHeading: 'Tecnologías Utilizadas: Git, JavaScript, Node, GraphQL, React, Redux, Tailwind, TypeScript.',
      },
    ],
    interestsList: [
      {
        heading: 'Deportes',
        description: 'Me gusta el fútbol y correr.',
      },
      {
        heading: 'Música',
        description: 'Escucho música de todos los géneros y toco la guitarra y el piano.',
      },
      {
        heading: 'Aprendiz',
        description: 'Estoy abierto a aprender nuevas tecnologías con un enfoque en el desarrollo de aplicaciones web.',
      },
    ],
  },

  projects: {
    title: 'Proyectos',
    subTitle: 'Un Poco de Mis Proyectos',
    visitButton: 'Visitar',
    projectsList: [
      {
        title: 'Aplicación E-commerce',
        description: 'Construcción de un comercio electrónico que proporciona un enfoque al negocio actual, conectado a una base de datos y lógica de negocio.',
      },
      {
        title: 'Portafolio Web',
        description: 'Creación de un portafolio web hecho con React, CSS, fortaleciendo la comodidad del uso de tecnologías web.',
      },
      {
        title: 'Portafolio Web',
        description: 'Creación de un portafolio web hecho con React, CSS, fortaleciendo la comodidad del uso de tecnologías web.',
      },
    ],
  },

  contact: {
    title: 'Contáctame',
    subTitle: 'Mantengámonos en Contacto',
    description: 'No dudes en comunicarte si quieres colaborar en un proyecto, tienes alguna pregunta o simplemente quieres conectar.',
    contactAnimations: {
      haveDiscussion: 'Tengamos una charla..',
      shareExperience: 'Compartir experiencia',
    },
    nameLabel: 'Nombre',
    namePlaceholder: 'Ingresa tu nombre completo',
    emailLabel: 'Correo Electrónico',
    emailPlaceholder: 'tunombre@ejemplo.com',
    messageLabel: 'Mensaje',
    messagePlaceholder: 'Cuéntame sobre tu proyecto o simplemente saluda...',
    sendButton: 'Enviar Mensaje',
    sending: 'Enviando',
    validation: {
      fillAllFields: 'Por favor completa todos los campos',
      invalidName: 'El nombre solo puede contener letras y espacios (sin números ni caracteres especiales)',
      invalidEmail: 'Por favor ingresa una dirección de correo válida (ej: nombre@ejemplo.com)',
      securityError: 'Entrada inválida detectada. Por favor elimina cualquier etiqueta HTML, scripts o código especial.',
      nameMalicious: '⛔ Entrada inválida detectada. Por favor ingresa un nombre válido sin caracteres especiales o código.',
      emailMalicious: '⛔ Entrada inválida detectada. Por favor ingresa una dirección de correo válida.',
      messageMalicious: '⛔ Entrada inválida detectada. Por favor evita usar etiquetas HTML, scripts o sintaxis de código especial.',
    },
    toast: {
      success: '🎉 ¡Mensaje enviado exitosamente! Te responderé pronto.',
      error: '❌ ¡Ups! Algo salió mal. Por favor intenta de nuevo.',
      fillFields: '⚠️ Por favor completa todos los campos',
      invalidName: '⚠️ El nombre solo puede contener letras y espacios',
      invalidEmail: '⚠️ Por favor ingresa una dirección de correo válida',
      securityError: '⛔ Error de Seguridad: Se detectaron caracteres inválidos o código en tu entrada',
    },
  },

  footer: {
    backToTop: 'Volver Arriba',
  },
};
