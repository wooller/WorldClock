import styled from 'styled-components/native';

export const Container = styled.View<{ height: number; width: number }>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  display: flex;
  flex: 1;
`;

export const ChildrenContainer = styled.View`
  flex: 1;
`;

export const NavContainer = styled.View`
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
`;
