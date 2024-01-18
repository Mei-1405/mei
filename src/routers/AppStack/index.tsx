import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '../../screens';
import { Login } from '../../screens';


const Stack = createNativeStackNavigator();



const Index = () => {

  return (
    <Stack.Navigator >

      <Stack.Screen
        component={Welcome}
        name="Welcome"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        component={Login}
        name="Login"
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default Index;
