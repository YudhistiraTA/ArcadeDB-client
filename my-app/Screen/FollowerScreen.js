import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const FollowerList = () => {
  const followers = [
    {
      username: "JohnDoe",
      fullName: "John Doe",
      profilePicture: require("../assets/image/user1.png"),
    },
    {
      username: "JaneSmith",
      fullName: "Jane Smith",
      profilePicture: require("../assets/image/user2.png"),
    },
    {
      username: "MikeJohnson",
      fullName: "Mike Johnson",
      profilePicture: require("../assets/image/user3.png"),
    },
    // Add more followers as needed
  ];

  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  const Navigation = useNavigation();
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Follower List</Text>
      <ScrollView>
        {followers.map((follower, index) => (
          <TouchableOpacity key={index} activeOpacity={0.6}>
            <View style={styles.followerContainer}>
              <View style={styles.profilePictureContainer}>
                <Image
                  source={follower.profilePicture}
                  style={styles.profilePicture}
                />
              </View>
              <View style={styles.followerContent}>
                <Text style={styles.username}>{follower.username}</Text>
                <Text style={styles.fullName}>{follower.fullName}</Text>
              </View>
            </View>
            {index < followers.length - 1 && <View style={styles.separator} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF3E6",
    paddingHorizontal: 16,
    paddingTop: 36,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    fontFamily: "PressStart2P_400Regular",
  },
  followerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePictureContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: "hidden",
    marginRight: 16,
  },
  profilePicture: {
    width: "100%",
    height: "100%",
  },
  followerContent: {
    flex: 1,
  },
  username: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
  fullName: {
    fontSize: 12,
    color: "#555555",
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#555555",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default FollowerList;
