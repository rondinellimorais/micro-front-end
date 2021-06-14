import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import store from '../store';
import {Provider} from 'react-redux';

import PAGES from './route-names';
import ArtistPageNavigator from './artist-navigator';
import DetailsArtistPageNavigator from './details-artist-navigator';

import {MainNavigator as LoginMainNavigator} from '@midway/microfront-login';

const {Navigator, Screen} = createNativeStackNavigator();

const theme = {
  headerStyle: {
    backgroundColor: '#FEF49C',
  },
  headerTitleStyle: {
    color: '#000',
  },
  headerTintColor: '#000',
};

const LoginNavigator = () => (
  <LoginMainNavigator
    onSuccess={({navigation}) => {
      navigation.navigate(PAGES.ARTIST_PAGE);
    }}
  />
);

const MainNavigator = () => (
  <Provider store={store}>
    <Navigator headerMode="screen">
      <Screen
        name={PAGES.LOGIN_PAGE}
        component={LoginNavigator}
        options={{...theme, headerShown: false}}
      />
      <Screen
        name={PAGES.ARTIST_PAGE}
        component={ArtistPageNavigator}
        options={{title: 'Artists Page', headerHideBackButton: true, ...theme}}
      />
      <Screen
        name={PAGES.DETAILS_ARTIST_PAGE}
        component={DetailsArtistPageNavigator}
        options={theme}
      />
    </Navigator>
  </Provider>
);

export default MainNavigator;
