import React from 'react';
import { useLocation } from 'react-router-native';
import doesPathContainParent from '../../../utils/doesPathContainParent';

import { Container, Text } from './NavItem.style';

interface IProps {
  title: string;
  route: string;
}

/**
 * Renders a single Nav Item
 *
 * @param {String} title The text of the nav item to render
 * @param {String} route The route (path) of the nav item
 *
 * @return {ReactNode} The markup to render.
 */
const NavItem = ({ title, route }: IProps) => {
  const location = useLocation();
  const isActive = doesPathContainParent(location.pathname, route);
  return (
    <Container active={isActive}>
      <Text>{title}</Text>
    </Container>
  );
};

export default NavItem;
