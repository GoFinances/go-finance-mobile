import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import NewTransaction from '../pages/NewTransaction';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="NewTransaction" component={NewTransaction} />
  </App.Navigator>
);

export default AppRoutes;