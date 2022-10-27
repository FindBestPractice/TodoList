import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from '../pages/Auth';
import TodoList from '../pages/TodoList';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRouter';

const Routers = () => {
  const getToken = localStorage.getItem('AccessToken');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth autoLogin={getToken} />} />
        <Route element={<PrivateRoute />}>
          <Route path="/todo" element={<TodoList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
