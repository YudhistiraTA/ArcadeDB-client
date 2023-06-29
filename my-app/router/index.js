import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import HomeScreen from "../Screen/HomeScreen";
import LoginScreen from "../Screen/LoginScreen";
import RegisterScreen from "../Screen/RegisterScreen";
import ArcadeList from "../Screen/ArcadeList";
import InboxScreen from "../Screen/InboxScreen";

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
            return (
              <View style={styles.createTabContainer}>
                <TouchableOpacity
                  style={styles.createTabButton}
                  onPress={() => {
                    // Handle create button press
                  }}
                >
                  <Ionicons
                    name="add-circle"
                    size={size + 20}
                    color={color}
                  ></Ionicons>
                </TouchableOpacity>
              </View>
            );
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
    </Tab.Navigator>
  );
}

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row", backgroundColor: "white" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const { tabBarIcon: TabIcon } = options;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={{ flex: 1, alignItems: "center", paddingVertical: 8 }}
          >
            {TabIcon && (
              <TabIcon
                name={route.name}
                focused={isFocused}
                size={24}
                key={route.key}
                onPress={onPress}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  createTabContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -50,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "blue",
  },
  createTabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Router;
