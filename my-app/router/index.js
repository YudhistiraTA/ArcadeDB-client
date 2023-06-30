import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import HomeScreen from "../Screen/HomeScreen";
import LoginScreen from "../Screen/LoginScreen";
import RegisterScreen from "../Screen/RegisterScreen";
import ArcadeList from "../Screen/ArcadeList";
import InboxScreen from "../Screen/InboxScreen";
import ArcadeDetail from "../Screen/ArcadeDetail";
import CreateArcade from "../Screen/AddArcade";
import MessageScreen from "../Screen/MessageScreen";

const Tab = createBottomTabNavigator();

function Router() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Create") {
            iconName = "game-controller";
            
          } else if (route.name === "Bookmark") {
            iconName = focused ? "bookmark" : "bookmark-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={LoginScreen} />
      <Tab.Screen name="Create" component={RegisterScreen} />
      <Tab.Screen name="Bookmark" component={ArcadeList} />
      <Tab.Screen name="Account" component={InboxScreen} />
      <Tab.Screen name="ArcadeDetail" component={ArcadeDetail} />
      <Tab.Screen name="createArcade" component={CreateArcade} />
      <Tab.Screen name="Message" component={MessageScreen} />
    </Tab.Navigator>
  );
}

function TabBar({ state, descriptors, navigation }) {
  const centerButtonHandler = () => {
    navigation.navigate("Create");
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const { tabBarIcon: TabIcon } = options;
        const isFocused = state.index === index;

        if (route.name === "Create") {
          return (
            <TouchableOpacity
              key={route.key}
              onPress={centerButtonHandler}
              style={styles.centerButtonContainer}
            >
              <View style={styles.centerButton}>
                <TabIcon
                  name={route.name}
                  focused={isFocused}
                  size={24}
                  color="#5A5A5A"
                />
              </View>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tabContainer}
          >
            {TabIcon && (
              <TabIcon
                name={route.name}
                focused={isFocused}
                size={24}
                color={isFocused ? "black" : "gray"}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 60,
    elevation: 8,
  },
  tabContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%", // Add this line to fix the height
  },
  centerButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -30,
    left: "45%",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#666666",
    elevation: 8,
  },
  centerButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FDF3E6",
  },
});


export default Router;
