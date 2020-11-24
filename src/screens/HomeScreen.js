import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import axios from '../utils/axios';
import constants from '../utils/constants';
import Dessert from '../components/Desserts';

export const HomeScreen = ({ navigation, route }) => {
	const [desserts, setDesserts] = React.useState([]);

	useEffect(() => {
		axios
			.get(`filter.php?c=Dessert`)
			.then((res) => {
        setDesserts(res.data.meals);
        console.log(res.data);
			})
			.catch((err) => console.log(err));
	}, [setDesserts]);

	return (
		<View style={styles.container}>
      <View style={styles.content}>
        <FlatList
  				style={styles.list}
  				data={desserts}
  				renderItem={({item}) => <Dessert dessert={item} navigation={navigation} />}
  				keyExtractor={(item) => `${item.id}`}
  			/>
		   </View>
    </View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: constants.COLORS.WHITE,
	},
	list: {
		paddingHorizontal: 25,
	},
});
