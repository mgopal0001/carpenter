import React, { useState } from "react";
import {
	View,
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function ImagePreview({ route }) {
	const { photoUri } = route.params;
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [selectedHeightDimension, setSelectedHeightDimension] = useState(null);
	const [selectedWidthDimension, setSelectedWidthDimension] = useState(null);
	const [selectedOtherDimension, setSelectedOtherDimension] = useState(null);
	const [showDimensionPicker, setShowDimensionPicker] = useState(false);

	const handleCategoryChange = (itemValue) => {
		setSelectedCategory(itemValue);
		// You can set dimensions based on the selected category if needed
		// For example, you can fetch dimensions from an API based on the selected category
		// For now, let's just show the second picker when a category is selected
		setShowDimensionPicker(true);
	};

	const handleHeightDimensionChange = (itemValue) => {
		setSelectedHeightDimension(itemValue);
	};
	const handleWidthDimensionChange = (itemValue) => {
		setSelectedWidthDimension(itemValue);
	};
	const handleOtherDimensionChange = (itemValue) => {
		setSelectedOtherDimension(itemValue);
	};

	return (
		<View style={styles.previewContainer}>
			<Image source={{ uri: photoUri }} style={styles.productImage} />
			<View style={styles.formContainer}>
				<View style={styles.selectContainer}>
					<Picker
						selectedValue={selectedCategory}
						onValueChange={handleCategoryChange}
						style={styles.picker}
					>
						<Picker.Item label="Select item" value="" />
						<Picker.Item label="Window" value="window" />
						<Picker.Item label="Door" value="door" />
					</Picker>
				</View>

				{showDimensionPicker && (
					<>
						<View style={styles.selectFormContainer}>
							{showDimensionPicker && (
								<>
									<View style={styles.inputContainer}>
										<View style = {styles.formTextContainer}>
											<Text style={{ fontWeight: "bold" }}>Height:</Text>
										</View>
										<TextInput
											style={styles.inputBox}
											keyboardType="numeric"
											placeholder="Enter height"
										/>
										<View style={{}}>
											<Picker
												selectedValue={selectedHeightDimension}
												onValueChange={handleHeightDimensionChange}
												style={styles.dimensionPicker}
											>
												<Picker.Item label="in" value="inch" />
												<Picker.Item label="cm" value="cm" />
												<Picker.Item label="mtr" value="meter" />
											</Picker>
										</View>
									</View>

									<View style={styles.inputContainer}>
										<View style = {styles.formTextContainer}>
											<Text style={{ fontWeight: "bold" }}>Width:</Text>
										</View>
										<TextInput
											style={styles.inputBox}
											keyboardType="numeric"
											placeholder="Enter width"
										/>
										<View style={{}}>
											<Picker
												selectedValue={selectedWidthDimension}
												onValueChange={handleWidthDimensionChange}
												style={styles.dimensionPicker}
											>
												<Picker.Item label="in" value="inch" />
												<Picker.Item label="cm" value="cm" />
												<Picker.Item label="mtr" value="meter" />
											</Picker>
										</View>
									</View>

									<View style={styles.inputContainer}>
										<View style = {styles.formTextContainer}>
											<Text style={{ fontWeight: "bold" }}>Other:</Text>
										</View>
										<TextInput
											style={styles.inputBox}
											keyboardType='default'
											placeholder="Enter other dimension"
										/>
										<View style={{}}>
											<Picker
												selectedValue={selectedOtherDimension}
												onValueChange={handleOtherDimensionChange}
												style={styles.dimensionPicker}
											>
												<Picker.Item label="inch" value="inch" />
												<Picker.Item label="mtr" value="feet" />
												<Picker.Item label="cm" value="cm" />
												<Picker.Item label="mtr" value="meter" />
											</Picker>
										</View>
									</View>
								</>
							)}
						</View>
						<View>
							<TouchableOpacity style={styles.saveButton}>
								<Text
									style={{
										color: "white",
										fontSize: 18,
										textAlign: "center",
										fontWeight: "bold",
									}}
								>
									Save
								</Text>
							</TouchableOpacity>
						</View>
					</>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
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
		height: "60%",
		width: "100%",
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
		width:60
	},
});
