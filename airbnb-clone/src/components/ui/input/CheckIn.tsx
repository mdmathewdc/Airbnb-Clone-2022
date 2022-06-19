import React, { useRef } from "react";
import styled, { css } from "styled-components";
import BoldText from "../buttons/BoldText";
import { lightGrey } from "../../../constants/ui/colors";
import useInputFocus from "../../hooks/useInputFocus";

type Props = {};

const CheckIn = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const inputFocused = useInputFocus(inputRef);

  return (
    <StyledCheckIn focused={inputFocused}>
      <BoldText text="CHECK IN" margin={"0"} />
      <input ref={inputRef} type="text" placeholder="Anywhere" />
    </StyledCheckIn>
  );
};

export const StyledCheckIn = styled.div<{ focused: boolean }>`
  position: relative;
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

  &::after {
    ${(props) =>
      props.focused &&
      css`
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
      `}
`;

export default CheckIn;
