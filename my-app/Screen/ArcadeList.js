import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";
import arcadeImage from "../assets/image/imagesArcade.png";
import { useFonts } from "expo-font";
const ArcadeList = () => {
  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={[
            styles.searchInput,
            { fontFamily: "PressStart2P_400Regular" },
          ]}
          placeholder="Search Arcade Location..."
        />
        <View style={styles.searchIcon}>
          <Image
            source={require("../assets/icon/searchIcon.png")}
            style={styles.iconImage}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.globalSearchButton}>
        <Text
          style={[
            styles.globalSearchText,
            { fontFamily: "PressStart2P_400Regular" },
          ]}
        >
          Global Search
        </Text>
      </TouchableOpacity>
      <Text style={[styles.title, { fontFamily: "PressStart2P_400Regular" }]}>
        Arcade List
      </Text>
      {/* <View style={styles.card}></View> */}

      <View style={[styles.card, { marginBottom: 30 }]}>
        <Image source={arcadeImage} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardText}>The Breeze, Taangerang</Text>
          <Text style={styles.cardText}>☆☆☆☆☆</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF3E6",
    padding: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 15,
    marginRight: 8,
    fontSize: 12,
  },
  searchIcon: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    right: 10,
  },
  iconImage: {
    width: 24,
    height: 20,
  },
  globalSearchButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginBottom: 16,
    alignSelf: "flex-start",
  },
  globalSearchText: {
    color: "#6F6B65",
    fontSize: 10,
  },
  title: {
    color: "#6F6B65",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  // card: {
  //   backgroundColor: "white",
  //   borderRadius: 20,
  //   height: 250,
  //   // Tambahkan ukuran kartu dan properti lainnya yang Anda butuhkan
  // },
  card: {
    width: 300,
    height: 200,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    marginRight: 10,
    // elevation: 2,
  },
  cardImage: {
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
  },
  cardText: {
    marginTop: 10,
    fontSize: 12,
    // fontWeight: "bold",
    color: "#000000",
    fontFamily: "PressStart2P_400Regular",
  },
});

export default ArcadeList;
