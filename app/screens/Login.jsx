import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';

const LoginScreen = () => {
	const router = useRouter();

	return (
		<View style={tw`h-full bg-[#ffb6b9]`}>
			<Text style={tw`font-bold text-4xl text-white mb-4 text-center mt-30`}>
				Weather Wardrobe
			</Text>
			<Text style={tw` text-2xl text-white  mb-8 text-center`}>Login</Text>

			{/* Logo goes here */}
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: 30,
				}}
			>
				<Image
					source={require('../../assets/favicon.png')}
					resizeMode='contain'
					style={{
						height: 100,
						width: 100,
						margin: 'auto',
					}}
				/>
			</View>

			<View
				style={{
					marginTop: 40,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<TextInput
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
					placeholder='Password'
					style={{
						backgroundColor: 'white',
						height: 45,
						width: 350,
						marginBottom: 45,
						borderRadius: 10,
						paddingLeft: 10,
					}}
					secureTextEntry={true}
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
