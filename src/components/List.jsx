import React from 'react';
// import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Todo from './Todo';

const List = () => {
  // const { todos } = useSelector((state) => state.todos);
  return (
    <StTodos>
      <StTitle>내 할일</StTitle>
      <StContainer>
        <StList>
          <Todo />
        </StList>
        <StList>
          <Todo />
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
