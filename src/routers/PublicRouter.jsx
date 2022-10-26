import { Navigate } from 'react-router-dom';

const PublicRoute = (component) => {
  const access = localStorage.getItem('token');
  return access ? <Navigate to="/todo" /> : component;
};

export default PublicRoute;
