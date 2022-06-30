import { createSlice } from "@reduxjs/toolkit";

import { instance } from "../../shared/axios";

import { setToken } from "../../shared/localStorage";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
  },
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
      const response = await instance.post("/user/signup", {
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
      const response = await instance.post("/user/login", {
        username: username,
        password: password,
      });
      dispatch(checkLogin(username, password));
      setToken(response.data.accessToken, response.data.refreshToken);
      // localStorage.setItem("user_name", response.data.username); 아이디랑 닉네임을 더 넣어줄수도. 필요가있나 ?
      // localStorage.setItem("user_id", response.data.nickname);
      alert("로그인 되었습니다");
      // window.location.replace("/Main"); // Main 완성되면 주석풀기
      console.log(response);
    } catch (error) {
      alert("아이디와 비밀번호를 확인해주세요");
      console.log(error);
    }
  };
};

export const { checkLogin, createUser } = userSlice.actions;
export default userSlice.reducer;
