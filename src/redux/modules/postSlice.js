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
export const removeDataDB = (id) => {
  return async (dispatch) => {
    try {
      const response = await instance.delete(`/board/${id}`);
      dispatch(removeData(id));
    } catch (err) {
      console.log(err);
      window.alert(err.response.data.message);
    }
  }
}

export const modifyDataDB = (id, data) => { // id: event, data: data
  return async (dispatch) => {
    try {
      console.log(id)
      const response = await instance.put(`/board/${id}`, data);
      dispatch(modifyData({id, data}));
    } catch (err) {
      console.log(err);
      // window.alert(err.response.data.message);
    }
  }
}
//Reducer
const postSlice = createSlice({
  name: "post",
  initialState: {
    list: []
  },
  reducers:{
  setData: (state, action) => {
    state.list = action.payload;
  },
  addData: (state, action) => {
    state.list.push(action.payload);
  },
  removeData: (state, action) => {
    state.list = state.list.filter(
      (post) => {
        if (post.id === action.payload) {
          return false;
        } else {
          return true;
        }
      }
    )
  },
  modifyData: (state, action) => {
    state.list = state.list.map(
      (post) => {
        if (post.id === action.payload.id) {
          return {
            ...post, 
            subject: action.payload.data.subject,
            content: action.payload.data.content
          }
        } else {
          return post;
        }
      }
    );
  }
 }
});

export const {setData, addData, removeData, modifyData }  = postSlice.actions;
export default postSlice.reducer;