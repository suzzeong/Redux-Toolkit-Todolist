import React from "react";
import styled from "styled-components";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';

const Comment = () => {
    return(
        <>
            <CommentWrap>
                <p>눌러서 댓글내리기</p>
                <CommentForm>
                    <CommentInputName type="text" placeholder="(이름 5자 이내)" />
                    <CommentInputContent type="text" placeholder="댓글을 추가하세요.(100자 이내)" />
                    <CommentFormButton>추가하기</CommentFormButton>
                </CommentForm>
                <div>
                    <CommentBox>
                        <CommentContent>
                            <CommentTop>이름1</CommentTop>
                            <CommentBottom>댓글1</CommentBottom>
                        </CommentContent>
                        <CommentButton>
                            <EditIcon className='button_margin' sx={{ backgroundColor: red[500], color:'white',margin:'10px' }}/>
                            <DeleteIcon className='button_margin' sx={{ backgroundColor: red[500], color:'white',margin:'10px' }}/>
                        </CommentButton>
                    </CommentBox>
                    <CommentBox>
                        <CommentContent>
                            <CommentTop>이름2</CommentTop>
                            <CommentBottom>댓글2</CommentBottom>
                        </CommentContent>
                        <CommentButton>
                            <EditIcon className='button_margin' sx={{ backgroundColor: red[500], color:'white',margin:'10px' }}/>
                            <DeleteIcon className='button_margin' sx={{ backgroundColor: red[500], color:'white',margin:'10px' }}/>
                        </CommentButton>
                    </CommentBox>
                </div>
            </CommentWrap>
        </>
    )
}

export default Comment;


const CommentWrap = styled.div`
    border-top:1px solid #eee;
`;
const CommentForm = styled.div`
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

