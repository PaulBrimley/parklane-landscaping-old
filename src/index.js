import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import App from './App';
import { AppProvider } from './context/app.context';
import { EmailProvider } from './context/email.context';
import { ImageProvider } from './context/img.context';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <ImageProvider>
        <EmailProvider>
          <App />
        </EmailProvider>
      </ImageProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
