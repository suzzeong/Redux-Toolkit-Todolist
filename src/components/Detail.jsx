import React from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Detail = () => {

    const navigate = useNavigate();

    return (
        <DetailTotal>
            <DetailContainer>
                <DetailTop>
                    <TodoId>id : ({ })</TodoId>
                    <StP
                        onClick={() => {
                            navigate(-1);
                        }}
                    >이전으로</StP>
                </DetailTop>
                <Title>제목 들어갈 자리</Title>
                <DetailBottom>
                    <Content>내용 들어갈 자리</Content>
                    <button>수정</button>
                    {/* 수정버튼 엘리먼트로 바꾸기 */}
                </DetailBottom>
            </DetailContainer>
            <DetailComment
            onClick={() => {
                navigate("/Comment");
              }}
            >눌러서 댓글보기</DetailComment>
        </DetailTotal>


    )
}

export default Detail;

const DetailTotal = styled.div``

const DetailContainer = styled.div`
    /* height: calc(100vh - 45px); */
    background-color: rgb(255, 255, 255);
    padding: 24px;
`

const DetailTop = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
flex-direction: row;
margin-bottom: 32px;
`
const TodoId = styled.div`
font-size: 24px;
`
const StP = styled.div`
font-size: 24px;
text-decoration: underline;
color: teal;
`
const Title = styled.div`
font-size: 32px;
font-weight: 700;
`
const Content = styled.div`
font-size: 18px;
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