<div align="center">

# 💼 Portfolio Personal - Miguel Ochoa

### Modern Full-Stack Portfolio with TypeScript

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

[Demo en Vivo](#) • [Reportar Bug](https://github.com/tu-usuario/portfolio-dev28/issues) • [Solicitar Feature](https://github.com/tu-usuario/portfolio-dev28/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Comenzando](#-comenzando)
  - [Prerequisitos](#prerequisitos)
  - [Instalación](#instalación)
  - [Variables de Entorno](#variables-de-entorno)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [API Endpoints](#-api-endpoints)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🚀 Acerca del Proyecto

Portfolio personal interactivo desarrollado con tecnologías modernas. Incluye un backend robusto con TypeScript, validaciones de seguridad, rate limiting, y un frontend dinámico con React y Vite.

### ✨ Highlights

- 🎨 **Diseño Moderno**: UI/UX intuitiva y responsive
- 🌙 **Tema Oscuro/Claro**: Alternador de tema integrado
- 🌐 **Multiidioma**: Soporte para múltiples idiomas
- 🔒 **Seguro**: Helmet, rate limiting, validaciones robustas
- ⚡ **Rápido**: Vite para desarrollo ultra-rápido
- 📱 **Responsive**: Optimizado para todos los dispositivos
- 🧪 **Tested**: Cobertura de tests completa

---

## 🎯 Características

### Frontend
- ✅ **React 18** con TypeScript
- ✅ **Vite** para build y HMR ultra-rápido
- ✅ **Componentes Modulares**: Header, Profile, About, Resume, Projects, Contact
- ✅ **Theme Toggle**: Modo claro/oscuro persistente
- ✅ **Language Toggle**: Soporte multiidioma
- ✅ **Animaciones Suaves**: Transiciones y efectos visuales
- ✅ **Owl Carousel**: Galería de proyectos interactiva
- ✅ **Font Awesome**: Iconografía profesional
- ✅ **Responsive Design**: Mobile-first approach

### Backend
- ✅ **TypeScript** con ES Modules
- ✅ **Express.js** framework
- ✅ **Nodemailer** para formulario de contacto
- ✅ **Helmet** para security headers
- ✅ **Rate Limiting**: Protección contra spam y DDoS
- ✅ **Express Validator**: Validación robusta de inputs
- ✅ **XSS Protection**: Sanitización automática
- ✅ **SQL Injection Prevention**: Detección de patrones maliciosos
- ✅ **Error Handling**: Manejo centralizado de errores
- ✅ **Graceful Shutdown**: Cierre limpio del servidor
- ✅ **Health Check**: Endpoint de monitoreo

### Seguridad
- 🔒 **Helmet.js**: Headers de seguridad HTTP
- 🔒 **CORS Configurado**: Diferentes origins para dev/prod
- 🔒 **Input Validation**: Regex y sanitización
- 🔒 **Rate Limiting**: 5 requests/15min en contacto
- 🔒 **Request Size Limit**: Máximo 10kb por request
- 🔒 **XSS & SQLi Detection**: Patrones maliciosos bloqueados

---

## 🛠️ Stack Tecnológico

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: CSS Modules / SCSS
- **Testing**: Vitest + React Testing Library
- **Carousels**: Owl Carousel
- **Icons**: Font Awesome
- **Animations**: CSS Animations

### Backend
- **Runtime**: Node.js ≥ 20.0.0
- **Framework**: Express.js
- **Language**: TypeScript
- **Email**: Nodemailer
- **Security**: Helmet, Express Rate Limit
- **Validation**: Express Validator
- **CORS**: cors

### DevOps
- **Package Manager**: npm
- **Process Manager**: Concurrently
- **Version Control**: Git
- **Deployment**: Heroku (configured)

---

## 🏁 Comenzando

### Prerequisitos

Asegúrate de tener instalado:

- **Node.js** ≥ 20.0.0 ([Descargar](https://nodejs.org/))
- **npm** ≥ 10.0.0 (incluido con Node.js)
- **Git** ([Descargar](https://git-scm.com/))

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/portfolio-dev28.git
   cd portfolio-dev28
   ```

2. **Instalar dependencias del servidor**
   ```bash
   npm install
   ```

3. **Instalar dependencias del cliente**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   ```
   Edita `.env` con tus credenciales (ver sección siguiente)

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Servidor
NODE_ENV=development
PORT=5000
HOST=0.0.0.0

# Email Configuration (Gmail)
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-app-password
EMAIL_RECIPIENT=destinatario@ejemplo.com

# Production Only
CLIENT_URL=https://tu-dominio.com
```

#### 📧 Configurar Gmail App Password

1. Activar autenticación de 2 factores en tu cuenta Google
2. Ir a: https://myaccount.google.com/apppasswords
3. Generar App Password para "Mail"
4. Copiar el password (16 caracteres sin espacios) en `EMAIL_PASS`

---

## 🚀 Uso

### Desarrollo

#### Iniciar cliente y servidor simultáneamente:
```bash
npm run dev
```
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000

#### Solo servidor (con hot reload):
```bash
npm run server
```

#### Solo cliente:
```bash
npm run client
```

### Producción

#### 1. Compilar TypeScript
```bash
npm run build
```

#### 2. Iniciar servidor en producción
```bash
npm start
```

---

## 📁 Estructura del Proyecto

```
portfolio-dev28/
├── client/                          # Frontend React + Vite
│   ├── src/
│   │   ├── components/              # Componentes reutilizables
│   │   │   ├── ThemeToggle/         # Alternador de tema
│   │   │   └── LanguageToggle/      # Alternador de idioma
│   │   ├── PortfolioContainer/      # Secciones del portfolio
│   │   │   ├── Home/                # Sección Home
│   │   │   │   ├── Header/          # Navegación
│   │   │   │   ├── Profile/         # Perfil principal
│   │   │   │   └── Footer/          # Footer
│   │   │   ├── AboutMe/             # Acerca de mí
│   │   │   ├── Resume/              # Educación y experiencia
│   │   │   ├── Projects/            # Portafolio de proyectos
│   │   │   └── ContactMe/           # Formulario de contacto
│   │   ├── utilities/               # Utilidades compartidas
│   │   ├── images/                  # Assets de imágenes
│   │   ├── App.tsx                  # Componente principal
│   │   └── index.tsx                # Entry point
│   ├── public/                      # Archivos estáticos
│   ├── index.html                   # HTML template
│   ├── vite.config.ts               # Configuración de Vite
│   └── package.json                 # Dependencias del cliente
├── src/                             # Backend TypeScript
│   ├── middleware/
│   │   ├── errorHandler.ts          # Manejo global de errores
│   │   └── rateLimiter.ts           # Rate limiting config
│   ├── routes/
│   │   └── contactRoute.ts          # Ruta de contacto
│   ├── types/
│   │   └── contact.types.ts         # Tipos TypeScript
│   ├── utils/
│   │   └── validation.ts            # Validaciones y sanitización
│   ├── server.ts                    # Servidor Express principal
│   └── README.md                    # Documentación del backend
├── dist/                            # Código compilado (git-ignored)
├── .env                             # Variables de entorno (git-ignored)
├── .env.example                     # Template de variables
├── .gitattributes                   # Configuración de finales de línea
├── .gitignore                       # Archivos ignorados por Git
├── tsconfig.json                    # Configuración TypeScript
├── package.json                     # Dependencias del servidor
├── MIGRATION_SUMMARY.md             # Resumen de migración a TS
└── README.md                        # Este archivo
```

---

## 🌐 API Endpoints

### `POST /contact`
Enviar mensaje del formulario de contacto.

**Request Body:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "message": "Hola, me interesa tu trabajo"
}
```

**Success Response (200):**
```json
{
  "msg": "Thank you for contacting Miguel!"
}
```

**Error Response (400):**
```json
{
  "status": "error",
  "message": "Name is required, Email contains invalid characters"
}
```

**Rate Limit Response (429):**
```json
{
  "status": "error",
  "message": "Too many contact requests from this IP, please try again later."
}
```

### `GET /health`
Health check del servidor.

**Success Response (200):**
```json
{
  "status": "ok",
  "timestamp": "2026-02-08T12:00:00.000Z",
  "uptime": 123.456
}
```

### Validaciones del Formulario

#### Nombre
- ✅ Requerido
- ✅ 2-100 caracteres
- ✅ Solo letras, espacios, guiones y apóstrofes
- ✅ Soporta caracteres internacionales (á, é, í, ó, ú, ñ, ü)
- ❌ Sin HTML o scripts

#### Email
- ✅ Formato válido de email
- ❌ Sin HTML o scripts

#### Mensaje
- ✅ 10-5000 caracteres
- ❌ Sin HTML, scripts, SQL injection

---

## 🧪 Testing

### Ejecutar tests del cliente
```bash
cd client
npm test
```

### Ejecutar tests con coverage
```bash
cd client
npm run test:coverage
```

### Tests incluidos
- ✅ Header component
- ✅ Profile component
- ✅ Footer component
- ✅ AboutMe component
- ✅ Resume component
- ✅ Projects component
- ✅ ContactMe component
- ✅ ScreenHeading utility
- ✅ PortfolioContainer

---

## 🚢 Deployment

### Heroku

El proyecto incluye configuración para Heroku:

1. **Crear app en Heroku**
   ```bash
   heroku create tu-portfolio
   ```

2. **Configurar variables de entorno**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set EMAIL_USER=tu-email@gmail.com
   heroku config:set EMAIL_PASS=tu-app-password
   heroku config:set EMAIL_RECIPIENT=destinatario@ejemplo.com
   heroku config:set CLIENT_URL=https://tu-portfolio.herokuapp.com
   ```

3. **Deploy**
   ```bash
   git push heroku main
   ```

### Otros Servicios

- **Vercel**: Configurar `vercel.json`
- **Netlify**: Configurar `netlify.toml`
- **Railway**: Deploy directo desde GitHub
- **Render**: Auto-deploy desde repositorio

---

## 🗺️ Roadmap

- [ ] Agregar blog/artículos
- [ ] Implementar base de datos (MongoDB/PostgreSQL)
- [ ] Sistema de autenticación para admin
- [ ] Dashboard de analytics
- [ ] API de estadísticas de proyectos
- [ ] Integración con GitHub API
- [ ] Modo offline con Service Workers
- [ ] Internacionalización completa (i18n)
- [ ] Tests E2E con Playwright
- [ ] CI/CD con GitHub Actions
- [ ] Docker containerization

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea tu Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al Branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guía de Contribución

- Seguir el estilo de código existente
- Escribir tests para nuevas features
- Actualizar documentación según corresponda
- Usar commits descriptivos (Conventional Commits)

---

## 📄 Licencia

Distribuido bajo la Licencia ISC. Ver `LICENSE` para más información.

---

## 📧 Contacto

**Miguel Ochoa**

- Website: [tu-portfolio.com](https://tu-portfolio.com)
- Email: tu-email@ejemplo.com
- LinkedIn: [tu-linkedin](https://linkedin.com/in/tu-perfil)
- GitHub: [@tu-usuario](https://github.com/tu-usuario)

---

## 🙏 Agradecimientos

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Font Awesome](https://fontawesome.com/)
- [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/)
- [Helmet.js](https://helmetjs.github.io/)

---

<div align="center">

**⭐ Si te gusta este proyecto, considera darle una estrella!**

Hecho con ❤️ por [Miguel Ochoa](https://github.com/tu-usuario)

</div>
