import React from "react";
import styled from "styled-components";
import { ReactComponent as IconLogo } from "../images/svg/color-logo.svg";
import { ReactComponent as TextLogo } from "../images/svg/text-logo.svg";
import { device } from "../constants/ui/breakpoints";

type Props = {};

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <a href="" className="main-logo">
        <StyledIconLogo />
        <TextLogo />
      </a>
      <StyledLinks>
        <a href="">Become a host</a>
        <a href="">Help</a>
        <a href="">Sign up</a>
        <a href="">Log in</a>
      </StyledLinks>
    </StyledHeader>
  );
};

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  .main-logo {
    display: flex;
    align-items: center;
    fill: rgb(255, 56, 92);
  }
`;

export const StyledLinks = styled.span`

  display: flex;
  a {
    color: black;
    text-decoration: none;
    padding: 20px 0;
    margin: 0 8px;
    font-weight: 600;
  }

  a:first-child {
    display: none;
  }

  @media ${device.TABLET} {
    a:first-child {
      display: inline-block;
    }
  }
`;

export const StyledIconLogo = styled(IconLogo)`
  width: 32px;
  height: 32px;
  margin-right: 4px;
`;

export default Header;
