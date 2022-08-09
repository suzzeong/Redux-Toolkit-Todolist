import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __getTodos, __postTodos } from "../redux/modules/todosSlice";
import Input from './elements/Input';
import Textarea from './elements/Textarea';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    username: '',
    title: '',
    content: '',
  });

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  const { username, title, content } = todo;

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__postTodos(todo));
    dispatch(__getTodos());
    setTodo({
      username: '',
      title: '',
      content: '',
    });
    navigate(`/todolist`);
  };

  return (
    <FormFirstdWrap onSubmit={onSubmitHandler}>
      <FormSecondWrap>
        <FormAddTodoWrap>
          {/* <FormTextDiv>
            <FormTextFontDiv>작성자</FormTextFontDiv>
          </FormTextDiv> */}
          {/* elements/Input 넣을 자리 */}
          <Input
            fontsize='24px'
            label='작성자'
            type='text'
            name='username'
            value={username}
            onChange={onChangeHandler}
            placeholder='작성자의 이름을 입력해주세요. (5자 이내)'
          />
          {/* elements/Input 넣을 자리 */}
          <Input
            fontsize='24px'
            label='제목'
            type='text'
            name='title'
            value={title}
            onChange={onChangeHandler}
            placeholder='제목을 입력해주세요. (50자 이내)'
          />
          {/* elements/Textarea 넣을 자리 */}
          <Textarea
            label='내용'
            name='content'
            value={content}
            onChange={onChangeHandler}
            placeholder='내용을 입력해주세요. (200자 이내)'
          />
        </FormAddTodoWrap>
        {/* elements/Button 넣을 자리, 임시로 CSS 넣어두었습니다.*/}
        <button>추가하기</button>
      </FormSecondWrap>
    </FormFirstdWrap>
  );
};

export default Form;
const FormFirstdWrap = styled.form`
  height: 100%;
`;
const FormSecondWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
`;
const FormAddTodoWrap = styled.div`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  outline: none;
`;
