import styled from "styled-components";

const Button = ({ type, color, bordercolor, onClick, children, width, height, bgcolor }) => {
  return (
    <StButton color={color} type={type} bordercolor={bordercolor} onClick={onClick} width={width} height={height} bgcolor={bgcolor}>
      {children}
    </StButton>
  );
};

export default Button;

const StButton = styled.button`
  color: ${({ color }) => `${color}`};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ bordercolor }) => `${bordercolor}`};
  background-color: ${({ bgcolor }) => `${bgcolor}`};
  border-radius: 8px;
  cursor: pointer;
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
`;
