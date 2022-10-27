import { Navigate } from 'react-router-dom';
import AuthFrame from '../components/auth/AuthFrame';

const Auth = ({ autoLogin }) => {
  if (autoLogin) {
    return <Navigate to="/todo" />;
  }
  return (
    <>
      <AuthFrame />
    </>
  );
};

export default Auth;
