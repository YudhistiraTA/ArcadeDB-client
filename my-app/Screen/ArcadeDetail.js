import React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Image } from "react-native";
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
        <View style={[styles.card, styles.bigCard]} />
        <View style={styles.smallSquareContainer}>
          <View style={styles.smallSquareRow}>
            
          </View>
          <View style={[styles.smallSquareRow, styles.smallCardRow]}>
            <View style={[styles.smallCard, styles.smallCardMargin]}>
              {/* Tambahkan komponen Image untuk menampilkan gambar */}
              <Image
                source={require('../assets/image/imagesArcade.png')} 
                style={styles.smallCardImage}
              />
            </View>
            <View style={[styles.smallCard, styles.smallCardMargin]}>
              {/* Tambahkan komponen Image untuk menampilkan gambar */}
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
  smallSquare: {
    width: 50,
    height: 50,
    backgroundColor: "#FDF3E6",
    justifyContent: "center", // Pusatkan gambar secara vertikal
    alignItems: "center", // Pusatkan gambar secara horizontal
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
    justifyContent: "center", // Pusatkan gambar secara vertikal
    alignItems: "center", // Pusatkan gambar secara horizontal
  },
  smallCardImage: {
    width: 80, // Ubah ukuran width sesuai keinginan Anda
    height: 80, // Ubah ukuran height sesuai keinginan Anda
    resizeMode: "cover",
    borderRadius: 40, // Sesuaikan radius sesuai keinginan Anda
  },
  smallCardMargin: {
    margin: 5,
  },
});

export default ArcadeDetail;
