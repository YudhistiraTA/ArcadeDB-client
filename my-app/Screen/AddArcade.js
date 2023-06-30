import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";

const CreateScreen = () => {
  const [arcadeName, setArcadeName] = useState("");
  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleChooseLogo = () => {
    // Implement logic to choose logo
  };

  const handlePickLocation = () => {
    // Implement logic to pick location
  };

  const handleAddGames = () => {
    // Implement logic to add games
  };

  const handlePublish = () => {
    // Implement logic to publish arcade
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Arcade</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <Ionicons name="game-controller" size={24} color="gray" style={styles.arcadeLogo} />
          <Text style={styles.text}>Arcade Name</Text>
          
        </View>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.chooseLogoButton} onPress={handleChooseLogo}>
          <Ionicons name="add-circle" size={24} color="gray" />
          <Text style={styles.buttonText}>Choose Logo</Text>
          
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.locationButton} onPress={handlePickLocation}>
          <Ionicons name="location" size={24} color="gray" />
          <Text style={styles.buttonText}>Pick Location</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.addGamesButton} onPress={handleAddGames}>
          <Ionicons name="game-controller" size={24} color="gray" />
          <Text style={styles.buttonText}>Add Games</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
      </View>
      <TouchableOpacity style={styles.publishButton} onPress={handlePublish}>
        <Text style={styles.publishButtonText}>PUBLISH</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDF3E6",
        paddingHorizontal: 24,
        paddingTop: 36,
    },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    fontFamily: "PressStart2P_400Regular",
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  arcadeLogo: {
    marginRight: 8,
  },
  text: {
    fontFamily: "PressStart2P_400Regular",
    fontSize: 16,
   
    marginLeft: 8,
  },
  chooseLogoButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  locationButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  addGamesButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  buttonText: {
    marginLeft: 8,
    fontFamily: "PressStart2P_400Regular",
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  publishButton: {
    backgroundColor: "#64FCD9",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: "center",
    alignSelf: "center",
   
},

  publishButtonText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "PressStart2P_400Regular",
  },
});

export default CreateScreen;
