import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css';
 import { Auth0Provider } from '@auth0/auth0-react';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import { BrowserRouter as Router } from 'react-router-dom';

const domain = 'dev-fezcc0wi.us.auth0.com';
const clientId = 'TAwdvRaf5rTsPAZ1vmaM0aU6Z1vEbVj0';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Auth0ProviderWithHistory>
      <App  />
  </Auth0ProviderWithHistory>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
