import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import userImage from "../assets/image/user3.png";
import bannerImage from "../assets/image/imagesArcade.png";
const UserProfile = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.profileContainer}>
          <View style={styles.bannerContainer}>
            <Image source={bannerImage} style={styles.bannerImage} />
          </View>

          <View style={styles.profileCard}>
            <View style={styles.profileImageContainer}>
              <Image source={userImage} style={styles.profileImage} />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>John Doe</Text>
              <Text style={styles.profileFollowers}>1.5k Followers</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {/* <View style={styles.profileContainer}>
        <Image
          source={require("../assets/image/user3.png")}
          style={styles.profileImage}
        />
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.bio}>Frontend Developer</Text>
        <View style={styles.statsContainer}>
          <TouchableOpacity onPress={handleFollow}>
            <View style={styles.stat}>
              <Text style={styles.statCount}>1.5k</Text>
              <Text style={styles.statLabel}>
                {isFollowing ? "Unfollow" : "Followers"}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFollow}>
            <View style={styles.stat}>
              <Text style={styles.statCount}>500</Text>
              <Text style={styles.statLabel}>
                {isFollowing ? "Unfollow" : "Following"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FDF3E6",
//   },
//   bannerImage: {
//     width: "100%",
//     height: 150,
//   },
//   profileContainer: {
//     alignItems: "center",
//     paddingTop: 20,
//   },
//   profileImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginBottom: 10,
//   },
//   username: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   bio: {
//     fontSize: 16,
//     color: "gray",
//     marginBottom: 20,
//   },
//   statsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     width: "100%",
//     borderTopWidth: 1,
//     borderBottomWidth: 1,
//     borderColor: "#EEE",
//     paddingVertical: 10,
//   },
//   stat: {
//     alignItems: "center",
//   },
//   statCount: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   statLabel: {
//     fontSize: 14,
//     color: "gray",
//   },
// });
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#FDF3E6",
    padding: 20,
  },
  profileContainer: {
    marginBottom: 20,
  },
  bannerContainer: {
    height: 150,
    marginBottom: -6,
    zIndex: 1,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImageContainer: {
    borderRadius: 40,
    overflow: "hidden",
  },
  profileImage: {
    width: 80,
    height: 80,
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 20,
    fontFamily: "PressStart2P_400Regular",
  },
  profileFollowers: {
    fontSize: 14,
    fontFamily: "PressStart2P_400Regular",
    color: "gray",
  },
});
export default UserProfile;
