import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { apis } from '../../shared/axios'
import TodoForm from './TodoForm'
import Lists from './Lists'

// TODO Assignment 4: /todo 페이지 만들기
const TodoListFrame = () => {
  const navigate = useNavigate()

  const [todos, setTodos] = useState([])

  // todo Create
  const addTodo = async ({ todo }) => {
    const resp = await apis.create_todo({
      todo,
    })
    const createdTodo = resp.data

<<<<<<< HEAD
    setTodos((prev) => [...prev, createdTodo]);
  };
=======
    setTodos((prev) => [...prev, createdTodo])
  }
>>>>>>> 8453780378d3a61e0ed5b2c50d2552f24397e111

  // todos Read
  const getTodos = async () => {
    const resp = await apis.get_todos()
    const allTodos = resp.data
    setTodos(allTodos)
  }

  // todo Update
  const updateTodo = async ({ id, todo, isCompleted }) => {
    const resp = await apis.update_todo({
      id,
      todo,
      isCompleted,
<<<<<<< HEAD
    });
    const updatedTodo = resp.data;
    setTodos((prev) => prev.map((item) => (item.id === updatedTodo.id ? updatedTodo : item)));
  };
=======
    })
    const updatedTodo = resp.data
    setTodos((prev) =>
      prev.map((item) => (item.id === updatedTodo.id ? updatedTodo : item)),
    )
  }
>>>>>>> 8453780378d3a61e0ed5b2c50d2552f24397e111

  // todo Delete
  const deleteTodo = async ({ id }) => {
    await apis.delete_todo({
      id,
<<<<<<< HEAD
    });
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
=======
    })
    setTodos((prev) => prev.filter((item) => item.id !== id))
  }
>>>>>>> 8453780378d3a61e0ed5b2c50d2552f24397e111

  // Assignment 3: 로그인 여부에 따른 리다이렉트 처리
  const checkToken = () => {
    if (localStorage.getItem('AccessToken')) {
      // todos를 가져옴
      getTodos()
      return
    }
    // 토큰 존재하지 않는 경우 /로 리다이렉트
    navigate('/')
  }

  useEffect(() => {
    checkToken()
  }, [])

  return (
    <StLayout>
      <TodoForm createTodo={addTodo} />
      <Lists todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </StLayout>
  )
}

export default TodoListFrame

const StLayout = styled.div`
  width: 100vw;
  height: calc(100vh - 140px);
  background: rgba(236, 236, 236, 0.3);
  padding: 0px 30px;
  overflow: scroll;
`
