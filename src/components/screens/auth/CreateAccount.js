import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

//Logos from assets
import Logo from '../../../assets/images/svg/logo.svg';
import Meta from '../../../assets/images/svg/meta.svg';
import Apple from '../../../assets/images/svg/apple.svg';
import Google from '../../../assets/images/svg/google.svg';

//contants
import {SIZE, MainFonts} from '../../../Constants';

//packages
import DropShadow from 'react-native-drop-shadow';

const CreateAccount = () => {
  const [isActive, setActive] = useState('inital');

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
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <DropShadow style={styles.shadow}>
          <Logo style={styles.logo} />
        </DropShadow>
      </View>
      <View style={styles.contentcontainer}>
        <Text style={styles.headingtext}>
          <Text style={styles.createtext}>Create </Text>New Account
        </Text>
        <Text style={styles.description}>
          Sign up to find the highest rated {'\n'} Restaurants in your area!
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
          onPressIn={() => setActive('clicked')}
        />
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.nexttext}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomcontainer}>
        <View style={styles.iconsection}>
          <View style={styles.iconcontainer}>
            <Meta />
          </View>
          <View
            style={{...styles.iconcontainer, marginHorizontal: SIZE.Wp('5%')}}>
            <Google />
          </View>
          <View style={styles.iconcontainer}>
            <Apple />
          </View>
        </View>
        <View style={styles.login}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.alreadyaccounttext}>
              Already have an account{' '}
              <Text style={styles.logintext}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreateAccount;

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
