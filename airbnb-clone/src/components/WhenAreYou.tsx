import React from "react";
import styled from "styled-components";
import { black, grey } from "../constants/ui/colors";
import { device } from "../constants/ui/breakpoints";
import { Button } from "../components/ui";

type Props = {};

const WhenAreYou = (props: Props) => {
  return (
    <StyledWhenAreYou>
      <div>When are you travelling?</div>
      <p>Add dates for updated price and availability</p>
      <div className="button-wrapper">
        <Button bgColor={black} text="Add dates" textColor="#fff"></Button>
      </div>
    </StyledWhenAreYou>
  );
};

export const StyledWhenAreYou = styled.div`
  padding: 56px 0;

  div {
    font-size: 22px;
    line-height: 26px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  p {
    color: ${grey};
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 16px;
  }

  @media ${device.TABLET} {
    .button-wrapper {
      display: table;

    }
    div {
      font-size: 26px;
      line-height: 30px;
      margin-bottom: 8px;
    }
  }
`;

export default WhenAreYou;
