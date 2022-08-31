import axios from "axios";

const url = import.meta.env.API_URL || "http://localhost:4000";

export const api = axios.create({
  baseURL: url,
});
