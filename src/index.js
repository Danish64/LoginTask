import React from 'react';
import {Text} from 'react-native';
import {Provider} from './utils/context';
import NavigationScreens from './container/navigations';

function Index() {
  const testUser = {name: 'Aurangzaib'};
  return (
    <Provider value={testUser}>
      <NavigationScreens />
    </Provider>
  );
}

export default Index;
