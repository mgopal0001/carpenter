import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const App = () => {
  return (

        <NavigationContainer>
          <LinearGradient colors={['rgba(255, 7, 79, 0.97)','#1E1215']} style={styles.linearGradient}>
              <AppNavigator />
          </LinearGradient>
        </NavigationContainer>
  );
};



const styles = StyleSheet.create({
  linearGradient: {
      flex: 1,
      
  },

});

export default App;
