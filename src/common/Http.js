import axios from "axios";

export const baseHttp = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});
