module.exports = {
  PORT: process.env.PORT || 3000,
  //API_ENDPOINT: "http://localhost:8000",
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8000",
  //"https://mindgame-backend.herokuapp.com",

  TOKEN_KEY: "mindgame-app-token"
};
