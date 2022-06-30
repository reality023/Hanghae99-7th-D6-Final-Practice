import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction, onSilentRefresh } from "../redux/modules/userSlice";
import { removeToken } from "../shared/localStorage";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const idRef = React.useRef();
  const pwRef = React.useRef();

  const LoginDispatch = () => {
    let id = idRef.current.value;
    let pw = pwRef.current.value;

    if (id === "" || pw === "") {
      alert("아이디, 비밀번호를 모두 입력해주세요.");
      return{};
    }
    dispatch(loginAction(id, pw));
  };

  return (
    <Container>
      <h1>로그인</h1>
      <LoginForm>
        <p>아이디</p>
        <input
          type="email"
          ref={idRef}
          placeholder="아이디를 입력해주세요"
        ></input>
        <p>비밀번호</p>
        <input
          type="password"
          ref={pwRef}
          placeholder="비밀번호를 입력해주세요"
        ></input>
      </LoginForm>
      <button onClick={() => LoginDispatch()}>로그인</button>
      <button onClick={() => navigate("/Register")}>회원가입</button>
      <button onClick={() => removeToken(alert("로그아웃"))}>로그아웃</button>
      <button onClick={() => onSilentRefresh()}>리프레시 토큰</button>
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
