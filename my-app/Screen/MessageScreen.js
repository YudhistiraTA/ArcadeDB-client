import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import arcadeImage from "../assets/image/imagesArcade.png";
import HeaderAD from "../components/header";

const MessageScreen = ({ route }) => {
  // const { sender, message, senderImage, receiverImage } = route.params;

  return (
    <>
      <View style={{ height: 90, width: "100%" }}>
        <HeaderAD />
      </View>
      <View style={styles.container}>
        <View style={styles.senderContainer}>
          <Image source={arcadeImage} style={styles.profileImage} />
          <View style={styles.messageContainer}>
            <Text style={styles.sender}>Sender</Text>
            <Text style={styles.message}>Hello, how are you?</Text>
          </View>
        </View>
        <View style={styles.receiverContainer}>
          <View style={styles.messageContainer}>
            <Text style={styles.sender}>Receiver</Text>
            <Text style={styles.message}>I'm doing great. Thanks!</Text>
          </View>
          <Image source={arcadeImage} style={styles.profileImage} />
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
    paddingTop: 36,
  },
  senderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  receiverContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 16,
    marginLeft: 50, // Adjust the margin left value as per your requirement
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  messageContainer: {
    maxWidth: "70%",
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#ffffff",
  },
  sender: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#1877F2",
  },
  message: {
    fontSize: 12,
    color: "#555555",
  },
});

export default MessageScreen;
