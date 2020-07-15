import React from 'react';
import { useLocation } from 'react-router-native';
import doesPathContainParent from '../../../utils/doesPathContainParent';

import { Container, Text } from './NavItem.style';

interface IProps {
  title: string;
  route: string;
}

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
