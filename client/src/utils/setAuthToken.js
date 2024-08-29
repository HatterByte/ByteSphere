import axios from "axios";

const setAuthToken = token => {
    if (token) {
        // If a token is present, set the x-auth-token header for all requests
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        // If no token, remove the x-auth-token header
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export default setAuthToken;
