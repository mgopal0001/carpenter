import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function WorkDetails({ route }) {
	const { item } = route.params;
    const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<View>
				<Text
					style={{
						textAlign: "center",
						textTransform: "capitalize",
						fontSize: 30,
					}}
				>
					{item.name}
				</Text>
				<Text style={{ textAlign: "center" }}>{item.address}</Text>
			</View>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("Add Work");
				}}
			>
				<View style={styles.addWorkButton}>
					<Text
						style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
					>
						Add New Work
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: "100%",
		justifyContent: "space-between",
		padding: 10,
	},
	addWorkButton: {
		backgroundColor: "#E30F4D",
		padding: 10,
		borderRadius: 10,
	},
});
