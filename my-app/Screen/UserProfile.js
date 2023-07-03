import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const UserProfile = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF3E6",
  },
  bannerImage: {
    width: "100%",
    height: 150,
  },
  profileContainer: {
    alignItems: "center",
    paddingTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EEE",
    paddingVertical: 10,
  },
  stat: {
    alignItems: "center",
  },
  statCount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
    color: "gray",
  },
});

export default UserProfile;
