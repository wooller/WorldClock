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

export const HomeContainer = styled.View`
  flex: 1;
  background-color: red;
`;

export const ListContainer = styled.View`
  flex: 1;
  background-color: blue;
`;

export const SettingsContainer = styled.View`
  flex: 1;
  background-color: green;
`;
