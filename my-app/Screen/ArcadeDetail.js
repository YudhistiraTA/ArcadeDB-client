import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import MapView from "react-native-maps";

const { width, height } = Dimensions.get("window");

const ArcadeDetail = () => {
  const initialLatitude = -6.2088;
  const initialLongitude = 106.8456;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
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
            <Text style={styles.arcadeName}>Arcade Name</Text>
            <View style={styles.rateContainer}>
              <Text style={styles.rateText}>100 ☆☆☆☆☆</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.buttonText}>Book</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rateButton}>
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
            <View style={[styles.smallCard, styles.smallCardMargin]}>
              <Image
                source={require("../assets/image/imagesArcade.png")}
                style={styles.smallCardImage}
              />
              <Text>Game Name</Text>
            </View>
            <View style={[styles.smallCard, styles.smallCardMargin]}>
              <Image
                source={require("../assets/image/imagesArcade.png")}
                style={styles.smallCardImage}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
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
    fontSize: 12,
  },
  userScheduleContainer: {
    marginTop: 20,
  },
  userScheduleText: {
    marginBottom: 10,
  },
  circleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  circle1: {
    position: "absolute",
    top: -5,
    left: 0,
  },
  circle2: {
    position: "absolute",
    top: -5,
    left: 15,
  },
  circle3: {
    position: "absolute",
    top: -5,
    left: 30,
  },
  smallSquareContainer: {
    width: "100%",
    flexDirection: "column",
    padding: 10,
  },
  smallSquareRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  smallSquare: {
    width: 50,
    height: 50,
    backgroundColor: "#FDF3E6",
    justifyContent: "center",
    alignItems: "center",
  },
  smallSquareImage: {
    width: 30,
    height: 30,
    resizeMode: "cover",
    borderRadius: 15,
  },
  smallCardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: -20,
  },
  smallCard: {
    width: "45%",
    height: 150,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  smallCardImage: {
    width: 110,
    height: 110,
    resizeMode: "cover",
    borderRadius: 100,
  },
  smallCardMargin: {
    margin: 5,
  },
});

export default ArcadeDetail;
