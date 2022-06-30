import { createSlice } from "@reduxjs/toolkit";
import { instance } from "../../shared/axios"

export const getDataDB = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/board");
      dispatch(setData(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addDataDB = (data) => {
  return async (dispatch) => {

    try {
      const response = await instance.post("/board", data);
      console.log(response)
      dispatch(addData(response.data));
    } catch (err) {
      console.log(err);
      window.alert(err.response.data.message);
    }
  };
};

//Reducer
const postSlice = createSlice({
  name: "post",
  initialState: {
    list: []
  },
  reducers: {
    setData: (state, action) => {
      state.list = action.payload;
    },
    addData: (state, action) => {
      state.list.push(action.payload);
    },
  }
});

export const { setData, addData } = postSlice.actions;
export default postSlice.reducer;