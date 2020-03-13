import TokenService from "../services/token-services";
import config from "../config";

const UserApiService = {
  getUsers(userId) {
    return fetch(`${config.API_BASE_URL}/auth/login/+${userId}`, {
      headers: {
        authorization: `basic ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getUsersId(userId) {
    return fetch(`${config.API_BASE_URL}/auth/login/${userId}`, {
      headers: {
        authorization: `basic ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postUser(email, text) {
    return fetch(`${config.API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        email: email,
        text
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default UserApiService;
