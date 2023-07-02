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
import MapView from "react-native-maps";
import DatePicker from "react-native-datepicker";
import { fetchArcadeDetail } from "../Reducer/game";
import { useDispatch, useSelector } from "react-redux";
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
    // const handleFetchGame = async () => {
    //   await dispatch(fetchGame());
    // };
    // handleFetchGame();
  }, []);

  const initialLatitude = -6.2088;
  const initialLongitude = 106.8456;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [ratingModalVisible, setRatingModalVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

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
        />
        <View style={[styles.card, styles.bigCard]}>
          <View style={styles.headerContainer}>
            <Text style={styles.arcadeName}>{arcadesDetail[0]?.name}</Text>

            <View style={styles.rateContainer}>
              <Text style={styles.rateText}>
                {arcadesDetail[0]?.rating === 0 ||
                arcadesDetail[0]?.rating === 100
                  ? "★★★★★"
                  : null}

                {arcadesDetail[0]?.rating === 80 && "★★★★☆"}
                {arcadesDetail[0]?.rating === 60 && "★★★☆☆"}
                {arcadesDetail[0]?.rating === 40 && "★★☆☆☆"}
                {arcadesDetail[0]?.rating === 20 && "★☆☆☆☆"}
              </Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.bookButton}
              onPress={handleBookButton}
            >
              <Text style={styles.buttonText}>Book</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rateButton}
              onPress={handleRateButton}
            >
              <Text style={styles.rateButtonText}>Rate</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.userScheduleContainer}>
            <Text style={styles.userScheduleText}>User Schedule</Text>
            <View style={styles.circleContainer}>
              <Image
                source={require("../assets/image/user1.png")}
                style={[styles.circle, styles.circle3]}
              />
              <Image
                source={require("../assets/image/user2.png")}
                style={[styles.circle, styles.circle2]}
              />
              <Image
                source={require("../assets/image/user3.png")}
                style={[styles.circle, styles.circle1]}
              />
              <Text style={{ marginLeft: 80 }}>
                Didit and 8 users playing on 28 march 2023
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.smallSquareContainer}>
          <View style={[styles.smallSquareRow, styles.smallCardRow]}>
            {arcadesDetail[0]?.ArcadeGame?.map((arcade) => (
              <View
                key={arcade.id}
                style={[styles.smallCard, styles.smallCardMargin]}
              >
                <Image
                  source={{ uri: arcade.Game.logoUrl }}
                  style={styles.smallCardImage}
                />
                <Text>{arcade.Game.name}</Text>

                <TouchableOpacity
                  style={styles.rateButton}
                  onPress={handleRateButton}
                >
                  <Text style={styles.rateButtonText}>Rate</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
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
    height: 250,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "black",
    paddingHorizontal: 10,
    paddingTop: 10,
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
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  rateButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 12,
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
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    marginRight: -10,
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
    marginLeft: -10,
    borderWidth: 3,
    borderColor: "white",
  },
  circle3: {
    position: "absolute",
    zIndex: 1,
    borderWidth: 3,
    borderColor: "white",
  },
  smallSquareContainer: {
    width: "90%",
    height: 150,
    alignSelf: "center",
  },
  smallSquareRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallCardRow: {
    marginBottom: 10,
  },
  smallCard: {
    width: "48%",
    height: "100%",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  smallCardMargin: {
    marginRight: 0,
  },
  smallCardImage: {
    width: 60,
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
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  starButton: {
    marginHorizontal: 5,
  },
  starText: {
    fontSize: 24,
  },
});

export default ArcadeDetail;
