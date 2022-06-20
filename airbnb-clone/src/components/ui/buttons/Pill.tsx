import React, { useState } from "react";
import styled from "styled-components";
import BoldText from "./BoldText";
import { lightGrey, black, pillBackground } from "../../../constants/ui/colors";

type PillProps = {};

const Pill = (props: PillProps) => {
  const pillData = ["Pool", "Air-conditioning", "Wi-Fi"];

  const [selected, setSelected] = useState<any>([]);

  const toggleState = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.currentTarget.classList.toggle("selected");
    console.log(event.currentTarget.value);
  };
  return (
    <StyledPill>
      <BoldText text="AMENITIES" margin={"0 0 0 16px"} />
      {pillData.map((pill, index) => {
        // setSelected([...selected, index]);
        return (
          <button key={index} onClick={toggleState} value={pill}>
            {pill}
          </button>
        );
      })}
    </StyledPill>
  );
};

export const StyledPill = styled.div`
  margin-bottom: 16px;

  button {
    position: relative;
    font-size: 14px;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid ${lightGrey};
    padding: 10px 16px;
    border-radius: 20px;
    margin-top: 8px;
    line-height: 18px;
    margin-right: 4px;
    transition-property: -ms-transform, -webkit-transform, transform,
      background-color, border-color, border;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
    outline: none;

    &.selected {
      background-color: ${pillBackground};

      &:hover {
        border: 1px solid ${black};
      }

      &::after {
        content: "";
        width: calc(100% - 2px);
        height: calc(100% - 2px);
        background-color: transparent;
        position: absolute;
        top: -1px;
        left: -1px;
        border-color: black;
        border-style: solid;
        border-width: 2px;
        border-radius: inherit;
      }
    }

    &:active {
      transform: scale(0.95);
    }

    &:hover {
      border: 1px solid ${black};
    }

    &.active {
      border: 2px solid ${black};
    }
  }
`;

export default Pill;
