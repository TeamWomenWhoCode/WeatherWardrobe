import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/database';
import tw from 'twrnc';

const RegisterScreen = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const router = useRouter();

	const signUp = async () => {
		setLoading(true);
		if (email && password) {
			try {
				const response = await auth().createUserWithEmailAndPassword(
					email,
					password
				);

				if (response.user) {
					await createProfile(response);
				}
			} catch (err) {
				console.log(err);
				alert(`Registration failed: ${err.message}`);
			} finally {
				setLoading(false);
			}
		}
	};

	const createProfile = async () => {
		db().ref(`/users/${response.user.uid}`).set({ firstName }, { lastName });
	};

	return (
		<View style={tw`h-full bg-[#ffb6b9]`}>
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: 30,
				}}
			>
				<Image
					source={require('../../assets/ww__1_.png')}
					style={{
						height: 150,
						width: 150,
						margin: 'auto',
					}}
				/>
			</View>

			<Text style={tw` font-bold text-2xl text-white  mt-8  text-center`}>
				Create an Account
			</Text>

			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<TextInput
					value={firstName}
					onChangeText={(text) => setFirstName(text)}
					placeholder='First Name'
					style={{
						backgroundColor: 'white',
						height: 45,
						width: 350,
						marginBottom: 30,
						borderRadius: 10,
						paddingLeft: 10,
					}}
				/>
				<TextInput
					value={lastName}
					onChangeText={(text) => setLastName(text)}
					placeholder='Last Name'
					style={{
						backgroundColor: 'white',
						height: 45,
						width: 350,
						marginBottom: 30,
						borderRadius: 10,
						paddingLeft: 10,
					}}
				/>
				<TextInput
					value={email}
					onChangeText={(text) => setEmail(text)}
					placeholder='Email'
					style={{
						backgroundColor: 'white',
						height: 45,
						width: 350,
						marginBottom: 30,
						borderRadius: 10,
						paddingLeft: 10,
					}}
				/>
				<TextInput
					value={password}
					onChangeText={(text) => setPassword(text)}
					secureTextEntry={true}
					placeholder='Password'
					style={{
						backgroundColor: 'white',
						height: 45,
						width: 350,
						marginBottom: 30,
						borderRadius: 10,
						paddingLeft: 10,
					}}
				/>
				<TouchableOpacity
					onPress={signUp}
					style={{
						backgroundColor: 'white',
						borderRadius: 10,
						paddingLeft: 26,
						paddingRight: 26,
						paddingTop: 10,
						paddingBottom: 10,
						marginLeft: 10,
						marginBottom: 50,
					}}
				>
					<Text>Register</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => router.push('/screens/Login')}>
					<Text style={{ fontSize: 16 }}>
						Already a member? <Text style={{ color: '#61c0bf' }}>Login</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default RegisterScreen;
