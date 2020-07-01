import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import Home from '../scenes/Home';

const Router = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={Home} />
    </NativeRouter>
  );
};

export default Router;
