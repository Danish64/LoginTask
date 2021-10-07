import React from 'react';
import {isEmpty} from 'lodash';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../auth/login';
import HomeScreen from '../home';
import NavigationConstants from '../../constants/NavigationConstants';
import colors from '../../constants/colors';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={NavigationConstants.Login} component={LoginScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.White,
        headerStyle: {backgroundColor: colors.Primary},
      }}>
      <Stack.Screen
        name={NavigationConstants.Home}
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
    </Stack.Navigator>
  );
};

const Navigation = user => {
  return isEmpty(user) ? <AuthNavigator /> : <AppNavigator />;
};

export default Navigation;
