// react
import React from "react";
// style
import styled from "styled-components";
// router
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
// redux-toolkit
import { loginA } from "../redux/modules/userSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user_data = useSelector((state) => state.data);

  const id_ref = React.useRef();
  const pw_ref = React.useRef();

  const LoginDispatch = () => {
    const id = id_ref.current.value;
    const pw = pw_ref.current.value;

    if (id === "" || pw === "") {
      alert("아이디, 비밀번호를 입력해주세요.");
      return false;
    }else{
      dispatch(loginA(id, pw));
      console.log(user_data);
    }
  };

  return (
    <Container>
      <h1>로그인</h1>
      <LoginForm>
        <p>아이디</p>
        <input
          type="email"
          ref={id_ref}
          placeholder="아이디를 입력해주세요"
        ></input>
        <p>비밀번호</p>
        <input
          type="password"
          ref={pw_ref}
          placeholder="비밀번호를 입력해주세요"
        ></input>
      </LoginForm>
      <button onClick={() => LoginDispatch()}>로그인</button>
      <button onClick={() => navigate("/Register")}>회원가입</button>
    </Container>
  );
}

const Container = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  margin: 5% auto;
  h1 {
    margin: 5% auto;
    display: flex;
    justify-content: center;
  }
  button {
    margin: 3% 9%;
  }
`;

const LoginForm = styled.div`
  border: 1px solid #ccc;
  margin: 5% auto;
  padding: 15px;
  p {
    margin: 2% auto;
  }
`;

export default Login;
