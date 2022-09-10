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

const EnterName = ({navigation}) => {
  const [isActive, setActive] = useState('inital');
  const [name, setName] = useState('');

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
          onPress={() => navigation.navigate('otpverification')}>
          <Arrow />
        </TouchableOpacity>
        <View style={styles.logocontainer}>
          <DropShadow style={styles.shadow}>
            <Logo style={styles.logo} />
          </DropShadow>
        </View>
        <View style={styles.contentcontainer}>
          <Text style={styles.headingtext}>
            <Text style={styles.createtext}>What should</Text> {'\n'} Guester{' '}
            <Text style={{color: '#0FBA12'}}>call you?</Text>
          </Text>
        </View>
        <View style={styles.inputcontainer}>
          <TextInput
            placeholder="Full Name"
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
            onChangeText={name => setName(name)}
            value={name}
          />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('addlocation')}>
            <Text style={styles.nexttext}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EnterName;

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
    textAlign: 'center',
  },
  createtext: {
    color: 'black',
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
