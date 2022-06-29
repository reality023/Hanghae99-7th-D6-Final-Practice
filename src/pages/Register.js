// react
import React from "react";
// style
import styled from "styled-components";
// router
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
// redux-toolkit
import { registerA } from "../redux/modules/userSlice";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id_ref = React.useRef();
  const nick_ref = React.useRef();
  const pw_ref = React.useRef();
  const pwCheck_ref = React.useRef();

  const RegisterDispatch = () => {
    const id = id_ref.current.value;
    const nick = nick_ref.current.value;
    const pw = pw_ref.current.value;
    const pwCheck = pwCheck_ref.current.value;
    
    // 유효성검사
    if (id === "" || pw === "" || nick === "") {
      alert("아이디, 닉네임, 비밀번호를 모두 입력해주세요.");
      return;
    }
    // 이메일 검사: '@', '.' 이 둘다 포함될것.
    // const isValidEmail =
    //   /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // if (!isValidEmail.test(id)) {
    //   alert("이메일 형식이 올바른지 확인해주세요!");
    //   return;
    // }
    // 비밀번호
    if (pw !== pwCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    // const isValidPassword =
    //   /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@$!%*#?&])[0-9a-zA-Z@$!%*#?&]{6,10}$/;
    // if (!isValidPassword.test(pw)) {
    //   alert(
    //     "비밀번호는 6 ~ 10자 영문, 숫자 및 특수문자조합으로 입력해야합니다!"
    //   );
    //   return;
    // }
    else {
      dispatch(registerA(id, nick, pw, pwCheck));
      navigate("/");
    }
  };

  return (
    <Container>
      <h1>회원가입</h1>
      <LoginForm>
        <form>
          <p>아이디</p>
          <input type="email" name="email" ref={id_ref} placeholder="abc@naver.com"></input>
          <p>닉네임</p>
          <input
            type="text"
            name="nickname"
            ref={nick_ref}
            placeholder="닉네임 입력해주세요"
          ></input>
          <p>비밀번호</p>
          <input
            type="password"
            name="pw"
            ref={pw_ref}
            placeholder="비밀번호를 입력해주세요"
          ></input>
          <p>비밀번호 확인</p>
          <input
            type="password"
            name="pwCheck"
            ref={pwCheck_ref}
            placeholder="비밀번호를 확인해주세요"
          ></input>
        </form>
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
