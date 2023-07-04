import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import HeaderAD from "../components/header";

const InboxScreen = () => {
  const messages = [
    { sender: "John Doe", message: "Hello" },

    { sender: "John Doe", message: "Hello" },
    { sender: "Jane Smith", message: "Hi" },
    { sender: "John Doe", message: "Hello" },
    { sender: "Jane Smith", message: "Hi" },
    { sender: "John Doe", message: "Hello" },
    { sender: "Jane Smith", message: "Hi" },
    { sender: "John Doe", message: "Hello" },
    { sender: "Jane Smith", message: "Hi" },
    { sender: "John Doe", message: "Hello" },
    { sender: "Jane Smith", message: "Hi" },
    { sender: "Jane Smith", message: "Hi" },
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
        <Text style={styles.title}>Inbox</Text>
        <ScrollView>
          {messages.map((message, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handlePressMessage(message)}
              activeOpacity={0.6}
            >
              <View style={styles.messageContainer}>
                <Ionicons
                  name="person-circle-outline"
                  size={48}
                  color="#128C7E"
                  style={styles.icon}
                />
                <View style={styles.messageContent}>
                  <Text style={styles.sender}>{message.sender}</Text>
                  <Text style={styles.message}>{message.message}</Text>
                </View>
              </View>
              {index < messages.length - 1 && <View style={styles.separator} />}
            </TouchableOpacity>
          ))}
        </ScrollView>
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    fontFamily: "PressStart2P_400Regular",
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  icon: {
    marginRight: 16,
  },
  messageContent: {
    flex: 1,
  },
  sender: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: "#555555",
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    marginTop: 0,
    marginBottom: 5,
  },
});

export default InboxScreen;
