import { useState } from 'react'
import styled from 'styled-components'

import ReadTodo from './ReadTodo'
import UpdateTodo from './UpdateTodo'

const Todo = ({ updateTodo, deleteTodo, ...props }) => {
  const [onUpdate, setOnUpdate] = useState(false)

  const toggleUpdate = () => {
<<<<<<< HEAD
    setOnUpdate((prev) => !prev);
  };
=======
    setOnUpdate((prev) => !prev)
  }
>>>>>>> 8453780378d3a61e0ed5b2c50d2552f24397e111

  return (
    <StLayout>
      {!onUpdate ? (
        <ReadTodo
          toggleUpdate={toggleUpdate}
          deleteTodo={deleteTodo}
          {...props}
        />
      ) : (
        <UpdateTodo
          toggleUpdate={toggleUpdate}
          updateTodo={updateTodo}
          {...props}
        />
      )}
    </StLayout>
  )
}

export default Todo

const StLayout = styled.div`
  grid-column: span 4;
  height: 140px;
  border: 1px solid #eeeeee;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0px 20px;

  /* mobile */
  @media all and (max-width: 700px) {
    grid-column: span 4;
  }
`
