import deviOS from '../settings/development/ios';
import devAndroid from '../settings/development/android';

import productioniOS from '../settings/production/ios';
import productionAndroid from '../settings/production/android';

import { Platform } from 'react-native';

export default {
  load() {
    if (__DEV__) {
      return Platform.select({
        ios: deviOS,
        android: devAndroid,
      });
    }

    return Platform.select({
      ios: productioniOS,
      android: productionAndroid,
    });
  },
};
