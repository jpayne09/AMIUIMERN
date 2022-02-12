import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = 'dev-fezcc0wi.us.auth0.com';
  const clientId = 'TAwdvRaf5rTsPAZ1vmaM0aU6Z1vEbVj0';
  const history = useHistory();


  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri="https://localhost:3002/profile"
      onRedirectCallback={onRedirectCallback}
      scope = "read:current_user"
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;