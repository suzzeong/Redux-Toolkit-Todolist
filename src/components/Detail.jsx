import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getTodos, __putTodos } from "../redux/modules/todosSlice";
import styled from "styled-components";
import Button from "./elements/Button";
import Comment from './Comment';

const Detail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, error, todos } = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(__getTodos());
    }, [dispatch]);

    if (isLoading) {
        return <div>로딩중</div>;
    }
    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <DetailTotal>
            <DetailContainer>
                <DetailTop>
                    <TodoId>
                        ID : (
                        {todos.map((todo) => (
                            <div key={todo.id}>{todo.id}</div>
                        ))}
                        )
                    </TodoId>
                    <StP
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        이전으로
                    </StP>
                </DetailTop>
                <Title>
                    <div>
                        {todos.map((todo) => (
                            <div key={todo.id}>{todo.title}</div>
                        ))}
                    </div>
                </Title>
                <DetailBottom>
                    <Content>
                        <div>
                            {todos.map((todo) => (
                                <div key={todo.id}>{todo.content}</div>
                            ))}
                        </div>
                    </Content>
                    <Button
                        type="submit"
                        bordercolor="rgb(221,221,221)"
                        bgcolor="white"
                        width="100%"
                        height="50px"
                        onClick={() => {
                            navigate("/detailchange");
                        }}
                    >
                        {todos.isDone === true ? "저장" : "수정"}
                    </Button>
                    {/* 수정버튼 엘리먼트로 바꾸기 */}
                </DetailBottom>
            </DetailContainer>
            {/* <button onClick={() => { navigate(`/comment`) }}>임시 페이지 이동</button> */}
            <Comment userId={todos[0].id}/>
        </DetailTotal>


    )
}

export default Detail;

const DetailTotal = styled.div``;

const DetailContainer = styled.div`
  /* height: calc(100vh - 45px); */
  background-color: rgb(255, 255, 255);
  padding: 24px;
`;

const DetailTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 32px;
`;
const TodoId = styled.div`
  font-size: 24px;
  display: flex;
`;
const StP = styled.div`
  font-size: 24px;
  text-decoration: underline;
  color: teal;
`;
const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
`;
const Content = styled.div`
  font-size: 18px;
`;

const DetailBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 50px;
  min-height: 550px;
`;

const DetailComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 50px;
  padding: 0px 12px;
  border-top: 1px solid rgb(238, 238, 238);
`;
