import { React, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { fetchArcade } from "../Reducer/game";
import { ScrollView } from "react-native-gesture-handler";
import HeaderAD from "../components/header";
const ArcadeList = () => {
  const arcades = useSelector((state) => state.arcades);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleFetchArcade = async () => {
      await dispatch(fetchArcade());
    };
    handleFetchArcade();
  }, []);
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();
  const handleDetail = (id) => {
    console.log("first");
    navigation.navigate(`ArcadeDetail`, { id });
  };
  const handleSearch = () => {
    console.log("Search query:", searchQuery);
  };
  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <View style={{ height: 90, width: "100%" }}>
        <HeaderAD />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <TextInput
              style={[
                styles.searchInput,
                { fontFamily: "PressStart2P_400Regular" },
              ]}
              placeholder="Search Arcade Location..."
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
            <TouchableOpacity style={styles.searchIcon} onPress={handleSearch}>
              <Image
                source={require("../assets/icon/searchIcon.png")}
                style={styles.iconImage}
              />
            </TouchableOpacity>
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
          {arcades[0]?.map((arcade) => (
            <TouchableOpacity
              onPress={() => handleDetail(arcade.id)}
              key={arcade.id}
            >
              <View style={[styles.card]}>
                <Image
                  source={{ uri: arcade.Brand.imageUrl }}
                  style={styles.cardImage}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardText}>{arcade.name}</Text>
                  <Text style={styles.cardText}>
                    {arcade.rating === 0 || arcade.rating === 100
                      ? "★★★★★"
                      : null}

                    {arcade.rating === 80 && "★★★★☆"}
                    {arcade.rating === 60 && "★★★☆☆"}
                    {arcade.rating === 40 && "★★☆☆☆"}
                    {arcade.rating === 20 && "★☆☆☆☆"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDF3E6",
    padding: 16,
  },
  searchContainer: {
    marginTop: 10,
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
    marginBottom: 150,
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
  card: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    marginRight: 10,
    marginTop: -100,
    marginBottom: 150,
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
    color: "#000000",
    fontFamily: "PressStart2P_400Regular",
  },
});

export default ArcadeList;
