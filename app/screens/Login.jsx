import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const router = useRouter();

	const signIn = async () => {
		setLoading(true);
		try {
			
		} catch (err) {
			console.log(err);
			alert(`Login failed: ${err.message}`);
		} finally {
			setLoading(false);
		}
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
					resizeMode='contain'
					style={{
						height: 150,
						width: 150,
						margin: 'auto',
					}}
				/>
			</View>

			<Text style={tw` font-bold text-2xl text-white  mt-8  text-center`}>
				Login
			</Text>

			<View
				style={{
					marginTop: 40,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<TextInput
					value={email}
					autoCapitalize='none'
					onChangeText={(text) => setEmail(text)}
					placeholder='Email'
					style={{
						backgroundColor: 'white',
						height: 45,
						width: 350,
						marginBottom: 40,
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
						marginBottom: 45,
						borderRadius: 10,
						paddingLeft: 10,
					}}
				/>
				<TouchableOpacity
					onPress={() => router.push('/one')}
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
					<Text>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => router.push('/screens/Register')}>
					<Text style={{ fontSize: 16, marginTop: 20 }}>
						Not a member?{' '}
						<Text style={{ color: '#61c0bf' }}>Create an Account</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default LoginScreen;
