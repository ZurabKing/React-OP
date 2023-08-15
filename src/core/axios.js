import axios from "axios";

export const API_URL = "http://data.kod06.ru/api/";
export const TOKEN_KEY = "token";

axios.defaults.baseURL = API_URL;

axios.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = window.localStorage.getItem(TOKEN_KEY);

    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
  }

  return config;
});

export * from "axios";

export default axios;
