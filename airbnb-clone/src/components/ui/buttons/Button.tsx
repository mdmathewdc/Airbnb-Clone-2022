import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../../images/svg/magnifying-glass.svg";

type ButtonProps = {
  bgColor: string;
  text: string;
  textColor: string;
  padding: string;
  fontSize: string;
  width?: string;
  fontWeight?: string;
  searchIcon?: boolean;
};

const Button = ({
  bgColor,
  text,
  textColor,
  padding,
  fontSize,
  width,
  fontWeight,
  searchIcon,
}: ButtonProps) => {
  return (
    <StyledButton
      bgColor={bgColor}
      textColor={textColor}
      padding={padding}
      fontSize={fontSize}
      width={width}
      fontWeight={fontWeight}
    >
      <div className="icon-wrapper">
        {searchIcon && <SearchIcon />}
        <label>{text}</label>
      </div>
    </StyledButton>
  );
};

export const StyledButton = styled.button<{
  textColor: string;
  bgColor: string;
  padding: string;
  fontSize: string;
  width?: string;
  fontWeight?: string;
}>`
  cursor: pointer;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  padding: ${(props) => props.padding};
  border-radius: 8px;
  border: none;
  width: ${(props) => props.width};

  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    gap: 8px;
  }

  label {
    font-size: ${(props) => props.fontSize};
    line-height: 20px;
    font-weight: ${(props) => props.fontWeight};
  }
`;
export default Button;
