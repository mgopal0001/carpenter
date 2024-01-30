import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";

const LogoutModal = ({ isVisible, onClose, onLogout }) => {
	const handleCancel = () => {
		onClose();
	};
	return (
		<Modal isVisible={isVisible} onBackdropPress={onClose}>
			<View style={styles.card}>
				<Text style={styles.question}>Are you sure you want to logout?</Text>
				<TouchableOpacity onPress={onLogout}>
					<View style={{ backgroundColor: "#FF074F", borderRadius: 5 }}>
						<Text style={styles.logoutButton}>Logout</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleCancel}>
					<View style={{ backgroundColor: "#FF074F", borderRadius: 5 }}>
						<Text style={styles.logoutButton}>Cancel</Text>
					</View>
				</TouchableOpacity>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: "white",
		borderRadius: 15,
		padding: 40,
		gap: 20,
	},
	question: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 22,
	},
	logoutButton: {
		color: "white",
		fontWeight: "bold",
		fontSize: 18,
		padding: 10,
		textAlign: "center",
	},
});

export default LogoutModal;
