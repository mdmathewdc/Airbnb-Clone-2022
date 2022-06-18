import React from "react";
import styled from "styled-components";
import BoldText from "./BoldText";

type PillProps = {
  margin?: string;
};

const Pill = ({ margin }: PillProps) => {
  return (
    <StyledPill margin={margin}>
      <BoldText text="AMENITIES" />
    </StyledPill>
  );
};

export const StyledPill = styled.div<{ margin?: string }>`
  font-size: 10px;
  font-weight: 800;
  line-height: 12px;
  margin: ${(props) => (props.margin ? `${props.margin}` : null)};
`;

export default Pill;
