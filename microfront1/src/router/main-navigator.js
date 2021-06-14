import React, {useState} from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import PAGES from './route-names';
import Page1Navigator from './page1-navigator';
import RondPageNavigator from './rond-navigator';
import {MainNavigator as Mirofront2Navigator} from '@midway/microfront2';

import StarContext from '../store/star-context';

const {Navigator, Screen} = createNativeStackNavigator();

const theme = {
  headerStyle: {
    backgroundColor: '#000',
  },
  headerTitleStyle: {
    color: '#28FE14',
  },
  headerTintColor: '#28FE14',
};

// default values
const NAMES = [
  {name: 'Cachorro', count: 0},
  {name: 'Come over here Roque', count: 0},
  {name: 'Henrique Oliveira', count: 0},
  {name: 'João Dias', count: 0},
  {name: 'Julio Verne', count: 0},
  {name: 'Lucas Dutra', count: 0},
  {name: 'Mago', count: 0},
  {name: 'Nunes Down', count: 0},
  {name: 'Pedro', count: 0},
  {name: 'RaphaV5', count: 0},
  {name: 'Rondinelli Morais', count: 0},
  {name: 'Samanta Midway', count: 0},
];

const MainNavigator = () => {
  const [state, setState] = useState({names: NAMES});

  const incrementValue = (item) => {
    const newNames = state.names;
    for (let i = 0; i < newNames.length; i++) {
      const obj = newNames[i];
      if (obj.name === item.name) {
        obj.count += 1;
        break;
      }
    }
    setState({
      ...state,
      names: newNames,
    });
  };

  return (
    <StarContext.Provider value={{state, incrementValue}}>
      <Navigator headerMode="screen">
        <Screen
          name={PAGES.ROND_PAGE}
          component={RondPageNavigator}
          options={theme}
        />
        <Screen
          name={PAGES.PAGE_1}
          component={Page1Navigator}
          options={theme}
        />
        <Screen
          options={{headerShown: false}}
          name={PAGES.MICROFRONT2_MAIN}
          component={Mirofront2Navigator}
        />
      </Navigator>
    </StarContext.Provider>
  );
};

export default MainNavigator;
