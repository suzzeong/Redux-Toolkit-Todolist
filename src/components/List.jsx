import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Todo from './Todo';
import { __getTodos } from '../redux/modules/todosSlice';
import { useParams } from 'react-router-dom';

const List = () => {

  const param = useParams()
  const dispatch = useDispatch();
  const {todos, isLoading, error} = useSelector((state) => state.todos)

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch])

  if(isLoading){
    return <div>로딩중 ...</div>
  }
  if(error){
    return <div>{error.message}</div>
  }

  return (
    <StTodos>
      <StTitle>내 할일</StTitle>
      <StContainer>
        <StList>
          {todos?.map((todo) => (
            <Todo key = {todo.id} id={todo.id} todo={todo} />
          ))}
        </StList>
      </StContainer>
    </StTodos>
  );
};

export default List;

const StTodos = styled.div``;
const StTitle = styled.h2`
  font-size: 32px;
`;
const StContainer = styled.section``;
const StList = styled.div`
  margin-bottom: 20px;
`;
