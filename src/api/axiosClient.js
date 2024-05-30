import axios from "axios";
import queryString from "query-string";
import { getToken } from "../utilities/localStorageUtil";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.headers.authorization = "Bearer " + getToken();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
