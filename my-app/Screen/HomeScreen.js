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
import { useNavigation } from "@react-navigation/native";

// Import image
import arcadeImage from "../assets/image/imagesArcade.png";
import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";
import { useFonts } from "expo-font";
import { TouchableOpacity } from "react-native-gesture-handler";

function HomeScreen() {
  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });
  const navigation = useNavigation();
  const handlePage = (page) => {
    navigation.navigate(page);
  };
  if (!fontsLoaded) {
    return null;
  }
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
          <TouchableOpacity onPress={() => handlePage("GameList")}>
            <View style={styles.square}>
              <View
                style={[styles.iconContainer, { backgroundColor: "#E4B84C" }]}
              >
                <Ionicons name="game-controller" size={24} color="#FFFFFF" />
              </View>
              <Text style={styles.squareText}>Games</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePage("Inbox")}>
            <View style={styles.square}>
              <View
                style={[styles.iconContainer, { backgroundColor: "#EBB3C3" }]}
              >
                <Ionicons
                  name="chatbubbles-outline"
                  size={24}
                  color="#FFFFFF"
                />
              </View>
              <Text style={styles.squareText}>Messages</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.columnContainer, { marginHorizontal: 10 }]}>
          <View style={styles.square}>
            <View
              style={[styles.iconContainer, { backgroundColor: "#9DBDFB" }]}
            >
              <Ionicons name="rocket-outline" size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.squareText}>Arcades</Text>
          </View>
          <TouchableOpacity onPress={() => handlePage("Followers")}>
            <View style={styles.square}>
              <View
                style={[styles.iconContainer, { backgroundColor: "#81ADB4" }]}
              >
                <Ionicons name="people-outline" size={24} color="#FFFFFF" />
              </View>
              <Text style={styles.squareText}>Followers</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ fontFamily: "PressStart2P_400Regular", marginBottom: 10 }}>
        Recomendations
      </Text>
      <ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => handlePage("ArcadeDetail")}>
            <View style={[styles.card, { marginBottom: 30 }]}>
              <Image source={arcadeImage} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardText}>The Breeze, Taangerang</Text>
                <Text style={styles.cardText}>☆☆☆☆☆</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={[styles.card, { marginBottom: 30 }]}>
            <Image source={arcadeImage} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>The Breeze, Taangerang</Text>
              <Text style={styles.cardText}>☆☆☆☆☆</Text>
            </View>
          </View>
          <View style={[styles.card, { marginBottom: 30 }]}>
            <Image source={arcadeImage} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>The Breeze, Taangerang</Text>
              <Text style={styles.cardText}>☆☆☆☆☆</Text>
            </View>
          </View>
          <View style={[styles.card, { marginBottom: 30 }]}>
            <Image source={arcadeImage} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>The Breeze, Taangerang</Text>
              <Text style={styles.cardText}>☆☆☆☆☆</Text>
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
    fontFamily: "PressStart2P_400Regular",
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
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 70,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  iconContainer: {
    borderRadius: 50,
    padding: 8,
    marginRight: 10,
  },
  squareText: {
    fontSize: 8,
    color: "#000000",
    fontFamily: "PressStart2P_400Regular",
  },
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

export default HomeScreen;
