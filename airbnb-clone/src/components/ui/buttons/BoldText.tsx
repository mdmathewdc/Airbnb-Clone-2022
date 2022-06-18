import React from "react";
import styled from "styled-components";

type BoldTextProps = {
  text: string;
  margin: string;
};

const BoldText = ({ text, margin }: BoldTextProps) => {
  return <StyledBoldText margin={margin}>{text}</StyledBoldText>;
};

export const StyledBoldText = styled.p<{ margin: string }>`
  font-size: 10px;
  font-weight: 800;
  margin: ${(props) => (props.margin ? `${props.margin}` : null)};
  line-height: 12px;

`;
export default BoldText;
