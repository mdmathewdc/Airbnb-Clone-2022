import React from "react";
import styled from "styled-components";
import { lightGrey } from "../constants/ui/colors";

type Props = {};

const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <p>© 2022 Airbnb, Inc. All rights reserved</p>
      <p>
        Developed by{" "}
        <a href="https://github.com/mdmathewdc" target="_blank">
          Mathew Dony
        </a>{" "}
        with React ⚛️ & TypeScript 💙
      </p>
    </StyledFooter>
  );
};

export const StyledFooter = styled.div`
  border-top: 1px solid ${lightGrey};
  padding: 16px 0 56px 0;
`;

export default Footer;
