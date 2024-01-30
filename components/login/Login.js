import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Image,
	TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { styles } from "./styles";
const Logo = require("../../assets/carpenter.png");

export default function Login({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onPasswordChange = (password) => {
		setPassword(password);
	};

	const onEmailChange = (email) => {
		setEmail(email);
	};
	const handleLogin = () => {
		//Perform login logic here and if successful navigate to home screen
		navigation.navigate("Home");
	};

	return (
		<LinearGradient
			colors={["rgba(255, 7, 79, 0.97)", "#1E1215"]}
			style={styles.linearGradient}
		>
			<Image
				source={Logo}
				style={{ height: 200, width: 250, marginLeft: "19%", marginTop: "20%" }}
			></Image>
			<View style={styles.container}>
				<View style={styles.loginContainer}>
					<Text style={{ textAlign: "center", fontSize: 28 }}>LOGIN</Text>
					<View>
						<TextInput
							style={styles.emailInput}
							onChangeText={onEmailChange}
							value={email}
							placeholder="Enter your email"
						/>
						<TextInput
							style={styles.passwordInput}
							onChangeText={onPasswordChange}
							value={password}
							secureTextEntry={true}
							placeholder="Enter your password"
						/>
					</View>
					<TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
						<Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
							Login
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</LinearGradient>
	);
}
