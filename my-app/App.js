import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Router from "./router";
const Tab = createBottomTabNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#FDF3E6" }}>
      <NavigationContainer style={{ flex: 1, backgroundColor: "#FDF3E6" }}>
        <Router></Router>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
