import axios from "axios";
import {React, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux"; 

import {getDataDB} from "../redux/modules/postSlice";

function Main () {
  const dispatch = useDispatch();
  // const [board, setBoard] = useState();
  const postList = useSelector((state) => state.post.list)

  useEffect(() => {
    dispatch(getDataDB());
    console.log(postList);
  }, []);

  return (
    <div>
     {postList.boardList.map((v,i) => {
      return (
        <div key={i}>
          <div>{v.title}</div>
          <div>{v.explanation}</div>
          <div>{v.imgPath}</div>
        </div>
      )
     })}
     {postList.forderList.map((v,i) => {
      return (
        <div key={i}>
          <div>{v.status}</div>
          <div>{v.name}</div>
        </div>
      )
     })}
    </div>
  )
}

export default Main;