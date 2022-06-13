import React from "react";
import styled from "styled-components";
import { lightGrey } from "../constants/ui/colors";
import { device } from "../constants/ui/breakpoints";
import { ReactComponent as Facebook } from "../images/svg/facebook.svg";
import { ReactComponent as Twitter } from "../images/svg/twitter.svg";
import { ReactComponent as Instagram } from "../images/svg/instagram.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <Logos>
        <Facebook />
        <Twitter />
        <Instagram />
      </Logos>
      <p>© 2022 Airbnb, Inc. All rights reserved</p>
      <Credits>
        Developed by{" "}
        <a href="https://github.com/mdmathewdc" target="_blank">
          Mathew Dony
        </a>{" "}
        with React ⚛️ & TypeScript 💙
      </Credits>
    </StyledFooter>
  );
};

export const StyledFooter = styled.div`
  border-top: 1px solid ${lightGrey};
  padding: 16px 0 56px 0;

  @media ${device.TABLET} {
    text-align: center;
  }
`;

export const Credits = styled.p`
  font-size: 12px;

  @media ${device.TABLET} {
    font-size: 14px;
  }
`;

export const Logos = styled.div`
  display: none;
  @media ${device.TABLET} {
    display: flex;
    cursor: pointer;
    justify-content: center;
    gap: 16px;
    text-align: center;
    margin-bottom: 16px;
  }
`;

export default Footer;
