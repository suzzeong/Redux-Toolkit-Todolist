import React,{ useEffect, useState } from "react";
import styled from "styled-components";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';

import { useDispatch,useSelector } from "react-redux";
import { __postComment,__getComments,__deleteComment } from "../redux/modules/todosSlice";

import { useParams } from "react-router-dom";

const Comment = () => {
    const dispatch = useDispatch();
    // const  {comments}  = useSelector((state) => state.todos);
    const  comments   = useSelector((state) => state.todos.comments);
    console.log("comments=>",comments);

    useEffect(() => {
        dispatch(__getComments());
        }, [dispatch])

        const param = useParams();
		// 훅을 사용해서 생성한 param을 콘솔에 찍어봅시다.

        
    const [comment, setComment] = useState({});

    const onChangeHandler = (e) => {
        const {value,name} = e.target;
        setComment({
            usreId:param.id,
            [name]:value
        })
    }
    const postComment = (e) => {
        e.preventDefault();
        dispatch(__postComment(comment));
    }

    const deleteBtn = (id) => {
        console.log(id);
        dispatch(__deleteComment(id));
    }

    return(
        <>
            <CommentWrap>
                {/* <p><span onClick={showComment}>눌러서 댓글보기</span></p> */}
                <ShowHideBox>
                    <CommentForm onSubmit={postComment}>
                        <CommentInputName type="text" name = 'userName' onChange={onChangeHandler} placeholder="(이름 5자 이내)" />
                        <CommentInputContent type="text" name='userContent' onChange={onChangeHandler} placeholder="댓글을 추가하세요.(100자 이내)" />
                        <CommentFormButton>추가하기</CommentFormButton>
                    </CommentForm>
                    <div>
                        {comments.map((v)=>(
                            <CommentBox key={v.id}>
                                <CommentContent>
                                    <CommentTop>{v.userName}</CommentTop>
                                    <CommentBottom>{v.userContent}</CommentBottom>
                                </CommentContent>
                                <CommentButton>
                                    <EditIcon className='button_margin' sx={{ backgroundColor: red[500], color:'white',margin:'10px' }}/>
                                    <DeleteIcon onClick={()=>{/* deleteBtn(v.id) */}} className='button_margin' sx={{ backgroundColor: red[500], color:'white',margin:'10px' }}/>
                                </CommentButton>
                            </CommentBox>
                        ))}
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
    font-size:10px;
`;
const CommentBottom = styled.div`
    font-size:15px;
`;

const CommentButton = styled.div`
    width:10%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

