import axios from "axios";
export const instance = axios.create({
  // baseURL: import.meta.env.VITE_BASE_URL,
  baseURL: "https://all-apps-dev.herokuapp.com/ic-app/api/v1/",
});
