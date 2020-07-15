import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Clock from '../components/Clock/Clock';
import getTime from '../utils/getTime';
import useInterval from '../hooks/useInterval';

import { ClockDetails, LocationText, DigitalTimeText } from './Home.style';

export const HomeScene = () => {
  const [time, setTime] = useState(getTime);

  useInterval(() => {
    setTime(getTime);
  }, 1000);

  return (
    <NavBar>
      <Clock time={time.analogue} />
      <ClockDetails>
        <LocationText>Genova</LocationText>
        <DigitalTimeText>{`${time.digital.hours}:${time.digital.minutes}`}</DigitalTimeText>
      </ClockDetails>
    </NavBar>
  );
};

export default HomeScene;
