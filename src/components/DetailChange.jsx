import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { __getTodos, __putTodos } from "../redux/modules/todosSlice";
import styled from "styled-components";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const DetailChange = ({id}) => {

    const[inputValue, setInputValue] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, error, todos } = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(__putTodos())
    }, [dispatch])

    if (isLoading) {
        return <div>로딩중</div>
    }
    if (error) {
        return <div>{error.message}</div>
    }

    const onUpdate = (e) => {
        e.preventDefault();
        console.log(id)
        if(inputValue){
            dispatch(__putTodos(id));
            setInputValue("")
        }
    }

    return (

        <DetailTotal>
            <DetailContainer>
                <DetailTop>
                    <div>
                        {todos.map((todo) => (
                            <div key={todo.id}>{todo.title}</div>
                        ))}
                    </div>
                </DetailTop>
                <StTextArea >
                    <div>
                        {todos.map((todo) => (
                            <textarea 
                            key={todo.id}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            rows="10"
                            maxLength="200"
                            style = {{border : "1px solid rgb(238,238,238)", padding : "12px", fontSize:"14px", width:"100%"}}
                            >{todo.content}</textarea>
                        ))}
                    </div>
                </StTextArea>
                <DetailBottom>
                    <button onClick={() => {
                        navigate(-1)
                    }}>저장</button>
                    {/* 수정버튼 엘리먼트로 바꾸기 */}
                </DetailBottom>
            </DetailContainer>
            <DetailComment
                onClick={() => {

                }}
            >눌러서 댓글보기</DetailComment>
        </DetailTotal>
    )
}
export default DetailChange;

const DetailTotal = styled.div``

const DetailContainer = styled.div`
    /* height: calc(100vh - 45px); */
    background-color: rgb(255, 255, 255);
    padding: 24px;
`

const DetailTop = styled.h1`
display: flex;
justify-content: space-between;
align-items:center;
flex-direction: row;
margin-bottom: 32px;
`

const StTextArea = styled.div`

`
const DetailBottom = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
margin-top: 50px;
min-height: 550px;
`

const DetailComment = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
flex-direction: row;
height: 50px;
padding: 0px 12px;
border-top: 1px solid rgb(238,238,238);
`