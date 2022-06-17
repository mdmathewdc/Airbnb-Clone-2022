import React from "react";
import styled from "styled-components";

type ButtonProps = {
  bgColor: string;
  text: string;
  textColor: string;
};

const Button = ({ bgColor, text, textColor }: ButtonProps) => {
  return (
    <StyledButton bgColor={bgColor} textColor={textColor}>
      <label>{text}</label>
    </StyledButton>
  );
};

export const StyledButton = styled.button<{
  textColor: string;
  bgColor: string;
}>`
  background: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  padding: 16px 24px;
  border-radius: 8px;
  border: none;
  width: 100%;

  label {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }
`;
export default Button;
