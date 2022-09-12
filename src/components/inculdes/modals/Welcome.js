import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

//constants
import {MainFonts, SIZE} from '../../../Constants';

//images from assets
import Greenroundtick from '../../../assets/images/svg/greenroundtick.svg';
import Rightarrow from '../../../assets/images/svg/rightarrow.svg';

const Welcome = () => {
  return (
    <SafeAreaView>
      <View style={styles.modalcontainer}>
        <View style={styles.iconcontainer}>
          <Greenroundtick />
        </View>
        <View style={styles.textdetail}>
          <Text style={styles.welcometext}>Welcome Andrew</Text>
          <Text style={styles.lettext}>
            Let’s Get <Text style={styles.startedtext}>Started</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.rightarrowcontainer}
          activeOpacity={0.8}>
          <Rightarrow />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  modalcontainer: {
    backgroundColor: '#F3F4F5',
    height: SIZE.Hp('53%'),
    width: SIZE.Wp('80%'),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#F3F4F5',
    borderRadius: 18,
    alignItems: 'center',
    paddingTop: SIZE.Hp('8%'),
  },
  iconcontainer: {
    marginBottom: SIZE.Hp('4%'),
  },
  textdetail: {},
  welcometext: {
    marginBottom: SIZE.Hp('1.2%'),
    fontSize: SIZE.Hp('1.8%'),
    textAlign: 'center',
  },
  lettext: {
    marginBottom: SIZE.Hp('3.5%'),
    fontSize: SIZE.Hp('2.8%'),
    textAlign: 'center',
    fontFamily: MainFonts.dmMedium,
  },
  startedtext: {
    color: '#0FBA12',
    textAlign: 'center',
  },
  rightarrowcontainer: {
    backgroundColor: '#0FBA12',
    height: SIZE.Hp('7%'),
    width: SIZE.Wp('15%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
