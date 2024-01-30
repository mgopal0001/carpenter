import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	header: {
		color: "#E30F4D",
		fontSize: 30,
		textAlign: "center",
	},
	buttonContainer: {
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "space-around",
		gap: 20,
	},
	buttonView: {
		flex: 1,
		backgroundColor: "white", // Default background color
		borderRadius: 30,
		overflow: "hidden", // Clip the border radius
	},
	selectedButtonView: {
		backgroundColor: "#E30F4D",
	},
	button: {
		padding: 8,
		borderRadius: 5,
	},
	selectedButton: {
		backgroundColor: "#E30F4D",
	},
	buttonText: {
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
	selectedButtonText: {
		color: "white",
	},
});
