import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'preline';
import i18next from 'i18next';
import { I18nextProvider } from "react-i18next"
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import LanguageDetector from 'i18next-browser-languagedetector';

AOS.init();

i18next
  .use(LanguageDetector) // Usa el detector de idioma del navegador
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: 'es', // Idioma por defecto (si no se puede detectar el idioma del navegador)
    resources: {
      es: {
        global: global_es, 
      },
      en: {
        global: global_en, 
      },
    },
    detection: {
      order: ['navigator'], // Prioriza el detector del navegador
    },
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
