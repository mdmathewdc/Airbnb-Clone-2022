import React from "react";
import styled from "styled-components";

type ButtonProps = {
  color: string;
  text: string;
  textColor: string;
};

const Button = ({ color, text, textColor }: ButtonProps) => {
  return (
    <StyledButton color={color} textColor={textColor}>
      {text}
    </StyledButton>
  );
};

export const StyledButton = styled.button`
  background: ${(props) => props.color};
  color: ${(props) => props.textColor};
`;
export default Button;
