import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const InboxScreen = () => {
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
    navigation.navigate("Message", { sender: message.sender, message: message.message });
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
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
              <View style={styles.iconContainer}>
                <Ionicons
                  name="person-circle-outline"
                  size={24}
                  color="#555555"
                />
              </View>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF3E6",
    paddingHorizontal: 16,
    paddingTop: 36,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    fontFamily: 'PressStart2P_400Regular'
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  iconContainer: {
    marginRight: 16,
  },
  messageContent: {
    flex: 1,
    
  },
  sender: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
  message: {
    fontSize: 12,
    color: "#555555",
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#555555",
    marginTop: 8,
  },
});

export default InboxScreen;
