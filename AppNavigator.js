// AppNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SplashScreen from "./components/splashScreen/SplashScreen";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import LogoutScreen from "./components/logout/LogoutScreen"; // Import the new component
import UserProfile from "./components/userProfile/UserProfile";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Dashboard" component={Home} />
			<Drawer.Screen name="Profile" component={UserProfile} />
			<Drawer.Screen
				name="Logout"
				component={LogoutScreen}
				options={{ headerShown: false }}
			/>
			{/* Add more screens for the Home section if needed */}
		</Drawer.Navigator>
	);
};

const AppNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Splash">
			<Stack.Screen
				name="Splash"
				component={SplashScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Home"
				component={HomeDrawer}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default AppNavigator;
