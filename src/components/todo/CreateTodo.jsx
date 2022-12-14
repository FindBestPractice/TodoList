import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../elements/Button';
import { Input } from '../../elements/Input';

const CreateTodo = ({ createTodo }) => {
  const [todo, setTodo] = useState('');

  // input field의 변경 내용 반영
  const changeHandler = (e) => {
    const value = e.target.value;
    setTodo(value);
  };

  // 사용자가 제출 버튼을 눌렀을 때 신규 todo를 추가하는 함수
  const submitHandler = (e) => {
    e.preventDefault();

    createTodo({
      todo,
    });

    // form 초기화
    setTodo('');
  };

  return (
    <StForm onsubmit={submitHandler}>
      <StField>
        <Input
          type="text"
          id="todo"
          value={todo}
          placeholder="할 일을 자유롭게 추가해보세요!"
          onChange={changeHandler}
          func="addTodo"
        />
      </StField>
      <Button text="추가하기" component="CreateTodo" onClick={submitHandler} disabled={!todo} />
    </StForm>
  );
};

export default CreateTodo;

const StForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  gap: 10px;
  padding: 20px 0px;

  background: rgba(236, 236, 236, 0.3);
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.04);
`;

const StField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
