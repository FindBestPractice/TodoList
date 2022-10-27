import styled from 'styled-components';

import Todo from './Todo';

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  const workingList = todos.filter((todo) => !todo.isCompleted);
  const doneList = todos.filter((todo) => todo.isCompleted);

  const getTodos = (list) => {
    return list.map((todo) => <Todo key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />);
  };

  const workingTodos = getTodos(workingList);
  const doneTodos = getTodos(doneList);

  return (
    <>
      <StSection>
        <StCategory>Working...🔥</StCategory>
        <StList>{workingTodos}</StList>
      </StSection>
      <StSection>
        <StCategory>Done..! 🎉</StCategory>
        <StList>{doneTodos}</StList>
      </StSection>
    </>
  );
};

export default TodoList;

const StSection = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 3px 13px 1px rgba(0, 0, 0, 0.05);
  padding: 30px 20px;
  margin-bottom: 30px;
`;

const StCategory = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.5px;
  font-size: 20px;
  margin-bottom: 20px;
`;

const StList = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 12fr);
  grid-column-gap: 15px; // gutter @Figma
  grid-row-gap: 28px; // gutter @Figma

  /* mobile */
  @media all and (max-width: 700px) {
    grid-template-columns: repeat(4, 4fr);
    grid-column-gap: 16px; // gutter @Figma
    grid-row-gap: 16px; // gutter @Figma
  }
`;
