import React from 'react';
import { Line } from 'react-native-svg';
import getCartesian from '../../utils/getCartesian';

interface IProps {
  center: number;
  radius: number;
  angle: number;
  strokeWidth: string;
  stroke: string;
  strokeLength?: number;
}

const ClockHand = ({
  center,
  radius,
  angle,
  stroke,
  strokeWidth,
  strokeLength = 0,
}: IProps) => {
  const { x, y } = getCartesian(center, center, radius - strokeLength, angle);

  return (
    <Line
      x1={center}
      y1={center}
      x2={x}
      y2={y}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      stroke={stroke}
    />
  );
};

export default ClockHand;
