import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddLocation from './components/screens/auth/signup/AddLocation';
import CreateAccount from './components/screens/auth/signup/CreateAccount';
import EnterName from './components/screens/auth/signup/EnterName';
import OtpVerification from './components/screens/auth/signup/OtpVerification';

const Navigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="createaccount">
        <Stack.Screen name="createaccount" component={CreateAccount} />
        <Stack.Screen name="entername" component={EnterName} />
        <Stack.Screen name="otpverification" component={OtpVerification} />
        <Stack.Screen name="addlocation" component={AddLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation

const styles = StyleSheet.create({})