import React from 'react';
import { navigationRef } from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Login, Welcome } from '../screens';
import AppStack from './AppStack';


// import { BottomStatusbar, LoadingOverlay } from '../components';

export default function Index() {


  const renderStack = () => {
    switch (Welcome) {
      case Welcome:
        return <AppStack />
      case Login:
        return <AppStack />

      default:
        return <AppStack />;
    }
  };

  return (
    <NavigationContainer ref={navigationRef}>
      {/* <AppStack screeName='Home' /> */}
      {renderStack()}

    </NavigationContainer>
  );
}
