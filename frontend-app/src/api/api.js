import axios from "axios";

export default axios.create({
  baseURL: "https://YOUR-BACKEND-URL.onrender.com/api",
});