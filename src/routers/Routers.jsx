import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from '../pages/Auth';
import TodoList from '../pages/TodoList';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRouter';
import { getToken } from '../shared/token';
const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth autoLogin={getToken()} />} />
        <Route element={<PrivateRoute />}>
          <Route path="/todo" element={<TodoList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
