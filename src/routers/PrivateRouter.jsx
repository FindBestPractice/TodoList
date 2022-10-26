import { Navigate } from 'react-router-dom'

const PrivateRoute = (component) => {
  const access = localStorage.getItem('token')
  return access ? component : <Navigate to="/" />
}

export default PrivateRoute
