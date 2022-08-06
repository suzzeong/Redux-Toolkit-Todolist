import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  // const { todo } = useSelector((state) => state.todos);
  // const dispatch = useDispatch;

  const navigate = useNavigate()
  return (
    <StTodoContainer
    onClick={() => {
      navigate(`/detail`);     
      // `/detail/${todo.id}` 요렇게 수정해야 한다.
    }}>
      <StTodo>
        <StTodoTitle>확인용 제목</StTodoTitle>
        <StTodoUsername>작성자: 미상</StTodoUsername>
      </StTodo>
      <StTodobutton>
        <DeleteIcon />
      </StTodobutton>
    </StTodoContainer>
  );
};

export default Todo;

const StTodoContainer = styled.div`
  box-sizing: border-box;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 10px;
  padding: 12px;
  height: 90px;
  width: 100%;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StTodo = styled.div``;

const StTodoTitle = styled.div`
  font-size: 20px;
`;
const StTodoUsername = styled.div`
  font-size: 10px;
`;
const StTodobutton = styled.div`
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid rgb(238, 238, 238);
  padding: 5px;
`;
