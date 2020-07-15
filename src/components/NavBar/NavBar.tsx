import React from 'react';
import { Dimensions } from 'react-native';
import navItems, { INavItem } from '../../constants/navItems';
import NavItem from './NavItem/NavItem';

import { Container, NavContainer, ChildrenContainer } from './NavBar.style';

interface IProps {
  children: React.ReactNode;
}

const { height, width } = Dimensions.get('window');

/**
 * Renders the NavBar
 *
 * @param {ReactNode} children The children of the NavBar
 *
 * @return {ReactNode} The markup to render.
 */
const NavBar = ({ children }: IProps) => {
  return (
    <Container height={height} width={width}>
      <ChildrenContainer>{children}</ChildrenContainer>
      <NavContainer>
        {navItems.map((navItem: INavItem, index: number) => (
          <NavItem key={navItem.title || index} {...navItem} />
        ))}
      </NavContainer>
    </Container>
  );
};

export default NavBar;
