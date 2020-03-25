/**
 * @format
 */

import {AppRegistry} from 'react-native';
import navigator from './src/navigation/navigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => navigator);
