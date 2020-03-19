import TokenService from "../services/token-services";
import { API_BASE_URL } from "../config";
//import config from "../config";

const UserApiService = {
  getUsers(userId) {
    console(userId);
    return fetch(`${API_BASE_URL}/auth/login/+${userId}`, {
      headers: {
        authorization: `basic ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getUsersId(userId) {
    return fetch(`${API_BASE_URL}/auth/login/+${userId}`, {
      headers: {
        authorization: `basic ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postUser(info) {
    return fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(info)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default UserApiService;
