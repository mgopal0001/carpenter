import React from "react";
import { View, Image } from "react-native";

export default function ImagePreview({ route }) {
	const { photoUri } = route.params;
	return (
		<View>
			<Image
				source={{ uri: photoUri }}
				style={{ height: "100%", width: "100%" }}
			/>
		</View>
	);
}
