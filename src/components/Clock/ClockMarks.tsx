import React from 'react';
import { G, Line } from 'react-native-svg';
import getCartesian from '../../utils/getCartesian';

interface IProps {
  radius: number;
  center: number;
  minutes: number;
}

/**
 * Renders the Clock Hand Component
 * @param {Number} radius The radius of the clock face
 * @param {Number} center The center of the clock face
 * @param {Number} minutes The number of minutes to show
 *
 * @return {ReactNode} The markup to render.
 */
const ClockMarks = ({ radius, center, minutes }: IProps) => {
  const minutesArray = new Array(minutes).fill(1);

  const minuteSticks = minutesArray.map((minute, index) => {
    const start = getCartesian(center, center, radius - 4, index * 5);
    const end = getCartesian(center, center, radius, index * 5);
    return (
      <Line
        stroke="white"
        strokeWidth={2}
        strokeLinecap="square"
        key={index}
        x1={start.x}
        x2={end.x}
        y1={start.y}
        y2={end.y}
      />
    );
  });

  return <G>{minuteSticks}</G>;
};

export default ClockMarks;
