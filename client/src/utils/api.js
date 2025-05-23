import axios from "axios";

const baseURL =
  process.env.REACT_APP_BACKEND_URL ||
  "https://bytesphere-backend-ji9t.onrender.com";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
