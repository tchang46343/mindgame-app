import TokenService from "../services/token-services";
import config from "../config";

const UserApiService = {
  getUsers(userId) {
    return fetch(`${config.API_BASE_URL}/users/${userId}`, {
      headers: {
        authorization: `basic ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getUsersId(userId) {
    return fetch(`${config.API_BASE_URL}/users/${userId}`, {
      headers: {
        authorization: `basic ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postUser(userId, text) {
    return fetch(`${config.API_BASE_URL}/users/${userId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `basic ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        user_id: userId,
        text
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default UserApiService;
