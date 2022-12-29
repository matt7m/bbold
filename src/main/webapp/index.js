/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// import {AuthProvider} from './src/context/AuthContext';
// import {AxiosProvider} from './src/context/AxiosContext';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const Root = () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => Root);
