import React from 'react';
import styled from 'styled-components';

const Textarea = (props) => {
  const { label, id, name, value, onChange, placeholder } = props;
  return (
    <TextareaWrap>
      <Stlabel>{label}</Stlabel>
      <StTextarea
        id={id}
        type='text'
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </TextareaWrap>
  );
};

export default Textarea;

const TextareaWrap = styled.div``;

const Stlabel = styled.label`
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StTextarea = styled.input`
  border: 1px solid #000;
  margin-bottom: 40px;
  width: 400px;
  height: 200px;
  padding: 5px;
  border-radius: 5px;
  :hover {
    border: 1px solid #457be1;
  }
`;