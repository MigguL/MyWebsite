import auth0 from 'auth0-js';

class Auth0 {

    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'dev-miggul.eu.auth0.com',
            clientID: 'x83RSl6ztleTL9V4QRnHw7da6caC375f',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid profile'
        });
    
        this.login = this.login.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
      }

      handleAuthentication() {
        return new Promise((resolve, reject) => {
          this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
              this.setSession(authResult);
              resolve();
            } else if (err) {
              reject(err);
              console.log(err);
            }
          });
        })
      }

      setSession() {
    //Save tokens
        
      }

      login() {
        this.auth0.authorize();
      }
}

const auth0Client = new Auth0();

export default auth0Client;