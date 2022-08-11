import styled, { css } from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Button = ({ btntype, type, onClick, children, uibutton }) => {
  return (
    <StButton type={type} onClick={onClick} btntype={btntype}>
      {children}
      {uibutton === "delete" ? <DeleteIcon /> : null}
      {uibutton === "edit" ? <EditIcon /> : null}
    </StButton>
  );
};

export default Button;

const StButton = styled.button`
  border-radius: 8px;
  cursor: pointer;
  ${(props) => {
    return (
      props.btntype === 'basic' &&
      css`
        border: 1px solid rgb(221, 221, 221);
        background-color: white;
        :hover{
          border: 1px solid rgb(254, 83, 31);
        }
        width: 100%;
        height: 50px;
      `
    );
  }}
  ${(props) => {
    return (
      props.btntype === 'basic-small' &&
      css`
        border: 1px solid rgb(221, 221, 221);
        background-color: white;
        :hover {
          background-color: rgb(254, 83, 31);
          color: white;
          border: none;
        }
        width: 120px;
        height: 46px;
      `
    );
  }}
  ${(props) => {
    return (
      props.btntype === 'ui-comment' &&
      css`
        border: 1px solid white;
        background-color: rgb(254, 83, 31);
        color: white;
        width: 43px;
        height: 43px;
      `
    );
  }}
    ${(props) => {
    return (
      props.btntype === 'ui-list' &&
      css`
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgb(221, 221, 221);
        background-color: white;
        color: rgb(254, 83, 31);
        width: 30px;
        height: 30px;
      `
    );
  }}
`;