import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

//Logos from assets
// import Logo from '../../../assets/svg/logo.svg';
import Meta from '../../../assets/svg/meta.svg';
import Apple from '../../../assets/svg/apple.svg';
import Google from '../../../assets/svg/google.svg';

//contants
import {SIZE, MainFonts} from '../../../Constants';

const CreateAccount = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.logocontainer}>
        <Logo style={styles.logo}/>
      </View> */}
      <View style={styles.contentcontainer}>
        <Text style={styles.headingtext}>
          <Text style={styles.createtext}>Create</Text>New Account
        </Text>
        <Text style={styles.description}>
          Sign up to find the highest rated Restaurants in your area!
        </Text>
      </View>
      <View style={styles.inputcontainer}>
        <TextInput placeholder="+91  Phone Number" style={styles.textinput} />
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.nexttext}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomcontainer}>
        <View style={styles.iconsection}>
          {/* <Meta />
          <Google />
          <Apple /> */}
        </View>
        <Text style={styles.alreadyaccounttext}>
          Already have an account<Text style={styles.logintext}>Login</Text>
        </Text>
      </View>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {},
  logocontainer: {},
  logo: {},
  contentcontainer: {},
  heading: {},
  headingtext: {},
  createtext: {},
  description: {},
  inputcontainer: {},
  textinput: {},
  button: {},
  nexttext: {},
  bottomcontainer: {},
  iconsection:{

  },
  alreadyaccounttext:{

  },
  logintext:{
    
  }
});
