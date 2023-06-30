import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Import image
import profileImage from "../assets/image/roblox.jpg";
import imagesArcade from "../assets/image/imagesArcade.png";

function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.profileName}>John Doe</Text>
      </View>

      <View style={styles.squareContainer}>
        <View style={[styles.columnContainer, { marginHorizontal: 10 }]}>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
        </View>
        <View style={[styles.columnContainer, { marginHorizontal: 10 }]}>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
        </View>
      </View>

      <View style={styles.carouselContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={[styles.card, { marginBottom: 30 }]}>
            <Image source={imagesArcade} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Card 1</Text>
            </View>
          </View>
          <View style={[styles.card, { marginBottom: 30 }]}>
            <Image source={imagesArcade} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Card 2</Text>
            </View>
          </View>
          <View style={[styles.card, { marginBottom: 30 }]}>
            <Image source={imagesArcade} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Card 3</Text>
            </View>
          </View>
          <View style={[styles.card, { marginBottom: 30 }]}>
            <Image source={imagesArcade} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Card 4</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF3E6",
    padding: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  squareContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  columnContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  square: {
    width: "100%",
    height: 70,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    marginBottom: 10,
  },
  carouselContainer: {
    marginBottom: 20,
  },
  card: {
    width: 300,
    height: 200,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    marginRight: 10,
    elevation: 2,
  },
  cardImage: {
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default HomeScreen;
