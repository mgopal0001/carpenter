import { NavigationContainer } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AppNavigator from "./AppNavigator";
import { ApplicationCtx } from "./contexts/ApplicationCtx";

const App = () => {
  const [token, setToken] = useState();
  return (
    <ApplicationCtx.Provider value={{ token, setToken }}>
      <NavigationContainer>
        <LinearGradient
          colors={["rgba(255, 7, 79, 0.97)", "#1E1215"]}
          style={styles.linearGradient}
        >
          <AppNavigator />
        </LinearGradient>
      </NavigationContainer>
    </ApplicationCtx.Provider>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

export default App;
