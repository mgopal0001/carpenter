import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	linearGradient: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
	},
	container: {
		flex: 1,
		alignItems: "center",
		marginTop: 20,
	},
	loginContainer: {
		backgroundColor: "white",
		height: 400,
		width: "94%",
		borderRadius: 30,
		justifyContent: "space-around",
		gap: 60,
	},
	heading: {
		textAlign: "center",
		fontSize: 28,
	},
	emailInput: {
		height: 40,
		margin: 12,
		borderBottomWidth: 1,
		padding: 10,
		marginBottom: 30,
	},
	passwordInput: {
		height: 40,
		margin: 12,
		borderBottomWidth: 1,
		padding: 10,
	},
	loginButton: {
		backgroundColor: "#FF074F",
		borderRadius: 10,
		padding: 10,
		marginRight: 10,
		marginLeft: 10,
	},
});
