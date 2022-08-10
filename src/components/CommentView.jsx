import React, {useState} from "react";
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { __deleteComment,__updateComment } from "../redux/modules/todosSlice";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';

import Button from './elements/Button';
import Input from "./elements/Input";

const CommentView = ({comment}) => {
    const dispatch = useDispatch();
    
    let updateCommentInput = (id) => {
        if(editComment){
            setEditComment(false);
        }else{
            setEditComment(true);
        }
        
    }

    const deleteBtn = (id) => {
        dispatch(__deleteComment(id));
    }

    const [editComment, setEditComment] = useState(false);

    const [updateComment, setUpdateComment] = useState({
        id:comment.id,
        content:''
    });

    const changeEvent = (e) => {
        const {name,value} = e.target;
        setUpdateComment({
            userId:comment.id,
            [name]:value
        })
        
    }
    const updateCommentAction = () => {
        dispatch(__updateComment(updateComment));
        updateCommentInput(comment.id);
    }
    return (
        <>
        <div>
          <CommentBox>
            <CommentContent>
              {!editComment ? (
                <div>
                  <CommentTop className='comment_view'>
                    {comment.userName}
                  </CommentTop>
                  <CommentBottom className='comment_view'>
                    {comment.userContent}
                  </CommentBottom>
                </div>
              ) : (
                <Input onChange={changeEvent} name='userContent' type='text' />
              )}
            </CommentContent>
            <CommentButton>
              {!editComment ? (
                <div>
                  <EditIcon
                    onClick={() => {
                      updateCommentInput(comment.id);
                    }}
                    className='button_margin'
                    sx={{
                      backgroundColor: red[500],
                      color: 'white',
                      margin: '10px',
                      cursor: 'pointer',
                    }}
                  />
                  <DeleteIcon
                    onClick={() => {
                      deleteBtn(comment.id);
                    }}
                    className='button_margin'
                    sx={{
                      backgroundColor: red[500],
                      color: 'white',
                      margin: '10px',
                      cursor: 'pointer',
                    }}
                  />
                </div>
              ) : (
                <div>
                  <Button
                    onClick={() => {
                      updateCommentInput(comment.id);
                    }}
                  >
                    취소
                  </Button>
                  <Button
                    onClick={() => {
                      updateCommentAction(comment.id);
                    }}
                  >
                    저장
                  </Button>
                </div>
              )}
            </CommentButton>
          </CommentBox>
        </div>
      </>
    );
}

export default CommentView;

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
