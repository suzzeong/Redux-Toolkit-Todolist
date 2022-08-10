import React from "react";
import styled from "styled-components";

const Textarea = (props) => {
  const {
    maxLength,
    title,
    label,
    id,
    name,
    value,
    onChange,
    placeholder,
    width,
    height,
  } = props;

  return (
    <TextareaWrap>
      <Stlabel>{label}</Stlabel>
      <StTextarea
        maxLength={maxLength}
        title={title}
        id={id}
        type='text'
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        width={width}
        height={height}
      />
    </TextareaWrap>
  );
};

export default Textarea;

const TextareaWrap = styled.div`
  width: 100%;
`;

const Stlabel = styled.label`
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StTextarea = styled.textarea`
  // 줄바꿈....(해결못함)
  overflow-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  resize: none;
  box-sizing: border-box;
  border: 1px solid rgb(238, 238, 238);
  margin-bottom: 40px;
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
  padding: 12px;
  border-radius: 5px;
  /* resize: none; */
  font-size: 14px;
  :hover {
    border: 1px solid #457be1;
  }
`;
