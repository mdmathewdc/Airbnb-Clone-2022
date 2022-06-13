import React from "react";
import styled from "styled-components";
import { device } from "../constants/ui/breakpoints";
import HouseImage from "../images/real/house.jpg";
import SearchBox from "./ui/SearchBox";

type Props = {};

const Hero = (props: Props) => {
  return (
    <StyledHero>
      <SearchBox />
      <ImageWrapper>
        <img src={HouseImage} alt="house" />
      </ImageWrapper>
    </StyledHero>
  );
};

export const StyledHero = styled.div`
  display: grid;
  padding-top: 14x;
  padding-bottom: 56px;

  @media ${device.TABLET} {
    padding-top: 0;
    padding-bottom: 43px;
  }
`;

export const ImageWrapper = styled.div`
  grid-area: 1 / 1;

  img {
    width: 75%;
    margin-left: 25%;
    border-radius: 8px;
    height: 100%;
    object-fit: cover;
    display: none;

    @media ${device.TABLET} {
      display: block;
    }
  }
`;

export default Hero;
