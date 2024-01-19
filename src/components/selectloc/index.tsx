import React, { useState } from 'react';
import { View, Picker, StyleSheet } from 'react-native';

const SelectBoxExample = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Option 1" value="option1" />
        <Picker.Item label="Option 2" value="option2" />
        <Picker.Item label="Option 3" value="option3" />
        {/* Add more Picker.Item components for additional options */}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SelectBoxExample;
