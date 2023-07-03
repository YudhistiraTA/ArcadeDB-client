import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";

const SearchAccount = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [arcades, setArcades] = useState([]);
  const navigation = useNavigation();

  const handleDetail = (id) => {
    navigation.navigate("UserProfile", { id });
  };

  const handleSearch = () => {
    // Perform search action
    console.log("Search query:", searchQuery);

    // Filter the dummyUsers based on the searchQuery
    const filteredUsers = dummyUsers.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Update the arcades state with the filteredUsers
    setArcades(filteredUsers);
  };

  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  // Dummy data for testing
  const dummyUsers = [
    { id: 1, name: "John Doe", profileImage: "https://dummyurl.com/johndoe" },
    {
      id: 2,
      name: "Jane Smith",
      profileImage: "https://dummyurl.com/janesmith",
    },
    {
      id: 3,
      name: "Bob Johnson",
      profileImage: "https://dummyurl.com/bobjohnson",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={[
            styles.searchInput,
            { fontFamily: "PressStart2P_400Regular" },
          ]}
          placeholder="Search Friends..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.searchIcon} onPress={handleSearch}>
          <Image
            source={require("../assets/icon/searchIcon.png")}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={arcades}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleDetail(item.id)}
          >
            <Image
              source={{ uri: item.profileImage }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.flatlistContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF3E6",
    padding: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 15,
    marginRight: 8,
    fontSize: 12,
  },
  searchIcon: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    right: 10,
  },
  iconImage: {
    width: 24,
    height: 20,
  },
  flatlistContent: {
    paddingBottom: 16,
  },
  card: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
    elevation: 2,
  },
  cardImage: {
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default SearchAccount;
