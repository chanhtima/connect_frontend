import axios from "axios";
import { API_END_POINT_URL } from "../config/env";

const defaultAxios = axios.create({
  baseURL: API_END_POINT_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Add a request interceptor
defaultAxios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
defaultAxios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    if (error.response && error.response.status === 401) {
      // Unauthorized error, redirect to login
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default defaultAxios;
