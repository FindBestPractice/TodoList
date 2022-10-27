import { useState } from 'react';

export const vaildTodo = (value) => value !== '';
export const validEmail = (value) => value.includes('@');
export const validPassword = (value) => !(value.length < 8);

const useInput = (type, initialValue) => {
  const [value, setValue] = useState(initialValue ? initialValue : '');

  let isValid = null;
  let errMsg = '';

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  if (type === 'edit') {
    isValid = vaildTodo(value);
    errMsg = '수정하기 위해서는 할 일을 기입해 주셔야 합니다.';
  }
  if (type === 'email') {
    isValid = value.length > 0 ? validEmail(value) : null;
    errMsg = '이메일은 반드시 @을 포함해야 합니다.';
  }
  if (type === 'password') {
    isValid = value.length > 0 ? validPassword(value) : null;
    errMsg = '비밀번호는 반드시 8자 이상이어야 합니다.';
  }

  return [value, inputHandler, isValid, errMsg, setValue];
};

export default useInput;
