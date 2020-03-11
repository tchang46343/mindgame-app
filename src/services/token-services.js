import config from "../config";

const TokenService = {
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  makeBasicAuthToken(email, password) {
    return window.btoa(`${email}:${password}`);
  },
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  }
};

export default TokenService;
