import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Import image
import arcadeImage from "../assets/image/imagesArcade.png";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <TextInput style={styles.searchInput} placeholder="Search" />
          <Ionicons
            name="search"
            size={24}
            color="gray"
            style={styles.searchIcon}
          />
        </View>
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

      <ScrollView style={styles.carouselContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={[styles.card, { marginBottom: 30 }]}>
            <Image source={arcadeImage} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Card 1</Text>
            </View>
          </View>
          <View style={[styles.card, { marginBottom: 30 }]}>
            <Image source={arcadeImage} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Card 2</Text>
            </View>
          </View>
          <View style={[styles.card, { marginBottom: 30 }]}>
            <Image source={arcadeImage} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Card 3</Text>
            </View>
          </View>
          <View style={[styles.card, { marginBottom: 30 }]}>
            <Image source={arcadeImage} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Card 4</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
      <ScrollView style={styles.carouselContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={[styles.card, { marginBottom: 30 }]}>
            <Image source={arcadeImage} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Card 1</Text>
            </View>
          </View>
          <View style={[styles.card, { marginBottom: 30 }]}>
            <Image source={arcadeImage} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Card 2</Text>
            </View>
          </View>
          <View style={[styles.card, { marginBottom: 30 }]}>
            <Image source={arcadeImage} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Card 3</Text>
            </View>
          </View>
          <View style={[styles.card, { marginBottom: 30 }]}>
            <Image source={arcadeImage} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Card 4</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF3E6",
    padding: 20,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 360,
    paddingHorizontal: 10,
    paddingVertical: 8,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
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
