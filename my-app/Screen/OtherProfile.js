import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import userImage from "../assets/image/user3.png";
import bannerImage from "../assets/image/imagesArcade.png";
import HeaderAD from "../components/header";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OtherProfile = () => {
  const navigation = useNavigation();
  const handlePage = (page) => {
    navigation.navigate(page);
  };
  const handleFollow = () => {
    console.log("first");
  };
  const handleChat = () => {
    console.log("Chat button pressed");
  };
  const handlePressMessage = () => {
    navigation.navigate("Message", {});
  };

  return (
    <>
      <View style={{ height: 90, width: "100%" }}>
        <HeaderAD />
      </View>
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <Image source={bannerImage} style={styles.bannerImage} />
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileCard}>
            <View style={styles.profileImageContainer}>
              <Image source={userImage} style={styles.profileImage} />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName} numberOfLines={2}>
                Bagas Tama Putra
              </Text>
              <View style={styles.statsContainer}>
                <TouchableOpacity
                  style={styles.stat}
                  onPress={() => handlePage("Follower")}
                >
                  <Text style={styles.statValue}>1k</Text>
                  <Text style={styles.statLabel}>Followers</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.stat}
                  onPress={() => handlePage("Following")}
                >
                  <Text style={styles.statValue}>1.5k</Text>
                  <Text style={styles.statLabel}>Following</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.followButton]}
                  onPress={handleFollow}
                >
                  <Text style={styles.buttonText}>Follow</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.chatButton]}
                  onPress={handleChat}
                >
                  <Text
                    style={styles.buttonText}
                    onPress={() => handlePressMessage()}
                  >
                    Chat
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF3E6",
  },
  profileContainer: {
    marginTop: -80,
    paddingHorizontal: 20,
  },
  bannerContainer: {
    height: 200,
    backgroundColor: "#1877F2",
    marginBottom: 20,
  },
  bannerImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
  },
  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    elevation: 2,
  },
  profileImageContainer: {
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#1877F2",
    marginTop: -50,
  },
  profileImage: {
    width: 100,
    height: 100,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  stat: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
    color: "gray",
  },
  premiumStatus: {
    marginTop: 10,
    fontSize: 16,
    color: "#1877F2",
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#1877F2",
    borderRadius: 15,
    paddingVertical: 10,

    alignItems: "center",
    width: 75,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  followButton: {
    backgroundColor: "#1877F2",
  },
  chatButton: {
    backgroundColor: "#FCAF17",
  },
});

export default OtherProfile;
