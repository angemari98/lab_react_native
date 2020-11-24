import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import constants from '../utils/constants';

const Dessert = ({ dessert, navigation }) => {
	const {strMeal, strMealThumb} = dessert;

	const loadDessert = () => {
		navigation.navigate(constants.SCREEN.DESSERTS, {dessert});
	};

	return (
		<Pressable style={styles.card} onPress={loadDessert}>
			<Image
				style={styles.img}
				source={{
					uri: `${strMealThumb}`,
				}}
			/>
			<View style={{ flex: 1, marginLeft: 115 }}>
				<View style={styles.titleContainer}>
					<Text numberOfLines={3} style={styles.title}>
						{strMeal}
					</Text>
				</View>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: constants.COLORS.ORANGE,
		marginTop: 25,
		paddingHorizontal: 10,
		paddingBottom: 20,
		paddingTop: 40,
		borderRadius: 20,
		flexDirection: 'row',
		alignItems: 'flex-centers',
		position: 'relative',
    height:150,
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-center',
    paddingHorizontal: 20,
	},
	title: {
		color: constants.COLORS.WHITE,
		fontWeight: 'bold',
		flexGrow: 1,
		marginRight: 12,
		fontSize: 18,

	},
	img: {
		width: 110,
		height: 110,
		borderRadius: 16,
		position: 'absolute',
		bottom: 20,
		left: 20,
	},
});

export default Dessert;
