// Home.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "./styles";
import WorkData from "../workData/WorkData";

export default function Home() {
	const [selectedButton, setSelectedButton] = useState("InProgress");

	const handleButtonClick = (buttonName) => {
		setSelectedButton(buttonName);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Your Orders</Text>

			<View style={styles.buttonContainer}>
				<View
					style={[
						styles.buttonView,
						selectedButton === "InProgress" && styles.selectedButtonView,
					]}
				>
					<TouchableOpacity
						style={[
							styles.button,
							selectedButton === "InProgress" && styles.selectedButton,
						]}
						onPress={() => handleButtonClick("InProgress")}
					>
						<Text
							style={[
								styles.buttonText,
								selectedButton === "InProgress" && styles.selectedButtonText,
							]}
						>
							In Progress
						</Text>
					</TouchableOpacity>
				</View>

				<View
					style={[
						styles.buttonView,
						selectedButton === "Pending" && styles.selectedButtonView,
					]}
				>
					<TouchableOpacity
						style={[
							styles.button,
							selectedButton === "Pending" && styles.selectedButton,
						]}
						onPress={() => handleButtonClick("Pending")}
					>
						<Text
							style={[
								styles.buttonText,
								selectedButton === "Pending" && styles.selectedButtonText,
							]}
						>
							Pending
						</Text>
					</TouchableOpacity>
				</View>

				<View
					style={[
						styles.buttonView,
						selectedButton === "Completed" && styles.selectedButtonView,
					]}
				>
					<TouchableOpacity
						style={[
							styles.button,
							selectedButton === "Completed" && styles.selectedButton,
						]}
						onPress={() => handleButtonClick("Completed")}
					>
						<Text
							style={[
								styles.buttonText,
								selectedButton === "Completed" && styles.selectedButtonText,
							]}
						>
							Completed
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ height: "90%", marginTop: 10 }}>
				<WorkData></WorkData>
			</View>
		</View>
	);
}
