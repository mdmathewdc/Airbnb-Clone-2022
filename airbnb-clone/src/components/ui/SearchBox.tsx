import React from "react";
import styled from "styled-components";
import { device } from "../../constants/ui/breakpoints";
import { primary, grey } from "../../constants/ui/colors";
import Button from "./buttons/Button";
import Pill from "./buttons/Pill";
import Location from "./input/Location";
import CheckIn from "./input/CheckIn";
import Adults from "./input/Adults";

type Props = {};

const SearchBox = (props: Props) => {
  return (
    <StyledSearchBox>
      <h1>Find places to stay on Airbnb</h1>
      <Subtitle>
        Discover entire homes and private rooms perfect for any trip.
      </Subtitle>
      <Location />
      <CheckIn />
      <Adults />
      <Pill />
      <Button
        bgColor={primary}
        text="Search"
        textColor="#fff"
        fontSize="16px"
        padding={"16px 24px"}
        fontWeight="600"
        width={"100%"}
        searchIcon={true}
      />
    </StyledSearchBox>
  );
};

export const StyledSearchBox = styled.div`
  position: relative;
  z-index: 1;
  padding: 14px 0 0 0;
  background-color: #fff;
  box-shadow: none;
  grid-area: 1 / 1;

  h1 {
    font-size: 22px;
    font-weight: 800;
    margin-bottom: 8px;
  }

  @media ${device.TABLET} {
    padding: 32px;
    margin-top: 40px;
    margin-bottom: 43px;
    border-radius: 12px;
    width: 400px;
    box-shadow: 0 6px 20px rgb(0 0 0 / 20%);

    h1 {
      font-size: 32px;
      line-height: 36px;
    }
  }
`;

export const Subtitle = styled.p`
  color: ${grey};
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 16px;
`;
export default SearchBox;
