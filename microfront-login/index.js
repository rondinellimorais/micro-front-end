/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { name as appName } from './app.json';
import App from './src/app';

enableScreens();

AppRegistry.registerComponent(appName, () => App);
