import React from "react";
import styled from "styled-components";
import { device } from "../constants/ui/breakpoints";
import HouseImage from "../images/real/house.jpg";
import SearchBox from "./ui/SearchBox";

type Props = {};

const Hero = (props: Props) => {
  return (
    <StyledHero>
      <img src={HouseImage} alt="house" />
      <SearchBox />
    </StyledHero>
  );
};

export const StyledHero = styled.div`
  position: relative;
  padding-top: 14px;
  padding-bottom: 56px;

  img {
    position: absolute;
    top: 0;
    width: 75%;
    margin-left: 25%;
    border-radius: 19px;
    height: 610px;
    object-fit: cover;
    display: none;

    @media ${device.TABLET} {
      display: block;
    }
  }

  @media ${device.TABLET} {
    padding-top: 40px;
    padding-bottom: 43px;
  }
`;

export default Hero;
