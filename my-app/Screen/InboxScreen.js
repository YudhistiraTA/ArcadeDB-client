import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inbox</Text>
      {messages.map((message, index) => (
        <View key={index}>
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
        </View>
      ))}
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
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
    borderBottomColor: "#555555",
    marginTop: 8,
  },
});

export default InboxScreen;
