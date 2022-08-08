import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <FormFirstdWrap>
      <FormSecondWrap>
        <FormAddTodoWrap>
          <FormTextDiv>
            <FormTextFontDiv>작성자</FormTextFontDiv>
          </FormTextDiv>
          {/* elements/Input 넣을 자리 */}
          <input type="text" placeholder="작성자의 이름을 입력해주세요. (5자 이내)" />
          <FormTextDiv>
            <FormTextFontDiv>제목</FormTextFontDiv>
          </FormTextDiv>
          {/* elements/Input 넣을 자리 */}
          <input type="text" placeholder="제목을 입력해주세요. (50자 이내)" />
          <FormTextDiv>
            <FormTextFontDiv>내용</FormTextFontDiv>
          </FormTextDiv>
          {/* elements/Textarea 넣을 자리 */}
          <textarea placeholder="내용을 입력해주세요. (200자 이내)" />
        </FormAddTodoWrap>
        {/* elements/Button 넣을 자리, 임시로 CSS 넣어두었습니다.*/}
        <Button>추가하기</Button>
      </FormSecondWrap>
    </FormFirstdWrap>
  );
};

export default Form;

const FormFirstdWrap = styled.form`
  height: 100%;
`;

const FormSecondWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
`;

const FormAddTodoWrap = styled.div`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  outline: none;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(255, 255, 255);
  height: 46px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
`;

const FormTextDiv = styled.div`
  width: 100%;
  margin: 10px 0px;
`;

const FormTextFontDiv = styled.div`
  font-size: 24px;
`;
