import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useState,Dispatch } from 'react'
import CustomButton from './src/components/CustomButton'
import CustomTextInput from './src/components/CustomTextInput'

export default function App() {
	const [inputText, setInputText] = useState<string>('')
	const env=process.env.EXPO_PUBLIC_API_URL

	return (
		<View style={styles.container}>
			<CustomButton
				text={inputText}
				backgroundColor='#DDDDDD'
				color='#39494F'
				width='100%'

			/>
			<CustomTextInput
				label='ini label'
				text={inputText}
				onChange={setInputText}
			/>
			<StatusBar style='auto' />
			<Text>Value Env={env}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		padding: 40,
	},
})
