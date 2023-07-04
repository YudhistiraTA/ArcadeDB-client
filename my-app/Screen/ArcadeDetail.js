import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import DatePicker from "react-native-datepicker";
import { fetchArcade, fetchArcadeDetail } from "../Reducer/game";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../config/api";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width, height } = Dimensions.get("window");

const ArcadeDetail = ({ route }) => {
  const { id } = route.params;

  const arcadesDetail = useSelector((state) => state.arcadesDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleArcadeDetail = async (id) => {
      await dispatch(fetchArcadeDetail(id));
    };
    handleArcadeDetail(id);
  }, [id]);

  const arcade = arcadesDetail.find((arcade) => arcade.id === id);
  const initialLatitude = arcade ? arcade.lat : -6.2088;
  const initialLongitude = arcade ? arcade.lng : 106.8456;

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [ratingModalVisible, setRatingModalVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookButton = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleRateButton = () => {
    setRatingModalVisible(true);
  };

  const handleRatingModalClose = () => {
    setRatingModalVisible(false);
  };

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
    setRatingModalVisible(false);
  };

  const addBookmark = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      if (token) {
        const config = {
          headers: {
            access_token: token,
          },
        };

        const response = await axios.post(
          `${BASE_URL}/bookmarks/${id}`,
          null,
          config
        );
        // Handle the response, update the bookmark state, or perform any other necessary actions
        console.log("Bookmark added successfully");
      } else {
        // Handle the case when the token is not available in AsyncStorage
        console.log("Token not found");
      }
    } catch (error) {
      // Handle any errors that occur during the bookmark addition
      console.log("Error adding bookmark", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container} key={arcadesDetail[0]?.id}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: initialLatitude,
            longitude: initialLongitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: initialLatitude,
              longitude: initialLongitude,
            }}
            title={arcadesDetail[0]?.name}
          />
        </MapView>
        <View style={[styles.card, styles.bigCard]}>
          <View style={styles.headerContainer}>
            <Text style={styles.arcadeName}>
              {arcadesDetail.find((arcade) => arcade.id === id)?.name || ""}
            </Text>
            <View style={styles.rateContainer}>
              <Text style={styles.rateText}>
                {arcadesDetail.find((arcade) => arcade.id === id)?.rating ===
                  0 ||
                arcadesDetail.find((arcade) => arcade.id === id)?.rating === 100
                  ? "★★★★★"
                  : null}
                {arcadesDetail.find((arcade) => arcade.id === id)?.rating ===
                  100 && "★★★★★"}
                {arcadesDetail.find((arcade) => arcade.id === id)?.rating ===
                  80 && "★★★★☆"}
                {arcadesDetail.find((arcade) => arcade.id === id)?.rating ===
                  60 && "★★★☆☆"}
                {arcadesDetail.find((arcade) => arcade.id === id)?.rating ===
                  40 && "★★☆☆☆"}
                {arcadesDetail.find((arcade) => arcade.id === id)?.rating ===
                  20 && "★☆☆☆☆"}
              </Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.bookButton, { marginRight: 10 }]}
              onPress={handleBookButton}
            >
              <Text style={styles.buttonText}>Book</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={addBookmark}
              style={
                isBookmarked
                  ? styles.bookmarkButtonActive
                  : styles.bookmarkButton
              }
            >
              <Text
                style={
                  isBookmarked ? styles.bookmarkTextActive : styles.bookmarkText
                }
              >
                {isBookmarked ? "Bookmarked" : "Bookmark"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.rateButton, { marginRight: 10 }]}
              onPress={handleRateButton}
            >
              <Text style={styles.rateButtonText}>Rate</Text>
            </TouchableOpacity>
          </View>
          {Object.entries(arcadesDetail[0]?.Session).map(([key, value]) => (
            <View key={key} style={styles.circleContainer}>
              {value.map((user, index) => (
                <Image
                  key={index}
                  source={require("../assets/image/user1.png")}
                  style={[styles.circle, styles[`circle${index + 1}`]]}
                />
              ))}
              <Text style={{ marginLeft: 100 }}>
                {value.map((user) => user.User).join(" and ")} playing on {key}
              </Text>
            </View>
          ))}
        </View>
        <View style={[styles.smallSquareRow, styles.smallCardRow]}>
          {arcadesDetail[0]?.ArcadeGame?.map((arcade) => (
            <View
              key={arcade.Game.id}
              style={[styles.smallCard, styles.smallCardMargin]}
            >
              <Image
                source={{ uri: arcade.Game.logoUrl }}
                style={styles.smallCardImage}
              />
              <Text style={{ textAlign: "center" }}>{arcade.Game.name}</Text>
              <TouchableOpacity
                style={styles.rateGameButton}
                onPress={handleRateButton}
              >
                <Text style={styles.rateButton2Text}>Inacurate</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={handleModalClose}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Select Date:</Text>
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                placeholder="YYYY-MM-DD"
                value={selectedDate}
                onChangeText={handleDateChange}
              />
              <Button title="Close" onPress={handleModalClose} />
            </View>
          </View>
        </Modal>

        <Modal
          visible={ratingModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={handleRatingModalClose}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Rate this arcade:</Text>
              <View style={styles.ratingContainer}>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <TouchableOpacity
                    key={rating}
                    style={styles.starButton}
                    onPress={() => handleRatingSelect(rating)}
                  >
                    <Text style={styles.starText}>{rating}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <Button title="Close" onPress={handleRatingModalClose} />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#FDF3E6",
  },
  container: {
    flex: 1,
  },
  map: {
    width: width,
    height: height / 3,
  },
  card: {
    width: "90%",
    height: "auto",
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "black",
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  bigCard: {
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arcadeName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  rateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rateText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  rateButton: {
    backgroundColor: "#FDF3E6",
    borderRadius: 5,
    marginBottom: 10,
    height: 20,
    width: 80,
    marginTop: 5,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
  },
  rateGameButton: {
    backgroundColor: "gray",
    borderRadius: 5,
    marginBottom: 10,
    height: 20,
    width: 80,
    marginTop: 5,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
  },
  rateButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  rateButton2Text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  bookButton: {
    backgroundColor: "#FDF3E6",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  userScheduleContainer: {
    marginTop: 10,
  },
  userScheduleText: {
    fontWeight: "bold",
  },
  circleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  circle1: {
    position: "absolute",
    zIndex: 3,
    marginLeft: 0,
    borderWidth: 3,
    borderColor: "white",
  },
  circle2: {
    position: "absolute",
    zIndex: 2,
    marginLeft: 20,
    borderWidth: 3,
    borderColor: "white",
  },
  circle3: {
    position: "absolute",
    zIndex: 1,
    marginLeft: 40,
    borderWidth: 3,
    borderColor: "white",
  },
  smallSquareContainer: {
    width: "90%",
    height: 150,
    alignSelf: "center",
  },
  smallSquareRow: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  smallCardRow: {
    marginBottom: 10,
  },
  smallCard: {
    width: "45%",
    height: "100%",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    paddingTop: 10,
  },
  smallCardMargin: {
    marginRight: 0,
  },
  smallCardImage: {
    width: "100%",
    height: 60,
    alignSelf: "center",
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  starButton: {
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  starText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bookmark: {
    fontWeight: "bold",
    color: "gray",
    marginTop: 5,
  },
  bookmarkButton: {
    backgroundColor: "#FDF3E6",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,

    borderColor: "black",
    alignSelf: "flex-start",
  },
  bookmarkText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },
  bookmarkActive: {
    fontWeight: "bold",
    color: "green",
    marginTop: 5,
  },
});

export default ArcadeDetail;
