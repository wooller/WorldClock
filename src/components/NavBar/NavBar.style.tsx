import styled from 'styled-components/native';

export const Container = styled.View<{ height: number; width: number }>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  display: flex;
`;

export const ChildrenContainer = styled.View`
  flex: 6;
`;

export const NavContainer = styled.View`
  flex-direction: row;
  flex: 1;
  display: flex;
`;

export const NavItem = styled.View<{ active?: boolean }>`
  flex: 1;
  opacity: ${(props) => (props.active ? 1 : 0.25)};
`;

export const NavText = styled.Text`
  font-size: 16px;
  color: black;
  text-align: center;
`;
