import React from "react";
import styled from "styled-components";
import { lightGrey } from "../constants/ui/colors";
import { device } from "../constants/ui/breakpoints";
import { ReactComponent as Facebook } from "../images/svg/facebook.svg";
import { ReactComponent as Twitter } from "../images/svg/twitter.svg";
import { ReactComponent as Instagram } from "../images/svg/instagram.svg";
import { grey } from "../constants/ui/colors";

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
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  @media ${device.LAPTOP} {
    display: flex;
    flex-flow: row-reverse;
    justify-content: space-between;
    text-align: center;
    align-items: flex-start;
  }
`;

export const Credits = styled.p`
  color: ${grey};
  font-size: 12px;
  line-height: 1;
  margin-top: 8px;

  @media ${device.TABLET} {
    font-size: 14px;
  }

  @media ${device.LAPTOP} {
    margin-top: 0;
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

  @media ${device.LAPTOP} {
    justify-content: center;
    gap: 16px;
    text-align: center;
    margin-bottom: 16px;
  }
`;

export default Footer;
