import React, { useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { fetchGame, fetchArcade } from "../Reducer/game";
import { ScrollView } from "react-native-gesture-handler";
import HeaderAD from "../components/header";

const GameList = () => {
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleFetchGame = async () => {
      await dispatch(fetchGame());
    };
    handleFetchGame();
  }, []);

  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={{ height: 90, width: "100%" }}>
        <HeaderAD />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text
            style={[styles.title, { fontFamily: "PressStart2P_400Regular" }]}
          >
            Game List
          </Text>

          {games[0]?.map((game) => (
            <View style={[styles.card, { marginBottom: 30 }]} key={game.id}>
              <Image source={{ uri: game.logoUrl }} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardText}>{game.name}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF3E6",
    padding: 16,
  },
  title: {
    color: "#6F6B65",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    flex: 1, // Occupy full width
    height: 200,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    marginBottom: 30,
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

export default GameList;
