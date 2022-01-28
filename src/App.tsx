/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Sleep from './components/Sleep';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>*/}
        <Sleep />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: '100%',
  },
});

export default App;
