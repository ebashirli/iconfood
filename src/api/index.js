import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3001/ic-app/api/v1/",
  headers: {
    Authorization: "Bearer " + import.meta.env.VITE_API_TOKEN,
  },
});
