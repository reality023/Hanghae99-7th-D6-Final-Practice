import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

function Social() {
  return (
    <div>
      <GoogleLoginButton />
    </div>
  );
}

export default Social;

export function GoogleLoginButton() {
  const clientId =
    "92962841385-9crqu6ceboe2l99frk9b5jfvols875a1.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
}