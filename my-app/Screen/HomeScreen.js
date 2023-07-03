import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";
import { useFonts } from "expo-font";
import axios from "axios";
// Import images
import arcadeImage from "../assets/image/imagesArcade.png";
import userImage from "../assets/image/user3.png";
import bannerImage from "../assets/image/imagesArcade.png"; // Import the banner image
import * as Location from "expo-location";
import { BASE_URL } from "../config/api";
function HomeScreen() {
  const [userLocation, setUserLocation] = React.useState({});
  const [recommendations, setRecommendations] = React.useState([]);
  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      try {
        const location = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = location.coords;
        setUserLocation({
          userLat: latitude,
          userLong: longitude,
        });
      } catch (error) {
        console.log("Error while fetching location:", error);
      }
    }
  };
  useEffect(() => {
    const handleRecommendation = async () => {
      try {
        const { data } = await axios.get(
          // `${BASE_URL}/main?lat=${userLocation.userLat}&lng=${userLocation.userLong}`
          `${BASE_URL}/arcades`
        );
        // console.log(data);
        setRecommendations(data);
      } catch (error) {
        console.error(error);
      }
    };
    handleRecommendation();
  }, []);

  requestLocationPermission();
  const navigation = useNavigation();

  const handlePage = (page) => {
    navigation.navigate(page);
  };
  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handlePage("ProfileDetail")}>
          <View style={styles.profileContainer}>
            <View style={styles.bannerContainer}>
              {/* Banner Image */}
              <Image source={bannerImage} style={styles.bannerImage} />
            </View>

            <View style={styles.profileCard}>
              <View style={styles.profileImageContainer}>
                {/* Circular Profile Image */}
                <Image source={userImage} style={styles.profileImage} />
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>John Doe</Text>
                <Text style={styles.profileFollowers}>1.5k Followers</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

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
            <TouchableOpacity onPress={() => handlePage("SearchAccount")}>
              <View style={styles.square}>
                <View
                  style={[styles.iconContainer, { backgroundColor: "#9DBDFB" }]}
                >
                  <Ionicons
                    name="person-add-outline"
                    size={24}
                    color="#FFFFFF"
                  />
                </View>
                <Text
                  style={[
                    styles.squareText,
                    {
                      fontSize: 6,
                    },
                  ]}
                >
                  Find Account
                </Text>
              </View>
            </TouchableOpacity>
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

        <Text style={styles.recommendationsText}>Recommendations</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recommendations?.map((recommendation) => (
            <TouchableOpacity
              onPress={() => handlePage("ArcadeDetail")}
              key={recommendation.id}
            >
              <View style={[styles.card, { marginBottom: 30 }]}>
                <Image
                  source={{ uri: recommendation.Brand.imageUrl }}
                  style={styles.cardImage}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardText}>{recommendation.name}</Text>
                  <Text style={styles.cardText}>☆☆☆☆☆</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
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
  profileContainer: {
    marginBottom: 20,
  },
  bannerContainer: {
    height: 150,
    marginBottom: -6,
    zIndex: 1,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImageContainer: {
    borderRadius: 40,
    overflow: "hidden",
  },
  profileImage: {
    width: 80,
    height: 80,
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 20,
    fontFamily: "PressStart2P_400Regular",
  },
  profileFollowers: {
    fontSize: 14,
    fontFamily: "PressStart2P_400Regular",
    color: "gray",
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
  recommendationsText: {
    fontFamily: "PressStart2P_400Regular",
    fontSize: 14,
    marginBottom: 10,
  },
  card: {
    width: 300,
    height: 200,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    marginRight: 10,
  },
  cardImage: {
    width: "100%",
    height: "60%",
    resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardContent: {
    padding: 10,
  },
  cardText: {
    fontFamily: "PressStart2P_400Regular",
    fontSize: 12,
  },
});

export default HomeScreen;
