import styled from 'styled-components/native';

export const Container = styled.View<{ active?: boolean }>`
  display: flex;
  width: 70px;
  opacity: ${(props) => (props.active ? 1 : 0.25)};
  align-items: center;
  border-bottom-width: ${(props) => (props.active ? '3px' : '0px')};
  border-bottom-color: #d81f72;
  padding-bottom: 15px;
`;

export const Text = styled.Text`
  margin-top: 15px;
  font-size: 16px;
  color: black;
`;
