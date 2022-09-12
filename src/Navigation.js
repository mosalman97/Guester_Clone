import React from 'react';

//packages
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//components
import AddLocation from './components/screens/auth/signup/AddLocation';
import CreateAccount from './components/screens/auth/signup/CreateAccount';
import EnterName from './components/screens/auth/signup/EnterName';
import OtpVerification from './components/screens/auth/signup/OtpVerification';
import Login from './components/screens/auth/login/Login';
import Welcome from './components/inculdes/modals/Welcome';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="login">
      <Stack.Screen name="createaccount" component={CreateAccount} />
      <Stack.Screen name="entername" component={EnterName} />
      <Stack.Screen name="otpverification" component={OtpVerification} />
      <Stack.Screen name="addlocation" component={AddLocation} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
