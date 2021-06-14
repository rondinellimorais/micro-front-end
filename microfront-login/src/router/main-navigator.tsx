import React, { useState } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { HomeNavigator, LoginNavigator } from './navigator';
import { MainNavigatorProps, RouteNames } from '../@types';
import UserContext from '../store/user-context';

const { Navigator, Screen } = createNativeStackNavigator();

const MainNavigator: React.FC<MainNavigatorProps> = ({
  initialRouteName,
  screenOptions,
  headerMode = 'screen',
  onSuccess
}) => {
  const [loggedUser, setLoggedUser] = useState<string>();

  const saveLoggedUser = (username?: string) => {
    setLoggedUser(username);
  };

  return (
    <UserContext.Provider
      value={{
        loggedUser,
        saveLoggedUser,
        onSuccess: ({ navigation }) => {
          if (onSuccess) onSuccess({ navigation });
          else navigation.navigate(RouteNames.HOME_PAGE);
        }
      }}
    >
      <Navigator
        screenOptions={screenOptions}
        headerMode={headerMode}
        initialRouteName={initialRouteName}
      >
        <Screen
          name={RouteNames.LOGIN_PAGE}
          component={LoginNavigator}
          options={{ title: 'Sign In' }}
        />
        <Screen
          name={RouteNames.HOME_PAGE}
          component={HomeNavigator}
          options={{
            title: 'Welcome to home!'
          }}
        />
      </Navigator>
    </UserContext.Provider>
  );
};

export default MainNavigator;
