import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import ImagePicker from "react-native-image-picker";
import userImage from "../assets/image/user3.png";
import bannerImage from "../assets/image/imagesArcade.png";
import HeaderAD from "../components/header";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrand } from "../Reducer/game";

const UserProfile = () => {
  const [selectedLogo, setSelectedLogo] = useState("");
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const brands = useSelector((state) => state.brands);
  const dispatch = useDispatch();
  const handleLogoChange = (logo) => {
    setSelectedLogo(logo);
  };
  useEffect(() => {
    dispatch(fetchBrand());
  }, []);
  const handlePage = (page) => {
    navigation.navigate(page);
  };

  const handleEditUser = () => {
    setModalVisible(true);
  };

  const handleSaveUser = () => {
    // Code to save the updated user profile
    setModalVisible(false);
  };

  const clearAccessToken = async () => {
    try {
      await AsyncStorage.removeItem("access_token");
      navigation.navigate("Dashboard");
      console.log("Access token cleared successfully");
    } catch (error) {
      console.log("Error clearing access token", error);
    }
  };

  const handleLogout = () => {
    clearAccessToken();
    navigation.navigate("Login");
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
              {profilePicture ? (
                <Image
                  source={{ uri: profilePicture }}
                  style={styles.profileImage}
                />
              ) : (
                <Image source={userImage} style={styles.profileImage} />
              )}
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
              <Text style={styles.premiumStatus}>Premium User</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.editButton]}
              onPress={handleEditUser}
            >
              <Text style={styles.buttonText}>Edit User</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.logoutButton]}
              onPress={handleLogout}
            >
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit User</Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableOpacity>
            <View style={styles.modalForm}>
              <Text style={styles.modalLabel}>Username:</Text>
              <TextInput
                style={styles.modalInput}
                value={newUsername}
                onChangeText={setNewUsername}
              />
              <Text style={styles.modalLabel}>Profile Picture:</Text>
              <View style={styles.selectContainer}>
                <Text style={styles.selectLabel}>Select Logo:</Text>
                <View style={styles.selectInput}>
                  {brands[0]?.map((brand) => (
                    <TouchableOpacity
                      style={[
                        styles.logoOption,
                        selectedLogo === brand.id && styles.logoSelected,
                      ]}
                      onPress={() => handleLogoChange(brand.id)}
                      key={brand.id}
                    >
                      {selectedLogo === brand.id && (
                        <View style={styles.logoDot} />
                      )}
                      <Text>{brand.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              <TouchableOpacity
                style={styles.modalSaveButton}
                onPress={handleSaveUser}
              >
                <Text style={styles.modalSaveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  },
  button: {
    backgroundColor: "#1877F2",
    borderRadius: 15,
    paddingVertical: 10,
    marginHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "#1877F2",
  },
  logoutButton: {
    backgroundColor: "#FF0000",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    width: "80%",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalCloseButton: {
    alignSelf: "flex-end",
    padding: 5,
  },
  modalCloseButtonText: {
    color: "#1877F2",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalForm: {
    marginTop: 20,
  },
  modalLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },

  modalSaveButton: {
    backgroundColor: "#1877F2",
    borderRadius: 15,
    paddingVertical: 10,
    alignItems: "center",
  },
  modalSaveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectContainer: {
    marginBottom: 20,
  },
  selectLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  selectInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
  },
  logoOption: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  logoSelected: {
    borderRadius: 4,
    backgroundColor: "#1877F2",
    marginRight: 10,
  },
  logoDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#1877F2",
    marginRight: 10,
  },
});

export default UserProfile;
