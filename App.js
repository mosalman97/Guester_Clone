import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.name}>App hello salman </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  name: {
    color: 'red',
    fontSize: 40,
  },
});
