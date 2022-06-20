import React, { useRef } from "react";
import styled, { css } from "styled-components";
import BoldText from "../buttons/BoldText";
import { lightGrey } from "../../../constants/ui/colors";
import useInputFocus from "../../hooks/useInputFocus";

type Props = {};

const CheckIn = (props: Props) => {
  const checkinRef = useRef<HTMLInputElement>(null);
  const checkoutRef = useRef<HTMLInputElement>(null);

  const checkinFocus = useInputFocus(checkinRef);
  const checkoutFocus = useInputFocus(checkoutRef);

  return (
    <DateWrapper checkinFocus={checkinFocus} checkoutFocus={checkoutFocus}>
      <StyledCheck className="check-in" focused={checkinFocus}>
        <BoldText text="CHECK IN" margin={"0"} />
        <input ref={checkinRef} type="text" placeholder="Add Date" />
      </StyledCheck>
      <span> </span>
      <StyledCheck className="check-out" focused={checkoutFocus}>
        <BoldText text="CHECK OUT" margin={"0"} />
        <input ref={checkoutRef} type="text" placeholder="Add Date" />
      </StyledCheck>
    </DateWrapper>
  );
};

const DateWrapper = styled.div<{
  checkinFocus: boolean;
  checkoutFocus: boolean;
}>`
  display: flex;
  margin-top: 12px;

  .check-in {
    border-right: none;
    border-top-right-radius: ${(props) => (props.checkinFocus ? "8px" : "0")};
    border-bottom-right-radius: ${(props) =>
      props.checkinFocus ? "8px" : "0"};
  }

  .check-out {
    border-left: none;
    border-top-left-radius: ${(props) => (props.checkoutFocus ? "8px" : "0")};
    border-bottom-left-radius: ${(props) =>
      props.checkoutFocus ? "8px" : "0"};
  }

  span {
    margin: 8px 0;
    width: 1px;
    background: ${(props) =>
      props.checkinFocus || props.checkoutFocus ? "none" : lightGrey};
    position: relative;
  }
`;

export const StyledCheck = styled.div<{ focused: boolean }>`
  position: relative;
  width: 50%;
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
