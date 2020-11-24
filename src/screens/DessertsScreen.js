import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Pressable, Image, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from '../utils/axios';
import constants from '../utils/constants';


const { width, height } = Dimensions.get('screen');

const imageWidth = 130;
const imageMargin = imageWidth + 25;

const imageHeight = 200;

export const DessertsScreen = ({ navigation, route }) => {
	const {dessert} = route.params;

  const [strArea, setStrArea] = useState();
	const [strInstructions, setStrInstructions] = useState();


	useEffect(() => {
		axios
			.get(`lookup.php?i=${dessert.idMeal}`)
			.then((res) => {
				setStrInstructions(res.data.meals[0].strInstructions);
				console.log(res.data.meals[0].strInstructions);
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		navigation.setOptions({
			headerLeft: (props) => {
				return (
					<View style={styles.containerButtonIcon}>
						<MaterialCommunityIcons
							name="keyboard-backspace"
							size={24}
							color={constants.COLORS.WHITE}
							{...props}
						/>
					</View>
				);
			},
			headerRight: () => {
				return (
					<View style={styles.containerButtonIcon}>
						<MaterialCommunityIcons
							name="dots-horizontal"
							size={24}
							color={constants.COLORS.WHITE}
						/>
					</View>
				);
			},
		});
	});

	return (
		<ScrollView style={styles.container} stickyHeaderIndices={[0]}>
      <View style={styles.content}>
        <View style={styles.content}>
  				<Image
  					style={styles.poster}
  					source={{
  						uri: `${dessert.strMealThumb}`,
  					}}
  				/>
          <View style={{ flex: 1, marginLeft: imageMargin }}>
  					<View style={styles.titleContainer}>
  						<Text style={styles.title}>{dessert.strMeal}</Text>
  					</View>
          </View>
        </View>
        <View style={styles.secondaryContent}>
    			<Text style={styles.titleParagraph}>Instructions</Text>
    		  <Text style={styles.paragraph}>{strInstructions}</Text>
  			</View>
      </View>
      <View style={{ height: 500 }} />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: constants.COLORS.GREEN,
		paddingTop: 120,
    paddingHorizontal:20,
	},
	cover: {
		width: null,
		height: null,
	},
	content: {
		position: 'relative',
		padding: 25,
		backgroundColor: constants.COLORS.WHITE,
		borderRadius: 25,
		top: -25,
		zIndex: 11,
	},
	secondaryContent: {

	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-center',
	},
	title: {
		color: constants.COLORS.TEXT_COLOR,
		fontWeight: 'bold',
		flexGrow: 1,
		flexWrap: 'wrap',
		marginLeft: 15,
		fontSize: 16,
    marginTop: 50,
	},
  titleParagraph:{
    marginLeft: 0,
    color: constants.COLORS.TEXT_COLOR,
		fontWeight: 'bold',
		flexGrow: 1,
		flexWrap: 'wrap',
		fontSize: 16,
    marginTop: 50,
  },
	poster: {
		position: 'absolute',
		width: 150,
		height: 150,
		borderRadius: 16,
		left: 25,
	},
	paragraph: {
		marginTop: 25,
		fontSize: 14,
		fontWeight: '300',
		color: constants.COLORS.BLACK,
		lineHeight: 22,
	},
	containerButtonIcon: {
		backgroundColor: constants.COLORS.PRIMARY2,
		borderRadius: 20,
		width: 36,
		height: 36,
		marginHorizontal: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
