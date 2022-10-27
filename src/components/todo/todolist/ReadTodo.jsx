import styled from 'styled-components';
import Button from '../../../elements/Button';

const ReadTodo = ({ id, todo, isCompleted, toggleUpdate, deleteTodo }) => {
  const deleteHandler = () => {
    deleteTodo({
      id,
    });
  };

  return (
    <>
      <StStatus>{isCompleted ? '완료' : '진행중'}</StStatus>
      <StTodo>{todo}</StTodo>
      <StButtons>
        <Button text="수정하기" component="ReadUpdateTodo" onClick={toggleUpdate} />
        <Button text="삭제하기" component="ReadUpdateTodo" onClick={deleteHandler} />
      </StButtons>
    </>
  );
};

export default ReadTodo;

const StFont = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.5px;
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
  margin-bottom: 15px;
`;

const StTodo = styled(StFont)`
  font-size: 1rem;
  margin-bottom: 15px;

  width: calc(100% - 10px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StButtons = styled.div`
  display: flex;
  gap: 10px;
`;
