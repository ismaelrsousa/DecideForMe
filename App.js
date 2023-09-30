import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Pointer from './components/Pointer/pointer';
import { forwardRef, useImperativeHandle, useRef } from 'react';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Pointer />

      <Button title='Decide for me' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
