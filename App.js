import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import CreateAccount from './src/components/screens/auth/CreateAccount';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <CreateAccount />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
