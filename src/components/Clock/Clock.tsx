import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import ClockMarks from './ClockMarks';

const { width } = Dimensions.get('window');
const diameter = width - 80;
const marksDiameter = diameter - 40;
const innerCircleDiameter = diameter - 80;

const center = width / 2;
const marksRadius = marksDiameter / 2;
const innerCircleRadius = innerCircleDiameter / 2;
const radius = diameter / 2;
const minuteMarksNum = 12 * 6;

const Clock = () => {
  return (
    <Svg width={width} height={width}>
      <Circle cx={center} cy={center} r={radius} fill="#E7EEFB" />
      <Circle cx={center} cy={center} r={innerCircleRadius} fill="#EDF1FB" />
      <ClockMarks
        minutes={minuteMarksNum}
        radius={marksRadius}
        center={center}
      />
    </Svg>
  );
};

export default Clock;
