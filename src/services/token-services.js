import config from "../config";

const TokenService = {
  makeBasicAuthToken(email, password) {
    return window.btoa(`${email}:${password}`);
  },
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  }
};

export default TokenService;
