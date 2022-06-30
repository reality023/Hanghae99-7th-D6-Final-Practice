import { React, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

import { getDataDB, modifyDataDB } from "../redux/modules/postSlice";

const ModifyMemo = () => {
  const dispatch = useDispatch();
  const titletRef = useRef();
  const contentRef = useRef();
  const statusRef = useRef();
  const boardTypeRef = useRef();
  const params = useParams();

  useEffect(() => {
    // dispatch(getDataDB()); // PASS
  }, []);

  const onSubmit = (e) => {
    e.preventDefault(); // form 새로고침 기능을 막아주는 코드

    const data = {
      title: titletRef.current.value,
      content: contentRef.current.value,
      status: statusRef.current.value,
      boardType: boardTypeRef.current.value,
    };

    dispatch(modifyDataDB(params.id, data));

    titletRef.current.value = "";
    contentRef.current.value = "";
    statusRef.current.value = "";
    boardTypeRef.current.value = "";
  };

  return (
    <form onSubmit={onSubmit}>{/* form 안에서 엔터키를 누르거나 안에 있는 버튼을 누른 경우 => onSubmit */}
      <input type="text" ref={titletRef} />
      <input type="text" ref={contentRef} />
      <select ref={statusRef}>
        <option value="PUBLIC">PUBLIC</option>
        <option value="PRIVATE">PRIVATE</option>
      </select>
      <select ref={boardTypeRef}>
        <option value="MEMO">MEMO</option>
      </select>
      <button>수정</button>
    </form>
  );
};

export default ModifyMemo;
