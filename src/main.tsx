import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import messages_en from "../compiled-lang/en.json";
import messages_fr from "../compiled-lang/fr.json";
import { IntlProvider } from 'react-intl';

const language = "en";

const messages = {
  'en': messages_en,
  'fr': messages_fr
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider locale={navigator.language} messages={messages[language]}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
);
