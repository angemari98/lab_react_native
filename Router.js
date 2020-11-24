import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HomeScreen, DessertsScreen} from './src/screens';
import constants from './src/utils/constants';

const Stack = createStackNavigator();

const Router = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={constants.SCREEN.HOME}
				screenOptions={{
					headerStyle: {
						backgroundColor: constants.COLORS.GREEN,
					},
					headerLeft: (props) =>
						props.canGoBack && (
							<MaterialCommunityIcons
								name="keyboard-backspace"
								size={24}
								color={constants.COLORS.GREEN}
								{...props}
								style={{ marginLeft: 20 }}
							/>
						),
				}}
			>
				<Stack.Screen
					name={constants.SCREEN.HOME}
					component={HomeScreen}
					options={{
						title: 'DESSERTS',
						headerShown: true,
					}}
				/>
				<Stack.Screen
					name={constants.SCREEN.DESSERTS}
					component={DessertsScreen}
					options={{
						title: '',
						headerBackTitleVisible: false,
						headerTransparent: true,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Router;
