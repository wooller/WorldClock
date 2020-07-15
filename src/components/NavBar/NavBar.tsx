import React from 'react';
import { Dimensions } from 'react-native';

import {
  Container,
  NavContainer,
  HomeContainer,
  ListContainer,
  SettingsContainer,
  ChildrenContainer,
} from './NavBar.style';

interface IProps {
  children: React.ReactNode;
}

const { height, width } = Dimensions.get('window');

const NavBar = ({ children }: IProps) => {
  return (
    <Container height={height} width={width}>
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
      <NavContainer>
        <HomeContainer />
        <ListContainer />
        <SettingsContainer />
      </NavContainer>
    </Container>
  );
};

export default NavBar;
