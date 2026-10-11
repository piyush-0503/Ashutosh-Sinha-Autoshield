import axios from "axios";

const api = axios.create({
  baseURL: "https://ppf-studio-backend-2026.onrender.com/api",
  timeout: 15000,
});

export default api;