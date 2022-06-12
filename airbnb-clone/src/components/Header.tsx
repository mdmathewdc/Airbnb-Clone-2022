import React from 'react'
import styled from 'styled-components';

type Props = {}

const Header = (props: Props) => {
  return (
    <StyledHeader>Header</StyledHeader>
  )
}

export const StyledHeader = styled.header`
  background-color: #333;
  height: 64px;
`;

export default Header;