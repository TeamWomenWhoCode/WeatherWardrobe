import React from 'react';
import { useRouter } from 'expo-router';
import {
	View,
	Text,
	Button,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { FontAwesome, Fontisto, Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
	const router = useRouter();

	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: '#ffb6b9', height: '100vh' }}
		>
			<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.profile}>
					<TouchableOpacity>
						<FontAwesome name='user-circle-o' size={30} color='black' />
					</TouchableOpacity>
					<Text style={styles.profileName}>Jane Doe</Text>
					<TouchableOpacity style={styles.buttonWrapper}>
						<Button title='Logout' onPress={() => router.push('/')} />
					</TouchableOpacity>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionHeader}>Preferences</Text>

					<TouchableOpacity>
						<View style={styles.row}>
							<View style={styles.rowIcon}>
								<Fontisto name='world-o' size={24} color='black' />
							</View>
							<Text style={styles.rowLabel}>Language</Text>
						</View>
						<View style={styles.row}>
							<View style={styles.rowIcon}>
								<FontAwesome name='location-arrow' size={24} color='black' />
							</View>

							<Text style={styles.rowLabel}>Location</Text>
						</View>
						<View style={styles.row}>
							<View style={styles.rowIcon}>
								<Ionicons name='moon-outline' size={24} color='black' />
							</View>
							<Text style={styles.rowLabel}>Dark Mode</Text>
						</View>
					</TouchableOpacity>

					<Text style={styles.sectionHeader}>Help</Text>
					<TouchableOpacity>
						<View style={styles.row}>
							<View style={styles.rowIcon}>
								<Ionicons name='flag-outline' size={24} color='black' />
							</View>
							<Text style={styles.rowLabel}>Report Bug</Text>
						</View>
						<View style={styles.row}>
							<View style={styles.rowIcon}>
								<Ionicons name='mail-outline' size={24} color='black' />
							</View>
							<Text style={styles.rowLabel}>Contact Us</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: 24,
		height: '100vh',
	},
	profile: {
		padding: 24,
		alignItems: 'center',
		justifyContent: 'center',
	},
	profileName: {
		marginTop: 20,
		marginBottom: 20,
		fontSize: 19,
	},
	section: {
		paddingHorizontal: 24,
	},
	sectionHeader: {
		paddingVertical: 12,
		fontSize: 12,
		fontWeight: '600',
		color: '#9e9e9e',
		textTransform: 'uppercase',
		letterSpacing: 1.1,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: 'lightgray',
		height: 50,
		marginBottom: 5,
		paddingLeft: 10,
		borderRadius: 5,
	},
	rowIcon: {
		marginRight: 10,
	},
	buttonWrapper: {
		width: 100,
		borderRadius: 5,
	},
});

export default ProfileScreen;
