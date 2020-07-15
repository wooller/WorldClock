/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import Router from './components/Router';
import { Background, SafeArea } from './App.style';

const App = () => {
  return (
    <>
      <Background>
        <StatusBar barStyle="dark-content" />
        <SafeArea>
          <Router />
        </SafeArea>
      </Background>
    </>
  );
};

export default App;
