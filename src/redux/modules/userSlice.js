// toolkit
import { createSlice } from "@reduxjs/toolkit";
// axios, refresh
import { refresh } from "../../shared/axiosRefresh";
// Token Save
import { setToken } from "../../shared/localStorage";


const userSlice = createSlice({
  name: "user",
  initialState: { list: [] },
  reducers: {
    checkLogin: (state, action) => {
      state.list.push(action.payload);
    },
    createUser: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

// 회원가입
export const registerA = (username, nickname, password) => {
  return async function (dispatch) {
    try {
      const response = await refresh.post("user/signup", {
        username,
        nickname,
        password,
        imgPath: null,
      });
      dispatch(createUser(username, nickname, password));
      alert(response.data.errorMsg);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
};

// 로그인
export const loginA = (username, password) => {
  return async function (dispatch) {
    try {
      const response = await refresh.post("/user/login", {
        username: username,
        password: password,
      });
      dispatch(checkLogin(username, password));
      onLoginSuccess(response);
      alert("로그인 되었습니다");
      window.location.replace("/");
      console.log(response);
    } catch (error) {
      alert("아이디와 비밀번호를 확인해주세요");
      console.log(error);
    }
  };
};

// 토큰 재발급 refresh Token
export const onSilentRefresh = (response) => {
  refresh
    .post("/user/refresh")
    .then(onLoginSuccess)
    .catch((error) => {
      console.log(error);
    });
};

const JWT_EXPIRY_TIME = 3600 * 1000; // 60분
export const onLoginSuccess = (response) => {
  console.log(response.data);
  setToken(response.data.accessToken, response.data.refreshToken);

  // accessToken 만료하기 1분 전에 로그인 연장
  setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000); // 60분 - 1분(밀리세컨드)
};

export const { checkLogin, createUser } = userSlice.actions;
export default userSlice.reducer;
