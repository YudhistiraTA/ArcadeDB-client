import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";
import { useFonts } from "expo-font";
function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleViewMenu = () => {
    navigation.navigate("Menu");
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic
  };

  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/icon/arcadeIcon.png")}
          style={styles.image}
        />
        <Text style={[styles.title, { fontFamily: "PressStart2P_400Regular" }]}>
          Login
        </Text>

        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={[styles.input, { fontFamily: "PressStart2P_400Regular" }]}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed"
            size={24}
            color="gray"
            style={styles.icon}
          />
          <TextInput
            style={[styles.input, { fontFamily: "PressStart2P_400Regular" }]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleViewMenu}>
          <Text
            style={[
              styles.buttonText,
              { fontFamily: "PressStart2P_400Regular" },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={[styles.orText, { fontFamily: "PressStart2P_400Regular" }]}
        >
          Or
        </Text>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={handleGoogleLogin}
        >
          <Ionicons
            name="logo-google"
            size={24}
            color="white"
            style={styles.socialIcon}
          />
          <Text
            style={[
              styles.socialButtonText,
              { fontFamily: "PressStart2P_400Regular" },
            ]}
          >
            Login with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text
            style={[
              styles.signupText,
              { fontFamily: "PressStart2P_400Regular" },
            ]}
          >
            New To Us? Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF3E6",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 400,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: "#FEF9F4",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#64FCD9",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  buttonText: {
    color: "#6F6B65",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#6F6B65",
  },
  socialIcon: {
    marginRight: 10,
    color: "#0F9D58",
  },
  socialButtonText: {
    color: "#6F6B65",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  signupText: {
    marginTop: 10,
    color: "#6F6B65",
  },
});

export default LoginScreen;
