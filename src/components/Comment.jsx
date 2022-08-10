import React,{ useEffect, useState } from "react";
import styled from "styled-components";

import { useDispatch,useSelector } from "react-redux";
import { __postComment,__getComments } from "../redux/modules/todosSlice";

import { useParams } from "react-router-dom";
import CommentView from './CommentView';

import Button from './elements/Button';

const Comment = () => {
    const dispatch = useDispatch();

    // const  {comments}  = useSelector((state) => state.todos);
    const  comments   = useSelector((state) => state.todos.comments);
    console.log("comments=>",comments);

    useEffect(() => {
        dispatch(__getComments());
    }, [dispatch])

    
    const [comment, setComment] = useState({});
    const param = useParams();

    const onChangeHandler = (e) => {
        const {value,name} = e.target;
        setComment({
            userId:param.id,
            [name]:value
        })
    }
    const postComment = (e) => {
        e.preventDefault();
        dispatch(__postComment(comment));
    }
    const [commentShow, setCommentShow] = useState(true);
    return(
        <>
            <CommentWrap commentShow={commentShow}>
                <div onClick={()=>{setCommentShow(!commentShow)}}><span style={{fontSize: "25px"}}>{commentShow?'댓글 올리기':'댓글 내리기'}</span></div>
                <ShowHideBox>
                    <CommentForm onSubmit={postComment}>
                        <CommentInputName type="text" name = 'userName' onChange={onChangeHandler} placeholder="(이름 5자 이내)" />
                        <CommentInputContent type="text" name='userContent' onChange={onChangeHandler} placeholder="댓글을 추가하세요.(100자 이내)" />
                        <Button bgcolor='transparent'>추가하기</Button>
                    </CommentForm>
                    <div>
                        {comments.map((v)=>(
                            <div key={v.id}><CommentView comment={v}/></div>
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
    transform: translate(-50%,90%);
    transform: ${({ commentShow }) => (commentShow ? '' : `translate(-50%, -25%)`)};
    
    height: 400px;
    position: fixed;
    max-width: 1152px;
    width: 100%;
    bottom: 0%;
    left: 50%;
    
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




