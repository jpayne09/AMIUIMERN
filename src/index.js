import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css';
 import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-fezcc0wi.us.auth0.com';
const clientId = 'TAwdvRaf5rTsPAZ1vmaM0aU6Z1vEbVj0';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
      domain = {domain}
      clientId = {clientId}
      redirectUri = {window.location.origin}
      >
      <App  />
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
