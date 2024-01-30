import React from "react";
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { users } from "../../constants/users"; // Assuming you have a users array

export default function WorkData({navigation}) {
	const renderItem = ({ item }) => (
		<TouchableOpacity onPress={() => navigation.navigate("Details", { item })}>
			<View style={styles.card}>
				<Text style={styles.userName}>{item.name}</Text>
				<Text style={styles.userAddress}>{item.address}</Text>
			</View>
		</TouchableOpacity>
	);

	return (
		<FlatList
			data={users}
			renderItem={renderItem}
			showsVerticalScrollIndicator={false}
			//   keyExtractor={(item) => item.id.toString()} // Use a unique key for each item
		/>
	);
}

const styles = StyleSheet.create({
	card: {
		padding: 10,
		height: 150, // Adjust the height based on your design
		width: "100%",
		marginLeft: "auto",
		marginRight: "auto",
		borderRadius: 18,
		marginBottom: 10,
		marginTop: 10,
		backgroundColor: "rgba(247, 230, 116, 0.74)",
	},
	userName: {
		fontSize: 18,
		textTransform: "capitalize",
	},
	userAddress: {
		fontSize: 16,
		color: "gray",
	},
});
