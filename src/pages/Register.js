// react
import React from "react";
// style
import styled from "styled-components";
// router
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
// redux-toolkit
import { registerA } from "../redux/modules/userSlice";

function Register() {

  const user_data = useSelector(state => state.user);
  console.log(user_data);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id_ref = React.useRef();
  const nick_ref = React.useRef();
  const pw_ref = React.useRef();
  const pwCheck_ref = React.useRef();

  const RegisterDispatch = () => {
    let id = id_ref.current.value;
    let nick = nick_ref.current.value;
    let pw = pw_ref.current.value;
    let pwCheck = pwCheck_ref.current.value;

    if (id === "" || pw === "" || nick === "") {
      alert("아이디, 닉네임, 비밀번호를 모두 입력해주세요.");
      return;
    }

    if (pw !== pwCheck) {
      alert("비밀번호가 일치하지 않습니다.");  
      return;
    }

    dispatch(
      registerA(
        id_ref.current.value,
        nick_ref.current.value,
        pw_ref.current.value,
        pwCheck_ref.current.value,
      )
    );
    navigate("/");
  };

  return (
    <Container>
      <h1>회원가입</h1>
      <LoginForm>
        <p>아이디</p>
        <input
          type="email"
          ref={id_ref}
          placeholder="아이디를 입력해주세요"
        ></input>
        <p>닉네임</p>
        <input
          type="text"
          ref={nick_ref}
          placeholder="닉네임 입력해주세요"
        ></input>
        <p>비밀번호</p>
        <input
          type="password"
          ref={pw_ref}
          placeholder="비밀번호를 입력해주세요"
        ></input>
        <p>비밀번호 확인</p>
        <input
          type="password"
          ref={pwCheck_ref}
          placeholder="비밀번호를 확인해주세요"
        ></input>
      </LoginForm>
      <button onClick={() => RegisterDispatch()}>회원가입</button>
      <button onClick={() => navigate("/")}>취소</button>
    </Container>
  );
}

const Container = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid #ccc;
  margin: 5% auto;
  h1 {
    margin: 5% auto;
    display: flex;
    justify-content: center;
  }
  button {
    margin: 5% 11%;
  }
`;

const LoginForm = styled.div`
  border: 1px solid #ccc;
  margin: 5% 5;
  padding: 15px;
  p {
    margin: 2% auto;
  }
`;

export default Register;
