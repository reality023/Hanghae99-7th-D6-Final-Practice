import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { removeToken, setToken } from '../shared/localStorage';
import { instance } from '../shared/axios';

function Social () {
  return (
    <div>
      <GoogleLoginButton />
      <button onClick={() => {
        removeToken();
      }}>LOGOUT</button>
    </div>
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