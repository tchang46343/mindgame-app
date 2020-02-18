import TokenService from "../services/token-services";
import config from "../config";

const UserApiService = {
  getUsers() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      headers: {
        authorization: `basic ${TokenService.getUsers()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getUsersId(userId) {
    return fetch(`${config.API_ENDPOINT}/users/${userId}`, {
      headers: {
        authorization: `basic ${TokenService.getUsers()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postUser(userId, text) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `basic ${TokenService.getUsers()}`
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
