import React, { useState } from "react";
import { View, StyleSheet, Dimensions, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const { width, height } = Dimensions.get("window");

const ArcadeDetail = () => {
  const initialLatitude = -6.2088;
  const initialLongitude = 106.8456;
  const [searchText, setSearchText] = useState("");
  const [destination, setDestination] = useState(null);

  const handleSearch = () => {
    if (searchText.trim() === "") {
      console.log("Please enter a valid location");
      return;
    }

    // Menggunakan Google Geocoding API untuk mendapatkan koordinat latitude dan longitude
    const apiKey = "AIzaSyCCaF5BIPEwpDOHTgGtWoGqe0qW_Udm7ms";
    const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      searchText
    )}&key=${apiKey}`;

    fetch(geocodingUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK" && data.results.length > 0) {
          const result = data.results[0];
          const { lat, lng } = result.geometry.location;
          setDestination({ latitude: lat, longitude: lng });
        } else {
          console.log("Location not found");
        }
      })
      .catch((error) => {
        console.log("Error retrieving location data:", error);
      });
  };

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
        >
          {destination && (
            <>
              <Marker coordinate={destination} />
              <MapViewDirections
                origin={{ latitude: initialLatitude, longitude: initialLongitude }}
                destination={destination}
                apikey="AIzaSyCCaF5BIPEwpDOHTgGtWoGqe0qW_Udm7ms"
                strokeWidth={3}
                strokeColor="blue"
              />
            </>
          )}
        </MapView>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Location"
            onChangeText={setSearchText}
            value={searchText}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Image
              source={require('../assets/icon/searchIcon.png')}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.card, styles.bigCard]} />
        <View style={styles.smallSquareContainer}>
          <View style={styles.smallSquareRow}></View>
          <View style={[styles.smallSquareRow, styles.smallCardRow]}>
            <View style={[styles.smallCard, styles.smallCardMargin]}>
              <Image
                source={require('../assets/image/imagesArcade.png')} 
                style={styles.smallCardImage}
              />
            </View>
            <View style={[styles.smallCard, styles.smallCardMargin]}>
              <Image
                source={require('../assets/image/imagesArcade.png')} 
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
  },
  bigCard: {
    marginBottom: 20,
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
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 40,
  },
  smallCardMargin: {
    margin: 5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  searchButton: {
    padding: 8,
  },
  searchIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});

export default ArcadeDetail;
