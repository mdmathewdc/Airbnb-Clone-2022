import React, { useRef } from "react";
import styled, { css } from "styled-components";
import BoldText from "../buttons/BoldText";
import { lightGrey } from "../../../constants/ui/colors";
import useInputFocus from "../../hooks/useInputFocus";

type Props = {};

const Adults = (props: Props) => {
  const adultsRef = useRef<HTMLSelectElement>(null);
  const childrenRef = useRef<HTMLSelectElement>(null);

  const adultsFocus = useInputFocus(adultsRef);
  const childrenFocus = useInputFocus(childrenRef);

  return (
    <AdultsWrapper adultsFocus={adultsFocus} childrenFocus={childrenFocus}>
      <StyledInputWrapper className="adults" focused={adultsFocus}>
        <BoldText text="ADULTS" margin={"0"} />
        <select ref={adultsRef}>
        <optgroup>

          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          </optgroup>

        </select>
      </StyledInputWrapper>
      <span> </span>
      <StyledInputWrapper className="children" focused={childrenFocus}>
        <BoldText text="CHILDREN" margin={"0"} />
        <select ref={childrenRef}>
        <optgroup>

          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          </optgroup>

        </select>
      </StyledInputWrapper>
    </AdultsWrapper>
  );
};

const AdultsWrapper = styled.div<{
  adultsFocus: boolean;
  childrenFocus: boolean;
}>`
  display: flex;
  margin: 12px 0;

  .adults {
    border-right: none;
    border-top-right-radius: ${(props) => (props.adultsFocus ? "8px" : "0")};
    border-bottom-right-radius: ${(props) => (props.adultsFocus ? "8px" : "0")};
  }

  .children {
    border-left: none;
    border-top-left-radius: ${(props) => (props.childrenFocus ? "8px" : "0")};
    border-bottom-left-radius: ${(props) =>
      props.childrenFocus ? "8px" : "0"};
  }

  span {
    margin: 8px 0;
    width: 1px;
    background: ${(props) =>
      props.adultsFocus || props.childrenFocus ? "none" : lightGrey};
    position: relative;
  }
`;

export const StyledInputWrapper = styled.div<{ focused: boolean }>`
  position: relative;
  width: 50%;
  padding: 10px 16px;
  border: 1px solid ${lightGrey};
  border-radius: 8px;

  select {
    border: none;
    padding: 4px 0 0 0;
    font-size: 16px;

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

export default Adults;
