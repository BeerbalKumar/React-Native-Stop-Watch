import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StopwatchContainer from "./stopwatch/stopwatch.container";

export default function App() {
  return (
    <View style={styles.container}>
      

      <StopwatchContainer />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: "10%",
  },
});
