import { createSlice } from "@reduxjs/toolkit";
import { setToken } from "../../shared/localStorage";
import { instance } from "../../shared/axios";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
  },
  reducers: {},
});

// 회원가입
export const registerAction = (username, nickname, password) => {
  return async function () {
    try {
      const response = await instance.post("user/signup", {
        username,
        nickname,
        password,
        imgPath: null,
      });
      alert(response.data.errorMsg);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
};

// 로그인
export const loginAction = (username, password) => {
  return async function () {
    try {
      const response = await instance.post("/user/login", {
        username,
        password,
      });
      onLoginSuccess(response);
      alert("로그인 되었습니다");
      console.log(response);
    } catch (error) {
      alert("아이디와 비밀번호를 확인해주세요");
      console.log(error);
    }
  };
};

// 토큰 재발급 refresh Token
export const onSilentRefresh = () => {
  instance
    .post("/user/refresh")
    .then(onLoginSuccess)
    .catch((error) => {
      console.log(error);
    });
};

export const onLoginSuccess = (response) => {
  const JWT_EXPIRY_TIME = 3600 * 1000;
  setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000); // 60분 - 1분(밀리세컨드) = 만료하기 1분 전 로그인 연장
  setToken(response.data.accessToken, response.data.refreshToken);
  console.log(response.data);
};

export default userSlice.reducer;
