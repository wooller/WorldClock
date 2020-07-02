import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import getTimeInAngles from '../../utils/getTimeInAngles';
import useInterval from '../../hooks/useInterval';

import ClockMarks from './ClockMarks';
import ClockHand from './ClockHand';

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
  const [time, setTime] = useState(getTimeInAngles);

  useInterval(() => {
    setTime(getTimeInAngles);
  }, 1000);

  return (
    <Svg width={width} height={width}>
      <Circle cx={center} cy={center} r={radius} fill="#E7EEFB" />
      <Circle cx={center} cy={center} r={innerCircleRadius} fill="#EDF1FB" />
      <ClockMarks
        minutes={minuteMarksNum}
        radius={marksRadius}
        center={center}
      />
      <ClockHand
        angle={time.seconds}
        center={center}
        radius={marksRadius}
        stroke="#9FA7BC"
        strokeWidth="4"
        strokeLength={50}
      />
      <ClockHand
        angle={time.minutes}
        center={center}
        radius={marksRadius}
        stroke="#0C0F1F"
        strokeWidth="4"
        strokeLength={70}
      />
      <ClockHand
        angle={time.hours}
        center={center}
        radius={marksRadius}
        stroke="#D81F72"
        strokeWidth="4"
        strokeLength={20}
      />
      <Circle cx={center} cy={center} r={5} fill="#D81F72" />
    </Svg>
  );
};

export default Clock;
