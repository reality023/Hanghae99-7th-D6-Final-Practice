import { React, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { addDataDB } from '../redux/modules/postSlice';

const AddMemo = () => {
  const dispatch = useDispatch();
  const titletRef = useRef();
  const contentRef = useRef();
  const statusRef = useRef();
  const boardTypeRef = useRef();

  const onADD = (e) => {
    e.preventDefault();
    const data = {
      title: titletRef.current.value,
      content: contentRef.current.value,
      status: statusRef.current.value,
      boardType: boardTypeRef.current.value
    }

    dispatch(addDataDB(data));
    titletRef.current.value = "";
    contentRef.current.value = "";
    statusRef.current.value = "";
    boardTypeRef.current.value = "";
  }

  return (
    <form onSubmit={onADD}>
      <input type="text" ref={titletRef}/>
      <input type="text" ref={contentRef}/>
      <select ref={statusRef}>
        <option value="PUBLIC">PUBLIC</option>
        <option value="PRIVATE">PRIVATE</option>
      </select>
      <select ref={boardTypeRef}>
        <option value="MEMO">MEMO</option>
      </select>    
      <button>추가</button>
    </form>
  );
};

export default AddMemo;