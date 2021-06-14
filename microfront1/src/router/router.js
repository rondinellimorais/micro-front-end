import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './main-navigator';

export default () => (
  <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>
);
