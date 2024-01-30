// LogoutScreen.js
import React, { useState } from "react";
import { View, Text } from "react-native";
import LogoutModal from "../modal/LogoutModal";

const LogoutScreen = ({ navigation }) => {
	const [isModalVisible, setIsModalVisible] = useState(true);
	const handleLogout = () => {
		// Your logout logic goes here
		// Navigate to the Login screen
		navigation.reset({
			index: 0,
			routes: [{ name: "Login" }],
		});
	};
	const handleCloseModal = () => {
		navigation.reset({
			index: 0,
			routes: [{ name: "Dashboard" }],
		});
	};

	return (
		<View>
			<LogoutModal
				isVisible={isModalVisible}
				onLogout={handleLogout}
				onClose={handleCloseModal}
			/>
		</View>
	);
};

export default LogoutScreen;
