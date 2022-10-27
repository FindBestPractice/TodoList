import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { apis } from '../../shared/axios';
import CreateTodo from './CreateTodo';
import TodoList from './todolist/TodoList';

// TODO Assignment 4: /todo 페이지 만들기
const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  // todo Create
  const addTodo = async ({ todo }) => {
    const resp = await apis.createTodo({
      todo,
    });
    const createdTodo = resp.data;

    setTodos((prev) => [...prev, createdTodo]);
  };

  // todos Read
  const getTodos = async () => {
    const { data: allTodos } = await apis.getTodos();
    setTodos(allTodos);
  };

  // todo Update
  const updateTodo = async ({ id, todo, isCompleted }) => {
    const { data: updatedTodo } = await apis.updateTodo({
      id,
      todo,
      isCompleted,
    });
    setTodos((prev) => prev.map((item) => (item.id === updatedTodo.id ? updatedTodo : item)));
  };

  // todo Delete
  const deleteTodo = async ({ id }) => {
    await apis.deleteTodo({
      id,
    });
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (localStorage.getItem('AccessToken')) {
      getTodos();
    }
  }, []);

  return (
    <StLayout>
      <CreateTodo createTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </StLayout>
  );
};

export default TodoContainer;

const StLayout = styled.div`
  width: 100vw;
  height: calc(100vh - 140px);
  background: rgba(236, 236, 236, 0.3);
  padding: 0px 30px;
  overflow: scroll;
`;
