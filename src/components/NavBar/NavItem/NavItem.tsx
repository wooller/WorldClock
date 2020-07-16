import React from 'react';
import { useLocation } from 'react-router-native';
import doesPathContainParent from '../../../utils/doesPathContainParent';

import { Container, Text } from './NavItem.style';
import Icon from '../../Icon/Icon';

interface IProps {
  title: string;
  route: string;
  icon: string;
}

/**
 * Renders a single Nav Item
 *
 * @param {String} title The text of the nav item to render
 * @param {String} route The route (path) of the nav item
 *
 * @return {ReactNode} The markup to render.
 */
const NavItem = ({ title, route, icon }: IProps) => {
  const location = useLocation();
  const isActive = doesPathContainParent(location.pathname, route);
  return (
    <Container active={isActive}>
      <Icon name={icon} size={25} />
      <Text>{title}</Text>
    </Container>
  );
};

export default NavItem;
