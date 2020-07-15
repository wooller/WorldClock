import React from 'react';
import { Line } from 'react-native-svg';
import getCartesian from '../../utils/getCartesian';

interface IProps {
  center: number;
  radius: number;
  angle: number;
  strokeWidth: string;
  strokeColor: string;
  strokeLength?: number;
}

/**
 * Renders the Clock Hand Component
 * @param {Number} center The center of the clock face
 * @param {Number} radius The radius of the clock face
 * @param {String} strokeColor The stroke colour of the hand
 * @param {String} strokeWidth The stroke width of the hand
 * @param {String} strokeLength The stroke length of the hand
 *
 * @return {ReactNode} The markup to render.
 */
const ClockHand = ({
  center,
  radius,
  angle,
  strokeColor,
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
      stroke={strokeColor}
    />
  );
};

export default ClockHand;
