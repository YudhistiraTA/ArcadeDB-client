import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MessageScreen = ({ route }) => {
  const { sender, message } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.sender}>{sender}</Text>
      <Text style={styles.message}>{message}</Text>
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
  sender: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  message: {
    fontSize: 12,
    color: "#555555",
  },
});

export default MessageScreen;
