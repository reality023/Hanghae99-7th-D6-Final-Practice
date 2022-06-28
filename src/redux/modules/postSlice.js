import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL:"http://localhost:5005"
})

export const getDataDB = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/post");
      dispatch(setData(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};

//Reducer
const postSlice = createSlice ({
 name:"post",
 initialState:{
  list:[]
 },
 reducers:{
  setData: (state, action) => {
    state.list = action.payload;
  },
 }
});

export const {setData}  = postSlice.actions;
export default postSlice.reducer;