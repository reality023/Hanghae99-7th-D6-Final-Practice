import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { instance } from '../shared/axios';

function Write () {
  const ref = {
    type: useRef(null),
    subject: useRef(null),
    link: useRef(null),
    description: useRef(null),
  };

  const getPost = async () => {
    const response = await instance.get("/board");
    console.log(response);
  }

  useEffect(() => {
    getPost();
  });

  const writePost = async () => {
    const response = await instance.post("/board",
      {
        title: "타이틀",
        explanation: "설명",
        imgPath: "https://cdn.pixabay.com/photo/2022/06/23/09/46/mountain-7279430_960_720.jpg",
        status: "PUBLIC",
        boardType: "LINK",
      }
    );

    console.log(response);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    writePost();
  };


  return (
    <Container>
      <form onSubmit={onSubmit}>
        <select ref={ref.type}>
          <option value="NONE">선택해주세요</option>
          <option value="LINK">링크</option>
          <option value="MEMO">메모</option>
        </select>
        제목<input type="text" ref={ref.subject} />
        링크<input type="text" ref={ref.link} />
        내용<input type="text" ref={ref.description} />
        <button>전송</button>
      </form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  select {
    font-size: 24px;
  }
  
  option {
    font-size: 24px;
  }

  input {
    font-size: 24px;
  }
`;

export default Write;