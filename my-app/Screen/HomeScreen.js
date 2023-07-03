import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";
import { useFonts } from "expo-font";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import { fetchGame, fetchArcade } from "../Reducer/game";
import HeaderAD from "../components/header";
function HomeScreen() {
  const [userLocation, setUserLocation] = React.useState({});
  const recommendations = useSelector((state) => state.arcades);
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleFetchGame = async () => {
      await dispatch(fetchGame());
      await dispatch(fetchArcade());
    };
    handleFetchGame();
  }, []);
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
      <HeaderAD />
      <View style={styles.container}>
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
            <TouchableOpacity onPress={() => handlePage("Bookmark")}>
              <View style={styles.square}>
                <View
                  style={[styles.iconContainer, { backgroundColor: "#EBB3C3" }]}
                >
                  <Ionicons name="bookmark-outline" size={24} color="#FFFFFF" />
                </View>
                <Text style={styles.squareText}>Bookmark</Text>
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
        <Text style={styles.recommendationsText}>Recommendation Arcades</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recommendations[0]?.map((recommendation) => (
            <TouchableOpacity key={recommendation.id}>
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
        <Text style={styles.recommendationsText}>Recommendation Games</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {games[0]?.map((game) => (
            <TouchableOpacity key={game.id}>
              <View style={[styles.card, { marginBottom: 30 }]}>
                <Image
                  source={{ uri: game.logoUrl }}
                  style={styles.cardImage}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardText}>{game.name}</Text>
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
    elevation: 20,
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
    elevation: 5,
  },
  cardImage: {
    width: "100%",
    height: "60%",
    resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardContent: {
    marginTop: 10,
    padding: 10,
  },
  cardText: {
    fontFamily: "PressStart2P_400Regular",
    fontSize: 12,
  },
});

export default HomeScreen;
