import React from "react";
import styled from "styled-components";

type BoldTextProps = {
  text: string;
};

const BoldText = ({ text }: BoldTextProps) => {
  return <StyledBoldText>{text}</StyledBoldText>;
};

export const StyledBoldText = styled.p`
  font-size: 10px;
  font-weight: 800;
`;
export default BoldText;
