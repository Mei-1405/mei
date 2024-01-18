import { NativeBaseProvider } from 'native-base';
import React from 'react';
import Routers from './src/routers';




export default function App() {

  return (
    <NativeBaseProvider>
      <Routers />

    </NativeBaseProvider>
  );
}



