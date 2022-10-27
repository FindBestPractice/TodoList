import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// interceptor 통해 로그인/회원가입을 제외한 모든 API 요청에 JWT 헤더에 포함시킴
api.interceptors.request.use(
  // TODO token으로 config.url 바꾸기
  function (config) {
    if (config.url !== '/auth/signup' && config.url !== '/auth/signin') {
      const auth = localStorage.getItem('AccessToken')
      config.headers.Authorization = `Bearer ${auth}`
      return config
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

// TODO 전역 에러 처리 설명 추가
// interceptor 통해 응답 에러 처리
api.interceptors.response.use(
  function (config) {
    return config
  },
  function (error) {
    return error.response
  },
)

// 전역 axios 사용
export const apis = {
  // auth page(/)
  signUp: ({ email, password }) =>
    api.post(`/auth/signup`, {
      email,
      password,
    }),
  signIn: ({ email, password }) =>
    api.post(`/auth/signin`, {
      email,
      password,
    }),

  // todoList page(/todo)
  createTodo: ({ todo }) =>
    api.post(`/todos`, {
      todo,
    }),
  getTodos: () => api.get(`/todos`),
  updateTodo: ({ id, todo, isCompleted }) =>
    api.put(`/todos/${id}`, {
      todo,
      isCompleted,
    }),
  deleteTodo: ({ id }) => api.delete(`/todos/${id}`),
}
