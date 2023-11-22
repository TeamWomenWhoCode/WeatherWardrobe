import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableWithoutFeedback,
} from 'react-native';
import Swiper from 'react-native-swiper';
import BoxModal from './BoxModal';
import { categories } from '../utils/data';

const BoxSwiper = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [data, setData] = useState(null);
	const [filteredData, setFilteredData] = useState([]);
	const [isSlideUpVisible, setIsSlideUpVisible] = useState(true);
	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	const handleIndexChanged = (index) => {
		setCurrentIndex(index);
	};

	const handleBoxPress = (category) => {
		const item = data.filter((item) => item.category == category);
		console.log(item?.[0].items);

		setFilteredData(item?.[0].items);
		setIsSlideUpVisible(true);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://tishshaw.github.io/WeatherWardrobe-API/api.json'
				);
				const jsonData = await response.json();
				setData(jsonData);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<View
			style={{
				height: '100%',
			}}
		>
			<Swiper
				loop={false}
				index={currentIndex}
				onIndexChanged={handleIndexChanged}
				showsPagination={false}
			>
				{categories.map((category, index) => (
					<TouchableWithoutFeedback
						key={index}
						onPress={() => {
							handleBoxPress(category.name);
							toggleModal();
						}}
					>
						<View style={styles.box}>
							<Text style={{ fontSize: 30 }}>{category.name}</Text>
							<Image
								source={category.imageSource}
								style={{ height: 205, width: 205 }}
							/>
						</View>
					</TouchableWithoutFeedback>
				))}
			</Swiper>
			<BoxModal
				isVisible={isModalVisible}
				onClose={toggleModal}
				products={filteredData}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	box: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '85%',
		borderWidth: 1,
		borderRadius: 5,
	},
});

export default BoxSwiper;
