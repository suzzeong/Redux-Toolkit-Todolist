import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <HomeFirstWrap>
        <HomeSecondWrap>
          <HomeTop>무엇을 할까요?</HomeTop>
          <HomeGotoPageDiv
            onClick={() => {
              navigate("/form");
            }}
          >
            <HomeGotoPageText>할일 기록하기</HomeGotoPageText>
            <ArrowCircleRightIcon color="warning" />
          </HomeGotoPageDiv>
          <HomeGotoPageDiv
            onClick={() => {
              navigate("/todolist");
            }}
          >
            <HomeGotoPageText>TODO LIST</HomeGotoPageText>
            <ArrowCircleRightIcon color="warning" />
          </HomeGotoPageDiv>
        </HomeSecondWrap>
      </HomeFirstWrap>
    </>
  );
};

export default Home;

const HomeFirstWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const HomeSecondWrap = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;

const HomeTop = styled.div`
  font-size: 32px;
`;

const HomeGotoPageDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
  width: 100%;
  height: 120px;
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  cursor: pointer;
`;

const HomeGotoPageText = styled.div`
  font-size: 24px;
`;
