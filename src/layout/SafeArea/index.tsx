import { Box, IBoxProps, useColorMode } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';

interface Props extends IBoxProps {
  children: React.ReactNode;
}

const Index = ({ children, ...props }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex="1" bg={colorMode === 'dark' ? '#121212' : 'white'} {...props}>
        {children}
      </Box>
    </SafeAreaView>
  );
};

export default Index;
