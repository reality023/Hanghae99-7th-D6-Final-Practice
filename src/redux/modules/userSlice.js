import { createSlice } from "@reduxjs/toolkit";

import { instance } from "../../shared/axios";

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

export const loginA = (username, password) => {
  return async function (dispatch) {
    try {
      const response = await instance.post("/user/login", {
        username: username,
        password: password,
      });
      dispatch(checkLogin(username, password));
      setToken(response.data.accessToken, response.data.refreshToken);
      alert("로그인 되었습니다");
      window.location.replace("/");
      console.log(response);
    } catch (error) {
      alert("아이디와 비밀번호를 확인해주세요");
      console.log(error);
    }
  };
};

export const registerA = (username, nickname, password) => {
  return async function (dispatch) {
    try {
      const response = await instance.post("/user/signup", {
        username: username,
        nickname: nickname,
        imgPath: null,
        password: password,
      });
      dispatch(createUser(username, nickname, password));
      alert(response.data.errorMsg);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
};

export const { checkLogin, createUser } = userSlice.actions;
export default userSlice.reducer;
