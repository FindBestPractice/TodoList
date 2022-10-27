import { useState } from 'react';
import styled from 'styled-components';
import { Input } from '../../../elements/Input';
import Button from '../../../elements/Button';
import useInput from '../../../hooks/useInput';

// TODO assignment 5 todo 수정 기능 구현
const UpdateTodo = ({ id, todo, isCompleted, userId, toggleUpdate, updateTodo }) => {
  const [editTodo, editTodoHandler, editIsValid, editErrMsg] = useInput('edit', todo);
  const [form, setForm] = useState({
    id,
    todo,
    isCompleted,
    userId,
    hasError: false,
  });

  // form input field 값이 변화할 때마다 이를 반영하는 함수
  const changeHandler = (e) => {
    const field = e.target.id;
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      [field]: value,
      hasError: !value,
    }));
  };

  // 수정하기 모드 isCompleted 값 변경
  const toggleHandler = (e) => {
    setForm((prev) => ({
      ...prev,
      isCompleted: !prev.isCompleted,
    }));
  };

  const submitHandler = (e) => {
    updateTodo({
      id,
      todo: editTodo,
      isCompleted: form.isCompleted,
    });
    toggleUpdate();
  };

  return (
    <>
      <StState>
        <StStatus>{!form.isCompleted ? '진행중' : '완료'}</StStatus>
        <StToggle onClick={toggleHandler}>{!form.isCompleted ? '완료로 변경' : '진행 중으로 변경'}</StToggle>
      </StState>
      <Input value={editTodo} onChange={editTodoHandler} id="todo" func="updateTodo" />
      {!editIsValid && <StError>{editErrMsg}</StError>}
      <StButtons>
        <Button text="제출하기" component="ReadUpdateTodo" onClick={submitHandler} disabled={form.hasError} />
        <Button text="수정하기" component="ReadUpdateTodo" onClick={toggleUpdate} />
      </StButtons>
    </>
  );
};

export default UpdateTodo;

const StFont = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

const StState = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
`;

const StStatus = styled(StFont)`
  width: 45px;
  height: 20px;

  background: #ffffff;
  border: 1px solid #256ef1;
  border-radius: 6px;

  font-size: 0.8rem;
  color: #256ef1;
  text-align: center;
  padding: 3px;
`;

const StToggle = styled.button`
  background: transparent;
  border: none;
  color: #dadada;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #256ef1;
  }
`;

const StInput = styled.input`
  background: #ffffff;
  border: 1.2px solid #dadada;
  border-radius: 6px;
  width: 100%;
  height: 40px;
  padding: 11px 14px 11px 14px;
  margin-bottom: 5px;
  &:hover,
  &:focus {
    outline: none;
    border: 1.2px solid #256ef1;
  }
`;

const StError = styled(StFont)`
  font-size: 10px;
  line-height: 14px;
  color: #256ef1;
`;

const StButtons = styled.div`
  display: flex;
  gap: 10px;
`;
