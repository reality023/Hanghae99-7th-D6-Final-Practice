// Login에 쓸 토큰재발급 전용

import axios from "axios";

export const refresh = axios.create({
  baseURL: "http://whitewise.shop/",
});

refresh.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("refreshToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);