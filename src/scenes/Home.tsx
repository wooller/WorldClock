import React from 'react';
import { View } from 'react-native';
import Clock from '../components/Clock/Clock';

import { ClockDetails, LocationText, DigitalTimeText } from './Home.style';

export const HomeScene = () => {
  return (
    <View>
      <Clock />
      <ClockDetails>
        <LocationText>Genova</LocationText>
        <DigitalTimeText>18:30</DigitalTimeText>
      </ClockDetails>
    </View>
  );
};

export default HomeScene;
