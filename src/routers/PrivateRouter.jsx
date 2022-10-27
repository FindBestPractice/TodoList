import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('AccessToken');
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;