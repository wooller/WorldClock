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
import { StatusBar, SafeAreaView } from 'react-native';
import Router from './components/Router';
import { Background } from './App.style';

const App = () => {
  return (
    <>
      <Background>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Router />
        </SafeAreaView>
      </Background>
    </>
  );
};

export default App;
