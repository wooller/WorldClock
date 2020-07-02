import styled from 'styled-components';
import { Line, Text } from 'react-native-svg';

export const Minute = styled(Line).attrs(() => ({
  stroke: 'black',
}))``;

export const HourLine = styled(Line).attrs(() => ({
  stroke: 'black',
}))``;

export const HourNumber = styled(Text).attrs(() => ({
  fill: 'black',
}))``;
