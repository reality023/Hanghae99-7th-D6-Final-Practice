import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { removeToken, setToken } from '../shared/localStorage';
import { instance } from '../shared/axios';
import axios from "axios";
import {useRef} from 'react';


function Social () {
  const clientId = process.env.REACT_APP_GOOGLE_SOCIAL_CLIENT_ID;
  return (
    <div>
      <GoogleLoginButton />

      <GoogleOAuthProvider clientId={clientId}>
        <CustomGoogleLoginButton />
      </GoogleOAuthProvider>
      <button onClick={() => {
        removeToken();
      }}>LOGOUT</button>
    </div>
  )
}

function CustomGoogleLoginButton () {
  const success = async (data) => {
    try {
      console.log(data);
      
      // const response = await instance.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${data.access_token}`);
      // const response = await instance.get(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${data.access_token}`);
      // const response = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo`, 
      //   { headers: { Authorization: `Bearer ${data.access_token}`}});
      // console.log(response);
      // console.log("로그인 성공");
    } catch (err) {
      console.log(err);
    }
  }

  const error = (data) => {
    console.log('Login Failed' + data);
  }

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: (data) => { success(data) },
    onError: (data) => { error(data) }
  });

  return (
    <>
      <button onClick={() => googleLogin()}>구글 로그인</button>
    </>
  )
}

function GoogleLoginButton () {
  const clientId = process.env.REACT_APP_GOOGLE_SOCIAL_CLIENT_ID;

  const success = async (data) => {
    try {
      const response = await instance.post("/user/social", {}, { headers : { Credential: data.credential }});
      const token = response.data;
      setToken(token.accessToken, token.refreshToken);
      console.log("로그인 성공");
    } catch (err) {
      console.log(err);
    }
  }

  const error = (data) => {
    console.log('Login Failed');
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={success}
        onError={error}
      />
    </GoogleOAuthProvider>
  );
}

export default Social;