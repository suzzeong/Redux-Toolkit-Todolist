import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos, __postTodos } from "../redux/modules/todosSlice";
import Input from "./elements/Input";
import Textarea from "./elements/Textarea";
import { useNavigate } from "react-router-dom";
import Button from "./elements/Button";
import useInput from "../hooks/useInput";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, onChangeUsernameHandler] = useInput();
  const [title, onChangeTitleHandler] = useInput();
  const [content, setContent] = useState('');
  const [todo, setTodo] = useState({});
  const { isLoading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩중 ...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  const onChangecontentHandler = (e) => {
    setContent(e.target.value);
    setTodo({
      title: title,
      content: content,
      username: username,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (username === '') {
      return alert('작성자 이름을 입력해주세요');
    } else if (title === '') {
      return alert('제목을 입력해주세요');
    } else if (content === '') {
      return alert('내용을 입력해주세요');
    }
    dispatch(__postTodos(todo));
    navigate('/todolist');
  };

  return (
    <FormFirstdWrap onSubmit={onSubmitHandler}>
      <FormSecondWrap>
        <FormAddTodoWrap>
          <Stlabel>작성자</Stlabel>
          <Input
            maxLength='5'
            fontsize='24px'
            pattern='.{1,5}'
            title='1자 이상 5자 이내를입력하세요'
            type='text'
            name='username'
            value={username}
            onChange={onChangeUsernameHandler}
            placeholder='작성자의 이름을 입력해주세요. (5자 이내)'
            width='100%'
            height='200%'
          />
          <Stlabel>제목</Stlabel>
          <Input
            maxLength='50'
            fontsize='24px'
            pattern='.{3,50}'
            title='3자 이상 50자 이내를입력하세요'
            type='text'
            name='title'
            value={title}
            onChange={onChangeTitleHandler}
            placeholder='제목을 입력해주세요. (50자 이내)'
            width='100%'
            height='200%'
          />
          <Textarea
            cols='50'
            rows='8'
            maxLength='200'
            label='내용'
            title='1자 이상 200자 이내를입력하세요'
            name='content'
            value={content}
            onChange={onChangecontentHandler}
            placeholder='내용을 입력해주세요. (200자 이내)'
            width='100%'
            height='200px'
          />
        </FormAddTodoWrap>
        <Button type='submit' btntype='basic'>
          추가하기
        </Button>
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
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  outline: none;
`;
const Stlabel = styled.label`
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
`;