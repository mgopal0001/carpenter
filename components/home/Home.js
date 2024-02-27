// Home.js
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import WorkData from "../workData/WorkData";
import { styles } from "./styles";

export default function Home() {
  const ordersType = {
    inProgress: "IN_PROGRESS",
    pending: "PENDING",
    completed: "COMPLETED",
  };

  const [selectedOrderType, setSelectedOrderType] = useState(
    ordersType.inProgress
  );

  const handleButtonClick = (buttonName) => {
    setSelectedOrderType(buttonName);
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Orders</Text>

      <View style={styles.buttonContainer}>
        <View
          style={[
            styles.buttonView,
            selectedOrderType === ordersType.inProgress &&
              styles.selectedButtonView,
          ]}
        >
          <TouchableOpacity
            style={[
              styles.button,
              selectedOrderType === ordersType.inProgress &&
                styles.selectedButton,
            ]}
            onPress={() => handleButtonClick(ordersType.inProgress)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedOrderType === ordersType.inProgress &&
                  styles.selectedButtonText,
              ]}
            >
              In Progress
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.buttonView,
            selectedOrderType === ordersType.pending &&
              styles.selectedButtonView,
          ]}
        >
          <TouchableOpacity
            style={[
              styles.button,
              selectedOrderType === ordersType.pending && styles.selectedButton,
            ]}
            onPress={() => handleButtonClick(ordersType.pending)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedOrderType === ordersType.pending &&
                  styles.selectedButtonText,
              ]}
            >
              Pending
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.buttonView,
            selectedOrderType === ordersType.completed &&
              styles.selectedButtonView,
          ]}
        >
          <TouchableOpacity
            style={[
              styles.button,
              selectedOrderType === ordersType.completed &&
                styles.selectedButton,
            ]}
            onPress={() => handleButtonClick(ordersType.completed)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedOrderType === ordersType.completed &&
                  styles.selectedButtonText,
              ]}
            >
              Completed
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: "90%", marginTop: 10 }}>
        <WorkData navigation={navigation} orderType={selectedOrderType}/>
      </View>
    </View>
  );
}
