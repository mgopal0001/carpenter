// SplashScreen.js

import React, { useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';
const Logo = require("../../assets/carpenter.png");
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Wait for 1 second and then navigate to the home page
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Assuming 'Home' is the name of your home page
    }, 1000);

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient colors={['rgba(255, 7, 79, 0.97)','#1E1215']} style={styles.linearGradient}>
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
        </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // Adjust the width according to your design
    height: 200, // Adjust the height according to your design
    borderWidth:5,
  },
});

export default SplashScreen;
