import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import HeaderAD from "../components/header";

const UserSchedule = () => {
  const messages = [
    { sender: "John Doe", message: "Hello" },
    { sender: "Jane Smith", message: "Hi" },
    { sender: "Mike Johnson", message: "Hey" },
    { sender: "John Doe", message: "Hello" },
    { sender: "Jane Smith", message: "Hi" },
    { sender: "Mike Johnson", message: "Hey" },
    { sender: "John Doe", message: "Hello" },
    { sender: "Jane Smith", message: "Hi" },
    { sender: "Mike Johnson", message: "Hey" },
  ];
  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  const navigation = useNavigation();

  const handlePressMessage = (message) => {
    navigation.navigate("Message", {
      sender: message.sender,
      message: message.message,
    });
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={{ height: 90, width: "100%" }}>
        <HeaderAD />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>My Shedule</Text>
        <View style={styles.container}>
          <View style={styles.scheduleItem}>
            <Image
              source={require("../assets/image/user1.png")}
              style={styles.image}
            />
            <View style={styles.detailsContainer}>
              <Text style={styles.arcadeName}>Arcade Name</Text>
              <Text style={styles.date}>July 4, 2023</Text>
            </View>
          </View>
          <View style={styles.scheduleItem}>
            <Image
              source={require("../assets/image/user1.png")}
              style={styles.image}
            />
            <View style={styles.detailsContainer}>
              <Text style={styles.arcadeName}>Arcade Name</Text>
              <Text style={styles.date}>July 5, 2023</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF3E6",
    paddingHorizontal: 16,
    paddingTop: 5,
  },
  title: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  scheduleItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  imageContainer: {
    backgroundColor: "#1877F2",
    borderRadius: 50,
    padding: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
  detailsContainer: {
    marginLeft: 10,
  },
  arcadeName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 16,
    color: "gray",
  },
});

export default UserSchedule;
