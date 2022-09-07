import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import CreateAccount from './src/components/screens/auth/signup/CreateAccount';
import OtpVerification from './src/components/screens/auth/signup/OtpVerification';
import EnterName from './src/components/screens/auth/signup/EnterName';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <CreateAccount />
        <OtpVerification/>
        <EnterName/>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
