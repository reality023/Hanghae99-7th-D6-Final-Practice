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
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:5001/login", {
        username: username,
        password: password,
      });
      console.log(response);
      dispatch(checkLogin(response));
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerA = (username, nickname, password) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:5001/signup", {
        username: username,
        nickname: nickname,
        imgPath: null,
        password: password,
      });
      console.log(response);
      dispatch(createUser(username, nickname, password));
    } catch (error) {
      console.log(error);
    }
  };
};

export const { checkLogin, createUser } = userSlice.actions;
export default userSlice.reducer;
