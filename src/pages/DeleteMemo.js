import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { removeDataDB } from "../redux/modules/postSlice";

const DeleteMemo = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const onDelete = (e) => {
    e.preventDefault();

    dispatch(removeDataDB(params.id));
  };

  return (
    <form onSubmit={onDelete}>
      <button>삭제</button>
    </form>
  );
};

export default DeleteMemo;
