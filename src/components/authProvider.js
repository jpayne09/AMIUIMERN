// authProvider.js
import { MsalAuthProvider, LoginType } from 'react-aad-msal';
 
// Msal Configurations
export const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/common',
    clientId: '1785b4e8-fb75-4dad-a08b-adb7c8cff9d9',
    redirectUri: 'http://localhost:3000/'
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};
 
// Authentication Parameters
export const authenticationParameters = {
  scopes: [
    'user.read',
  ]
}
 
// Options
export const options = {
  loginType: LoginType.Redirect,
  tokenRefreshUri: window.location.origin + '/auth.html'
}

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft-ppe.com/v1.0/me"
};
export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)

