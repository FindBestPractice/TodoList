import { useState } from 'react';

export const vaildTodo = (value) => value !== '';
export const validEmail = (value) => value.includes('@');
export const validPassword = (value) => !(value.length < 8);

const useInput = (type, initialValue) => {
  const [value, setValue] = useState(initialValue ? initialValue : '');
  let isValid = false;

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  if (type === 'todo') isValid = vaildTodo(value);
  if (type === 'email') isValid = validEmail(value);
  if (type === 'password') isValid = validPassword(value);

  return [value, inputHandler, isValid, setValue];
};

export default useInput;
