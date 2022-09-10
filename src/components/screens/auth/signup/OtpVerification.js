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
import Arrow from '../../../../assets/images/svg/leftarrow.svg';

//contants
import {SIZE, MainFonts} from '../../../../Constants';

//packages
import DropShadow from 'react-native-drop-shadow';
import {useRoute} from '@react-navigation/native';

const OtpVerification = ({navigation}) => {
  const [isActive, setActive] = useState('inital');
  const [verificationCode, setVerificationCode] = useState('');

  const route = useRoute();

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
        <TouchableOpacity
          style={styles.backbutton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('createaccount')}>
          <Arrow />
        </TouchableOpacity>
        <View style={styles.logocontainer}>
          <DropShadow style={styles.shadow}>
            <Logo style={styles.logo} />
          </DropShadow>
        </View>
        <View style={styles.contentcontainer}>
          <Text style={styles.headingtext}>
            <Text style={styles.createtext}>OTP </Text> Verification
          </Text>
          <Text style={styles.description}>
            The Otp has been sent to {'\n'}{' '}
            {/* <Text style={{color: 'black'}}>+91 {route.params.phoneNumber}</Text> */}
          </Text>
        </View>
        <View style={styles.inputcontainer}>
          <TextInput
            placeholder="Enter OTP"
            style={[
              styles.textinput,
              {
                borderWidth: width(),
              },
              {
                borderColor: color(),
              },
            ]}
            onPressIn={() => setActive('clicked')}
            onChangeText={verificationCode =>
              setVerificationCode(verificationCode)
            }
            value={verificationCode}
          />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('entername')}>
            <Text style={styles.nexttext}>Signup</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomcontainer}>
          <View style={styles.login}>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.alreadyaccounttext}>
                Don’t recieve code?{' '}
                <Text style={styles.logintext}>Resend OTP</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZE.Wp('2%'),
  },
  backbutton: {
    borderColor: '#E3E3E3',
    borderWidth: 1,
    borderRadius: 40,
    height: SIZE.Hp(3),
    width: SIZE.Wp(5),
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 15,
    top: 20,
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
    fontSize: SIZE.Hp('1.5%'),
    textAlign: 'center',
    color: '#A0A0A0',
    lineHeight: 18,
  },
  inputcontainer: {},
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
  bottomcontainer: {},
  iconsection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZE.Hp('2%'),
  },
  iconcontainer: {
    backgroundColor: '#FFFFFFB2',
    width: SIZE.Wp(10),
    height: SIZE.Hp(4),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    borderRadius: 64,
    borderColor: '#EFEFEF',
    borderWidth: 1,
  },

  alreadyaccounttext: {
    fontSize: SIZE.Hp('2%'),
    color: '#A0A0A0',
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
