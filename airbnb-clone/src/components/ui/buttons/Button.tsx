import React from "react";
import styled from "styled-components";

type ButtonProps = {
  color: string;
  text: string;
};

const Button = ({ color, text }: ButtonProps) => {
  return <button>{text}</button>;
};

export const StyledButton = styled.button``;
export default Button;
