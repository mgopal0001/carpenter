import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { _saveOrderItem } from "../../../network/item";

export default function ImagePreview({ route }) {
  const { photo, orderId } = route.params;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedHeightDimension, setSelectedHeightDimension] = useState(null);
  const [selectedWidthDimension, setSelectedWidthDimension] = useState(null);
  const [selectedOtherDimension, setSelectedOtherDimension] = useState(null);
  const [showDimensionPicker, setShowDimensionPicker] = useState(false);

  const DIMENSION_UNITS = [
    {
      value: "in",
    },
    {
      value: "cm",
    },
    {
      value: "meter",
    },
    {
      value: "feet",
    },
  ];

  const ITEM_DIMENSIONS = [
    {
      label: "Length",
      unit: "in",
      value: "",
    },
    {
      label: "Breadth",
      unit: "in",
      value: "",
    },
    {
      label: "Other",
      unit: "in",
      value: "",
    },
  ];

  const [dimensions, setDimensions] = useState(ITEM_DIMENSIONS);
  const handleCategoryChange = (itemValue) => {
    setSelectedCategory(itemValue);
    setShowDimensionPicker(true);
  };

  const getInputFieldsOfAddedItem = () => {
    const payload = {
      itemName: selectedCategory,
      properties: [],
      photo: photo,
    };

    dimensions.map((dimension) => {
      payload.properties.push({
        key: `${dimension.label} (${dimension.unit})`,
        value: `${dimension.value}`,
      });
    });
    return payload;
  };

  const handleDimension = (inputText, _index) => {
    setDimensions((prevState) => {
      return prevState.map((dimension, index) => {
        if (index === _index) {
          return {
            ...dimension,
            value: inputText,
          };
        }
        return { ...dimension };
      });
    });
  };

  const handleUnitChange = (input, _index) => {
    setDimensions((prevState) => {
      return prevState.map((dimension, index) => {
        if (index === _index) {
          return {
            ...dimension,
            unit: input,
          };
        }
        return {
          ...dimension,
        };
      });
    });
  };

  const saveOrderItem = () => {
    const orderDetails = getInputFieldsOfAddedItem();
    _saveOrderItem(orderDetails, orderId)
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <View style={styles.previewContainer}>
      <Image source={{ uri: photo }} style={styles.productImage} />
      <View style={styles.formContainer}>
        <View style={styles.selectContainer}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={handleCategoryChange}
            style={styles.picker}
          >
            <Picker.Item label="Select item" value="" />
            <Picker.Item label="Window" value="window" />
            <Picker.Item label="Door" value="door" />
          </Picker>
        </View>

        {showDimensionPicker && (
          <>
            <View style={styles.selectFormContainer}>
              {showDimensionPicker && (
                <>
                  {dimensions.map((dimension, index) => (
                    <View style={styles.inputContainer}>
                      <View style={styles.formTextContainer}>
                        <Text style={{ fontWeight: "bold" }}>
                          {dimension.label}:
                        </Text>
                      </View>
                      <TextInput
                        style={styles.inputBox}
                        keyboardType="numeric"
                        placeholder={`Enter ${dimension.label}`}
                        onChangeText={(inputText) =>
                          handleDimension(inputText, index)
                        }
                        value={dimension.value}
                      />
                      <View style={{}}>
                        <Picker
                          selectedValue={dimension.unit}
                          onValueChange={(input) =>
                            handleUnitChange(input, index)
                          }
                          style={styles.dimensionPicker}
                        >
                          {DIMENSION_UNITS.map((unit) => (
                            <Picker.Item
                              key={unit.value}
                              label={unit.value}
                              value={unit.value}
                            />
                          ))}
                        </Picker>
                      </View>
                    </View>
                  ))}
                </>
              )}
            </View>
            <View>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => {
                  saveOrderItem();
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  previewContainer: {
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
    gap: 20,
    padding: 10,
  },
  productImage: {
    height: "60%",
    width: "100%",
    borderWidth: 2,
    borderColor: "gray",
  },
  selectContainer: {
    borderRadius: 5,
    backgroundColor: "#FF074F",
    alignItems: "center",
    justifyContent: "center",
  },
  picker: {
    height: 40,
    width: 300,
    color: "white",
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 10,
  },
  inputBox: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
    padding: 5,
    marginLeft: 10,
  },
  dimensionPicker: {
    height: 10,
    width: 150,
    borderWidth: 1,
    borderColor: "gray",
  },
  saveButton: {
    backgroundColor: "#FF074F",
    borderRadius: 10,
    padding: 10,
  },
  formTextContainer: {
    width: 60,
  },
});
