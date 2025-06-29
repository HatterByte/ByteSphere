import api from "./api";

const setAuthToken = (token) => {
  if (token) {
    // If a token is present, set the x-auth-token header for all requests
    api.defaults.headers.common["x-auth-token"] = token;
  } else {
    // If no token, remove the x-auth-token header
    delete api.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
