import styled from 'styled-components';

const Input = (props) => {
  const { fontsize, label, id, value, name, onChange, placeholder } = props;
  return (
    <InputWrap>
      <Stlabel fontsize={fontsize}>{label}</Stlabel>
      <StInput
        id={id}
        type='text'
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputWrap>
  );
};

export default Input;

const InputWrap = styled.div``;

// const InputWrap = styled.div`
//   color: green;
//   border: 1px solid blue;
//   display: flex;
//   flex-direction: column;
//   width: 100px;
//   height: 100px;
// `;

const Stlabel = styled.label`
  display: block;
  font-size: ${(props) => props.fontsize};
  font-weight: bold;
  margin-bottom: 10px;
`;

const StInput = styled.input`
  border: 1px solid #000;
  margin-bottom: 40px;
  width: 400px;
  height: auto;
  padding: 5px;
  border-radius: 5px;
  :hover {
    border: 1px solid #457be1;
  }
`;
