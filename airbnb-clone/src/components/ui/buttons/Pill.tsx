import React from "react";
import styled from "styled-components";
import BoldText from "./BoldText";
import { lightGrey, black } from "../../../constants/ui/colors";

type PillProps = {};

const Pill = (props: PillProps) => {
  const pillData = ["Pool", "Air-conditioning", "Wi-Fi"];
  return (
    <StyledPill>
      <BoldText text="AMENITIES" margin={"0 0 0 16px"} />
      {pillData.map((pill, index) => (
        <button>{pill}</button>
      ))}
    </StyledPill>
  );
};

export const StyledPill = styled.div`
  margin-bottom: 16px;

  button {
    font-size: 14px;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid ${lightGrey};
    padding: 8px 16px;
    border-radius: 20px;
    margin-top: 8px;
    line-height: 18px;
    margin-right: 4px;
    transition: border 0.15s ease-in-out;

    &:hover {
      border: 1px solid ${black};
    }
  }
`;

export default Pill;