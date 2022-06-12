import React from 'react'
import styled from 'styled-components';
import { ReactComponent as Logo } from '../images/svg/color-logo.svg';

type Props = {}

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <a href=''>
        <Logo />
      </a>
    </StyledHeader>
  )
}

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 64px;
  border: 1px solid red;
`;

export default Header;