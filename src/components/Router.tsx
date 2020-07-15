import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import Home from '../scenes/Home';

/**
 * Renders the Routes
 *
 * @return {ReactNode} The markup to render.
 */
const Router = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={Home} />
    </NativeRouter>
  );
};

export default Router;
