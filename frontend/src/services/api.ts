import axios from "axios";

const url = import.meta.env.VITE_API_URL || "http://localhost:4000";

export const api = axios.create({
  baseURL: url,
});
