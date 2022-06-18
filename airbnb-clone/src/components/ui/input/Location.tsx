import React from "react";
import styled from "styled-components";
import BoldText from "../buttons/BoldText";
import { lightGrey } from "../../../constants/ui/colors";

type Props = {};

const Location = (props: Props) => {
  return (
    <StyledLocation>
      <BoldText text="LOCATION" margin={"0"} />
      <input type="text" placeholder="Anywhere" />
    </StyledLocation>
  );
};

export const StyledLocation = styled.div`
  padding: 10px 16px;
  border: 1px solid ${lightGrey};
  border-radius: 8px;

  input {
    border: none;
    padding: 4px 0 0 0;

    &::placeholder {
      font-size: 16px;
    }
    &:focus {
      outline: none;
    }
  }
`;

export default Location;
