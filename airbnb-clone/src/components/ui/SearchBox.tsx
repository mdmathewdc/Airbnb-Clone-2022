import React from "react";
import styled from "styled-components";
import { device } from "../../constants/ui/breakpoints";

type Props = {};

const SearchBox = (props: Props) => {
  return (
    <StyledSearchBox>
      <h1>Find places to stay on Airbnb</h1>
      <p>Discover entire homes and private rooms perfect for any trip.</p>
      <input type={"text"} placeholder={"LOCATION"} />
      <input type={"text"} placeholder={"LOCATION"} />
      <input type={"text"} placeholder={"LOCATION"} />
      <input type={"text"} placeholder={"LOCATION"} />
    </StyledSearchBox>
  );
};

export const StyledSearchBox = styled.div`
  position: relative;
  z-index: 1;
  padding: 14px 0 0 0;
  background-color: #fff;
  box-shadow: none;

  h1 {
    font-size: 22px;
    font-weight: 800;
  }

  @media ${device.TABLET} {
    padding: 32px;
    border-radius: 12px;
    width: 420px;
    box-shadow: 0 6px 20px rgb(0 0 0 / 20%);

    h1 {
      font-size: 32px;
    }
  }
`;
export default SearchBox;
