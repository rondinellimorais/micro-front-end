import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// import navigators
import PAGES from './route-names';
import Page0Navigator from './page0-navigator';
import Page1Navigator from './page1-navigator';
import Page2Navigator from './page2-navigator';

// import navigators micro fronts
import {MainNavigator as Microfront1Navigator} from '@midway/microfront1';

const {Navigator, Screen} = createNativeStackNavigator();

const Router = () => {
  // how to works router merge
  // ======================
  // - Stack.Navigator
  //   - MicroFront1 (Navigator like as Screen)
  //       Page1 (Screen)
  //       Page2 (Screen)
  //   - Profile (Screen)
  //   - Settings (Screen)
  //
  // DOC: https://reactnavigation.org/docs/nesting-navigators/
  //
  return (
    <NavigationContainer>
      <Navigator headerMode="screen" initialRouteName={PAGES.PAGE_0}>
        <Screen
          options={{headerShown: false}}
          name={PAGES.PAGE_0}
          component={Page0Navigator}
        />
        <Screen name={PAGES.PAGE_1} component={Page1Navigator} />
        <Screen name={PAGES.PAGE_2} component={Page2Navigator} />
        <Screen
          options={{headerShown: false}}
          name={PAGES.MICROFRONT1_MAIN_PAGE}
          component={Microfront1Navigator}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
