import React from "react";
import styled from "styled-components";
import BoldText from "../buttons/BoldText";
import { lightGrey } from "../../../constants/ui/colors";

type Props = {};

const Location = (props: Props) => {
  return (
    <StyledLocation>
      <BoldText text="LOCATION" margin={"0"} />
      <input type="text" />
    </StyledLocation>
  );
};

export const StyledLocation = styled.div`
  padding: 8px 12px;
  border: 1px solid ${lightGrey};
  border-radius: 8px;

  input {
    border: none;

    &:focus {
      outline: none;
    }
  }
`;

export default Location;
