import React from 'react';
import { Dimensions } from 'react-native';
import Svg, {
  Circle,
  RadialGradient,
  Defs,
  Stop,
  ClipPath,
  Rect,
} from 'react-native-svg';


import ClockMarks from './ClockMarks';
import ClockHand from './ClockHand';

interface IProps {
  time: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const { width } = Dimensions.get('window');
const diameter = width - 80;
const marksDiameter = diameter - 40;
const innerCircleDiameter = diameter - 80;

const center = width / 2;
const marksRadius = marksDiameter / 2;
const innerCircleRadius = innerCircleDiameter / 2;
const radius = diameter / 2;
const minuteMarksNum = 12 * 6;

const Clock = ({ time }: IProps) => {
  return (
    <Svg width={width} height={width}>
      <Defs>
        <ClipPath id="semicircle">
          <Rect
            x={center}
            y={center - (radius + 15)}
            width={radius + 15}
            height={diameter + 30}
          />
        </ClipPath>
        <RadialGradient
          id="grad"
          cx={center + 15}
          cy={center}
          rx={radius + 15}
          ry={radius + 15}
          fx={center + 110}
          fy={center + 20}
          gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#C7D6EA" stopOpacity="1" />
          <Stop offset="0" stopColor="#C4D4E7" stopOpacity="1" />
          <Stop offset="1" stopColor="#f7f9fc" stopOpacity="1" />
        </RadialGradient>
      </Defs>
      <Circle cx={center + 15} cy={center} r={radius + 15} fill="url(#grad)" />
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
        angle={time.hours}
        center={center}
        radius={marksRadius}
        stroke="#D81F72"
        strokeWidth="4"
        strokeLength={20}
      />
      <ClockHand
        angle={time.minutes}
        center={center}
        radius={marksRadius}
        stroke="#0C0F1F"
        strokeWidth="4"
        strokeLength={70}
      />
      <Circle cx={center} cy={center} r={5} fill="#D81F72" />
    </Svg>
  );
};

export default Clock;
