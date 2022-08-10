import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __getTodos, __postTodos } from "../redux/modules/todosSlice";
import Input from "./elements/Input";
import Textarea from "./elements/Textarea";
import { useNavigate } from "react-router-dom";
import Button from "./elements/Button";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    username: "",
    title: "",
    content: "",
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
    if (username == "") {
      return alert("작성자 이름을 입력해주세요");
    } else if (title === "") {
      return alert("제목을 입력해주세요");
    } else if (content == "") {
      return alert("내용을 입력해주세요");
    }
    dispatch(__postTodos(todo));
    navigate("/todolist");
  };

  return (
    <FormFirstdWrap onSubmit={onSubmitHandler}>
      <FormSecondWrap>
        <FormAddTodoWrap>
          <Input
            maxLength='10'
            fontsize='24px'
            label='작성자'
            pattern='.{1,5}'
            title='1자 이상 5자 이내를입력하세요'
            type='text'
            name='username'
            value={username}
            onChange={onChangeHandler}
            placeholder='작성자의 이름을 입력해주세요. (5자 이내)'
            width='100%'
            height='200px'
          />
          <Input
            maxLength='50'
            fontsize='24px'
            label='제목'
            pattern='.{3,50}'
            title='3자 이상 50자 이내를입력하세요'
            type='text'
            name='title'
            value={title}
            onChange={onChangeHandler}
            placeholder='제목을 입력해주세요. (50자 이내)'
            width='100%'
            height='200px'
          />
          <Textarea
            maxLength='200'
            label='내용'
            title='1자 이상 200자 이내를입력하세요'
            name='content'
            value={content}
            onChange={onChangeHandler}
            placeholder='내용을 입력해주세요. (200자 이내)'
            width='100%'
            height='200px'
          />
        </FormAddTodoWrap>
        <Button
          type='submit'
          bordercolor='rgb(221,221,221)'
          bgcolor='white'
          width='100%'
          height='50px'
        >
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
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  outline: none;
`;
