import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';

//Logos from assets
import Logo from '../../../../assets/images/svg/logo.svg';
import Meta from '../../../../assets/images/svg/meta.svg';
import Apple from '../../../../assets/images/svg/apple.svg';
import Google from '../../../../assets/images/svg/google.svg';

//contants
import {SIZE, MainFonts} from '../../../../Constants';

//packages
import DropShadow from 'react-native-drop-shadow';

const Login = ({navigation}) => {
  const [isActive, setActive] = useState('inital');
  const [phoneNumber, setPhoneNumber] = useState('');

  const width = () => {
    if (isActive === 'inital') {
      return 1;
    } else if (isActive === 'clicked') {
      return 2;
    } else {
      return 2;
    }
  };

  const color = () => {
    if (isActive === 'inital') {
      return '#E3E3E3';
    } else if (isActive === 'clicked') {
      return '#0FBA12';
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <DropShadow style={styles.shadow}>
            <Logo style={styles.logo} />
          </DropShadow>
        </View>
        <View style={styles.contentcontainer}>
          <Text style={styles.headingtext}>
            <Text style={styles.createtext}>Login </Text>with OTP
          </Text>
          <Text style={styles.description}>
            We'll send a four-digit OTP to {'\n'} this phone number.
          </Text>
        </View>
        <View style={styles.inputcontainer}>
          <TextInput
            placeholder="+91  Phone Number"
            style={[
              styles.textinput,
              {
                borderWidth: width(),
              },
              {
                borderColor: color(),
              },
            ]}
            onFocus={() => setActive('clicked')}
            onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
            value={phoneNumber}
          />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('otpverification', {phoneNumber})
            }>
            <Text style={styles.nexttext}>Get OTP</Text>
          </TouchableOpacity>
        </View> 
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZE.Wp('2%'),
  },
  logocontainer: {
    alignSelf: 'center',
  },
  logo: {},
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  contentcontainer: {
    alignItems: 'center',
    marginBottom: SIZE.Hp('5.5%'),
  },
  heading: {},
  headingtext: {
    fontSize: SIZE.Hp('3.2%'),
    marginBottom: SIZE.Hp('1.8%'),
  },
  createtext: {
    color: '#0FBA12',
  },
  description: {
    fontSize: SIZE.Hp('1.8%'),
    textAlign: 'center',
    color: '#A0A0A0',
    lineHeight: 20,
  },
  inputcontainer: {},
  inputbox: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: SIZE.Wp('95%'),
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: SIZE.Hp('1.5%'),
  },
  textinput: {
    alignSelf: 'center',
    width: SIZE.Wp('95%'),
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: SIZE.Hp('2%'),
  },
  button: {
    alignSelf: 'center',
    width: SIZE.Wp('95%'),
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: '#0FBA12',
    alignItems: 'center',
    marginBottom: SIZE.Hp('3%'),
  },
  nexttext: {
    color: '#FFFFFF',
    fontSize: SIZE.Hp('2%'),
  },
  logintext: {
    color: '#0FBA12',
    textDecorationLine: 'underline',
    fontSize: SIZE.Hp('2%'),
  },
  login: {
    alignItems: 'center',
  },
});
