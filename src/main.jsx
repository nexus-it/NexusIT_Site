import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { I18nextProvider } from "react-i18next"
import i18next from 'i18next';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'preline';

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

AOS.init();

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  }
})

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
