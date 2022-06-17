import React from "react";
import styled from "styled-components";

type ButtonProps = {
  bgColor: string;
  text: string;
  textColor: string;
  padding: string;
  fontSize: string;
  width?: string;
};

const Button = ({
  bgColor,
  text,
  textColor,
  padding,
  fontSize,
  width,
}: ButtonProps) => {
  return (
    <StyledButton
      bgColor={bgColor}
      textColor={textColor}
      padding={padding}
      fontSize={fontSize}
      width={width}
    >
      <label>{text}</label>
    </StyledButton>
  );
};

export const StyledButton = styled.button<{
  textColor: string;
  bgColor: string;
  padding: string;
  fontSize: string;
  width?: string;
}>`
  background: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  padding: ${(props) => props.padding};
  border-radius: 8px;
  border: none;
  width: ${(props) => props.width};

  label {
    font-size: ${(props) => props.fontSize};
    line-height: 20px;
  }
`;
export default Button;
