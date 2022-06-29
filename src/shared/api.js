import { instance } from "./axios";

export const login = async (data) => await instance.post(`/user/login`, data);
export const socialLogin = async (credential) => await instance.post(`/user/social`, {}, {
  headers: { Credential: credential }
});
export const register = async (data) => await instance.post(`/user/signup`, data);
export const refreshLogin = async (refreshToken) => await instance.post(`/user/refresh`, {}, {
  headers: { Authorization: `Bearer ${refreshToken}` }
});
export const checkEmail = async (email) => await instance.get(`/user/emailDupCheck/${email}`);
export const checkNickname = async (nickname) => await instance.get(`/user/nameDupCheck/${nickname}`);

const api = {
  login,
  socialLogin,
  register,
  refreshLogin,
  checkEmail,
  checkNickname
}

export default api;