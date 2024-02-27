import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import React, { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AddWork({ route }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const cameraRef = useRef(null);
  const { orderId } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setCapturedPhoto(photo.uri);
      } catch (error) {
        console.error("Error taking photo:", error);
      }
    }
  };

  useEffect(() => {
    console.log({ capturedPhoto });
  }, [capturedPhoto]);

  const handleRetakePhoto = () => {
    setCapturedPhoto(null);
  };

  const handleSavePhoto = () => {
    navigation.navigate("Preview", { photo: capturedPhoto, orderId: orderId });
  };

  return (
    <View>
      {hasCameraPermission ? (
        <>
          {!capturedPhoto ? (
            <Camera
              style={styles.camera}
              type={type}
              flashMode={flash}
              ref={cameraRef}
            >
              <TouchableOpacity
                onPress={handleTakePhoto}
                style={styles.captureButton}
              >
                <FontAwesome name="camera" size={50} color="white" />
              </TouchableOpacity>
            </Camera>
          ) : (
            <View style={styles.previewContainer}>
              <View>
                <Image
                  source={{ uri: capturedPhoto }}
                  style={styles.previewImage}
                ></Image>
              </View>

              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  onPress={handleRetakePhoto}
                  style={styles.button}
                >
                  <View>
                    <Text style={styles.buttonText}>Retake Photo</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleSavePhoto}
                  style={styles.button}
                >
                  <View>
                    <Text style={styles.buttonText}>Save</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </>
      ) : (
        <Text>No camera permission</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    height: "100%",
    width: "100%",
  },
  captureButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#E30F4D",
    padding: 15,
    borderRadius: 50,
  },
  captureButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  previewContainer: {
    height: "100%",
    justifyContent: "space-around",
  },
  previewImage: {
    height: "80%",
    width: "100%",
    resizeMode: "contain",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#E30F4D",
    padding: 15,
    borderRadius: 10,
    width: 150,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
