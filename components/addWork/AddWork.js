import * as MediaLibrary from "expo-media-library";
import { Camera } from "expo-camera";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";


export default function AddWork() {
	const [hasCameraPermission, setHasCameraPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
	const [capturedPhoto, setCapturedPhoto] = useState(null);
	const cameraRef = useRef(null);
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
				// Do something with the taken photo (e.g., save it, upload it, etc.)
				console.log("Photo taken:", photo);

				setCapturedPhoto(photo.uri);
			} catch (error) {
				console.error("Error taking photo:", error);
			}
		}
	};

	const handleRetakePhoto = () => {
		setCapturedPhoto(null);
	};

	const handleSavePhoto = () => {
		// Implement logic to save the photo
		navigation.navigate("Preview", { photoUri: capturedPhoto });
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
		
		height:'100%',
		justifyContent:'space-around',
		

	},
	previewImage: {
		height:'80%',
		width:'100%',
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
