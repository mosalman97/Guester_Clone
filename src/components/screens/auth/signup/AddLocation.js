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
import Location from '../../../../assets/images/svg/location.svg';
import Place from '../../../../assets/images/svg/place.svg';
import Target from '../../../../assets/images/svg/target.svg';
import Arrow from '../../../../assets/images/svg/leftarrow.svg';

//contants
import {SIZE, MainFonts} from '../../../../Constants';

//packages
import DropShadow from 'react-native-drop-shadow';

const AddLocation = ({navigation}) => {
  const [isActive, setActive] = useState('inital');
  const [locationSelect,setLocationSelect] = useState('');

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
          onPress={() => navigation.navigate('entername')}>
          <Arrow />
        </TouchableOpacity>
        <View style={styles.logocontainer}>
          <DropShadow style={styles.shadow}>
            <Logo style={styles.logo} />
          </DropShadow>
        </View>
        <View style={styles.contentcontainer}>
          <Location style={{marginRight: 12}} />
          <Text style={{color: 'black', fontSize: SIZE.Hp('3%')}}>
            Add your{' '}
            <Text style={{color: '#0FBA12', fontSize: SIZE.Hp('3%')}}>
              Location
            </Text>
          </Text>
        </View>
        <View style={styles.inputcontainer}>
          <View
            style={[
              styles.inputbox,
              {
                borderColor: color(),
              },
              {
                borderWidth: width(),
              },
            ]}>
            <Place style={styles.placeicon} />
            <TextInput
              placeholder="Enter Location"
              onPressIn={() => setActive('clicked')}
              onChangeText={locationSelect => setLocationSelect(locationSelect)}
              value={locationSelect}
            />
          </View>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.selectlocationcontainer}>
              <Target />
              <Text style={styles.selectlocationtext}>
                Use current Location
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.nexttext}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddLocation;

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
    marginBottom: SIZE.Hp('5.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  placeicon: {
    marginRight: 10,
  },
  inputbox: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: SIZE.Wp('95%'),
    paddingLeft: 10,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: SIZE.Hp('1.5%'),
  },
  textinput: {},
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
  selectlocationcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZE.Hp('2.8%'),
  },
  selectlocationtext: {
    color: '#0FBA12',
    fontSize: SIZE.Hp('2%'),
    marginLeft: SIZE.Wp('2%'),
  },
});
