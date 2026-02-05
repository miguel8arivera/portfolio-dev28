import React from 'react';
import { createRoot } from 'react-dom/client';
import './themes.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeService from './utilities/ThemeService';
import LanguageService from './utilities/LanguageService';

// Initialize theme service - access the handler to trigger constructor
const themeService = ThemeService.themeHandler;
console.log('Theme service initialized:', themeService);

// Initialize language service
const languageService = LanguageService.languageHandler;
console.log('Language service initialized:', languageService);

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
