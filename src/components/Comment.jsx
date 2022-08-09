import React from "react";
import styled from "styled-components";
import Button from "./elements/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Comment = () => {
  return (
    <>
      <CommentWrap>
        <p>눌러서 댓글내리기</p>
        <CommentForm>
          <CommentInputName type="text" placeholder="(이름 5자 이내)" />
          <CommentInputContent type="text" placeholder="댓글을 추가하세요.(100자 이내)" />
          <Button type="submit" bordercolor="rgb(221,221,221)" bgcolor="white" width="200px" height="50px">
            추가하기
          </Button>
        </CommentForm>
        <div>
          <CommentBox>
            <CommentContent>
              <CommentTop>이름1</CommentTop>
              <CommentBottom>댓글1</CommentBottom>
            </CommentContent>
            <CommentButton>
              <Button type="submit" color="white" bordercolor="rgb(255, 255, 255)" bgcolor="rgb(254, 83, 31)" width="30px" height="30px">
                <EditIcon />
              </Button>
              <Button type="submit" color="white" bordercolor="rgb(255, 255, 255)" bgcolor="rgb(254, 83, 31)" width="30px" height="30px">
                <DeleteIcon />
              </Button>
            </CommentButton>
          </CommentBox>
          <CommentBox>
            <CommentContent>
              <CommentTop>이름2</CommentTop>
              <CommentBottom>댓글2</CommentBottom>
            </CommentContent>
            <CommentButton>
              <Button type="submit" color="white" bordercolor="rgb(255, 255, 255)" bgcolor="rgb(254, 83, 31)" width="30px" height="30px">
                <EditIcon />
              </Button>
              <Button type="submit" color="white" bordercolor="rgb(255, 255, 255)" bgcolor="rgb(254, 83, 31)" width="30px" height="30px">
                <DeleteIcon />
              </Button>
            </CommentButton>
          </CommentBox>
        </div>
      </CommentWrap>
    </>
  );
};

export default Comment;

const CommentWrap = styled.div`
  border-top: 1px solid #eee;
`;
const CommentForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CommentInputName = styled.input`
  width: 120px;
  margin: 0 15px;
`;
const CommentInputContent = styled.input`
  width: 1600px;
`;

const CommentBox = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #eee;
`;
const CommentContent = styled.div`
  width: 90%;
`;

const CommentTop = styled.div`
  font-size: 10px;
`;
const CommentBottom = styled.div`
  font-size: 15px;
`;

const CommentButton = styled.div`
  width: 10%;
  gap: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
