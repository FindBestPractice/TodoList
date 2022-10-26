import styled from 'styled-components'

import Todo from './todo/Todo'

const List = ({ list, updateTodo, deleteTodo }) => {
<<<<<<< HEAD
  const todos = list.map((todo) => <Todo key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />);
  return <StLayout>{todos}</StLayout>;
};
=======
  const todos = list.map((todo) => (
    <Todo
      key={todo.id}
      {...todo}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
    />
  ))
  return <StLayout>{todos}</StLayout>
}
>>>>>>> 8453780378d3a61e0ed5b2c50d2552f24397e111

export default List

const StLayout = styled.div`
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
`
