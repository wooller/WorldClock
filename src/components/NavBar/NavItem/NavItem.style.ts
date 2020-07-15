import styled from 'styled-components/native';

export const Container = styled.View<{ active?: boolean }>`
  flex: 1;
  opacity: ${(props) => (props.active ? 1 : 0.25)};
`;

export const Text = styled.Text`
  font-size: 16px;
  color: black;
  text-align: center;
`;
