import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
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
		height: 200,
		width: 200,
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
