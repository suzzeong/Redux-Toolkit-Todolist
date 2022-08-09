import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./elements/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from '@mui/material/colors';
import { useDispatch, useSelector } from "react-redux";
import { __postComment, __getComments } from "../redux/modules/todosSlice";


const Comment = ({ userId }) => {
  const dispatch = useDispatch();
  // const  comments  = useSelector((state) => state.todos);
  const { comments } = useSelector((state) => state.todos);
  console.log("comments=>", comments);

  // useEffect(() => {
  //   dispatch(__getComments());
  //   console.log("ABCDEFGHIJKLMN");
  // }, [dispatch])

  // comments.map((v)=>{console.log("MAP=>",v)})


  const showComment = () => {

  }
  const [comment, setComment] = useState({
    userId: userId,
  });
  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setComment({
      ...comment,
      [name]: value
    })
  }

  const postComment = (e) => {
    e.preventDefault();
    console.log(e);
    console.log('comment->', comment);
    dispatch(__postComment(comment));
  }
  return (
    <>
      <CommentWrap>
        <p><span onClick={showComment}>눌러서 댓글보기</span></p>
        <ShowHideBox>
          <CommentForm onSubmit={postComment}>
            <CommentInputName type="text" name='userName' onChange={onChangeHandler} placeholder="(이름 5자 이내)" />
            <CommentInputContent type="text" name='userContent' onChange={onChangeHandler} placeholder="댓글을 추가하세요.(100자 이내)" />
            <CommentFormButton>추가하기</CommentFormButton>
          </CommentForm>
          <div>
            {/* {comments.map((v)=>{ */}
            <CommentBox>
              <CommentContent>
                {/* <CommentTop>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!{v.userName}</CommentTop>
                              <CommentBottom>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@{v.userContent}</CommentBottom> */}
              </CommentContent>
              <CommentButton>
                <EditIcon className='button_margin' sx={{ backgroundColor: red[500], color: 'white', margin: '10px' }} />
                <DeleteIcon className='button_margin' sx={{ backgroundColor: red[500], color: 'white', margin: '10px' }} />
              </CommentButton>
            </CommentBox>
            {/* })} */}
          </div>
        </ShowHideBox>
      </CommentWrap>
    </>
  )
}

export default Comment;

const CommentWrap = styled.div`
  border-top:1px solid #eee;
    position:relative;
    /* bottom:0;
    left:0; */
`;
const ShowHideBox = styled.div`
    /* display:none; */
`;
const CommentForm = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
`;

const CommentInputName = styled.input`
    width:120px;
    margin:0 15px;
`;
const CommentInputContent = styled.input`
    width:1600px;
`;

const CommentFormButton = styled.button`
    margin:0 15px;
`;


const CommentBox = styled.div`
    width:100%;
    display:flex;
    border-bottom:1px solid #eee;
`;
const CommentContent = styled.div`
width:90%;
`;

const CommentTop = styled.div`
  font-size: 10px;
`;
const CommentBottom = styled.div`
  font-size: 15px;
`;

const CommentButton = styled.div`
 width:10%;
    display:flex;
    justify-content:center;
    align-items:center;
`;
