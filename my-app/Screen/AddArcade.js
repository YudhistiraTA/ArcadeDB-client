import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { fetchGame, fetchArcade, fetchBrand } from "../Reducer/game";

const CreateScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedLogo, setSelectedLogo] = useState("");
  const [checkboxItems, setCheckboxItems] = useState([false, false, false]);
  const games = useSelector((state) => state.games);
  const brands = useSelector((state) => state.brands);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleFetchGame = async () => {
      await dispatch(fetchGame());
    };
    handleFetchGame();
    const handleFetchBrand = async () => {
      await dispatch(fetchBrand());
    };
    handleFetchBrand();
  }, []);
  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleLogoChange = (logo) => {
    setSelectedLogo(logo);
  };

  const handleCheck = (index) => {
    const updatedItems = [...checkboxItems];
    updatedItems[index] = !updatedItems[index];
    setCheckboxItems(updatedItems);
  };

  const handleSubmit = () => {
    // Implement logic to handle form submission
    console.log("Form submitted!");
    console.log("Input Value:", inputValue);
    console.log("Selected Logo:", selectedLogo);
    console.log("Checkbox Items:", checkboxItems);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.selectLabel}>Pick Location:</Text>
        <TextInput
          style={styles.input}
          placeholder="Input Value"
          value={inputValue}
          onChangeText={handleInputChange}
        />
        <Text style={styles.resultText}>{inputValue}</Text>

        <View style={styles.selectContainer}>
          <Text style={styles.selectLabel}>Select Logo:</Text>
          <View style={styles.selectInput}>
            {brands[0]?.map((brand) => (
              <TouchableOpacity
                style={styles.logoOption}
                onPress={() => handleLogoChange(brand.name)}
                key={brand.id}
              >
                {selectedLogo === brand.name && (
                  <View style={styles.logoSelected} />
                )}
                <Text>{brand.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.tableContainer}>
          <Text style={styles.selectLabel}>Add Games:</Text>
          {games[0]?.map((game, index) => (
            <View style={styles.tableRow} key={index}>
              <CheckBox
                checked={checkboxItems[index]}
                onPress={() => handleCheck(index)}
              />
              <Text>{game.name}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF3E6",
    paddingHorizontal: 24,
    paddingTop: 36,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    padding: 8,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 16,
  },
  selectContainer: {
    marginBottom: 24,
  },
  selectLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  selectInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    padding: 8,
  },
  logoOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  logoSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "blue",
    marginRight: 8,
  },
  tableContainer: {
    marginBottom: 16,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#64FCD9",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CreateScreen;
