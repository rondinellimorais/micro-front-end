import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import type { ScreenProps } from '../../../@types';

const { Navigator, Screen } = createNativeStackNavigator();

const defaultScreenOptions = {
  headerShown: false
};

interface IScreen {
  name: string;
  component: React.FC<ScreenProps>;
  options?: any;
  initialParams?: any;
}

export default function withBaseNavigator(
  initialRouteName: string,
  screens: [IScreen],
  screenOptions = {}
) {
  const options = {
    ...defaultScreenOptions,
    ...screenOptions
  };

  return (
    <Navigator initialRouteName={initialRouteName} screenOptions={options}>
      {screens.map((screen) => (
        <Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{ gestureEnabled: false, ...screen.options }}
        />
      ))}
    </Navigator>
  );
}
