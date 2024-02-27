import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "./configs";

// Save token
export const _saveToken = async (token) => {
  console.log({ token });
  try {
    await AsyncStorage.setItem("token", token);
    console.log("Token saved successfully");
  } catch (error) {
    console.error("Error saving token:", error);
  }
};

// Retrieve token
export const _getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token !== null) {
      console.log("Token retrieved successfully:", token);
      return token;
    } else {
      console.log("Token not found");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving token:", error);
    return null;
  }
};

export const _employeeLogin = async (payload) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/employee/login`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};
