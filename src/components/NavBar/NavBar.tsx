import React from 'react';
import { Dimensions } from 'react-native';

import {
  Container,
  NavContainer,
  NavItem,
  ChildrenContainer,
  NavText,
} from './NavBar.style';

interface IProps {
  children: React.ReactNode;
}

const { height, width } = Dimensions.get('window');

const NavBar = ({ children }: IProps) => {
  return (
    <Container height={height} width={width}>
      <ChildrenContainer>{children}</ChildrenContainer>
      <NavContainer>
        <NavItem active>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem>
          <NavText>List</NavText>
        </NavItem>
        <NavItem>
          <NavText>Settings</NavText>
        </NavItem>
      </NavContainer>
    </Container>
  );
};

export default NavBar;
