import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrap>
      <HomeIcon
        onClick={() => {
          navigate("/");
        }}
      />
      <HeaderText>모두의 투두리스트</HeaderText>
    </HeaderWrap>
  );
};
export default Header;

const HeaderText = styled.div`
  font-size: 24px;
`;

const HeaderWrap = styled.header`
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;
`;
