import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: { list: [], isLogin: false },
  reducers: {
    checkLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    createUser: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const loginA = (username, password) => {
  return async function () {
    try {
      const repsonse = await axios.post("http://localhost:5001/user", {
        username: username,
        password: password,
      });
      console.log(repsonse);
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerA = (username, nickname, password) => {
  return async function () {
    try {
      const repsonse = await axios.post("http://localhost:5001/signup", {
        username: username,
        nickname: nickname,
        imgPath: null,
        password: password,
      });
      console.log(repsonse);
    } catch (error) {
      console.log(error);
    }
  };
};

export const { checkUser, createUser } = userSlice.actions;
export default userSlice.reducer;
