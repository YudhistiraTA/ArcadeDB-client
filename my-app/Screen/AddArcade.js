import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";

const CreateScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedLogo, setSelectedLogo] = useState("");
  const [checkboxItems, setCheckboxItems] = useState([false, false, false]);

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
          <TouchableOpacity
            style={styles.logoOption}
            onPress={() => handleLogoChange("Logo 1")}
          >
            {selectedLogo === "Logo 1" && <View style={styles.logoSelected} />}
            <Text>Logo 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoOption}
            onPress={() => handleLogoChange("Logo 2")}
          >
            {selectedLogo === "Logo 2" && <View style={styles.logoSelected} />}
            <Text>Logo 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoOption}
            onPress={() => handleLogoChange("Logo 3")}
          >
            {selectedLogo === "Logo 3" && <View style={styles.logoSelected} />}
            <Text>Logo 3</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tableContainer}>
        <Text style={styles.selectLabel}>Add Games:</Text>
        <View style={styles.tableRow}>
          <CheckBox checked={checkboxItems[0]} onPress={() => handleCheck(0)} />
          <Text>Checkbox 1</Text>
        </View>
        <View style={styles.tableRow}>
          <CheckBox checked={checkboxItems[1]} onPress={() => handleCheck(1)} />
          <Text>Checkbox 2</Text>
        </View>
        <View style={styles.tableRow}>
          <CheckBox checked={checkboxItems[2]} onPress={() => handleCheck(2)} />
          <Text>Checkbox 3</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
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
