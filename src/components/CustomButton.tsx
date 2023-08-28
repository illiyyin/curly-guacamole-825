import React, { ButtonHTMLAttributes } from 'react'
import {
	TouchableOpacity,
	Text,
	StyleSheet,
	DimensionValue,
} from 'react-native'

type PropsCustomButton = ButtonHTMLAttributes<HTMLButtonElement> & {
	text?: string
	backgroundColor: string
	color?: string
	onPress?: () => void
	fontSize?: number
	width?: DimensionValue
}

// interface PropsCustomButton{

// }

export default function CustomButton({
	backgroundColor,
	color,
	text,
	onPress,
	fontSize = 16,
	width = 120,
}: PropsCustomButton) {
	const styles = StyleSheet.create({
		button: {
			alignItems: 'center',
			backgroundColor,
			width,
			padding: 10,
		},
		buttonText: {
			fontSize,
			fontWeight: '700',
			color,
		},
	})

	return (
		<TouchableOpacity
			style={styles.button}
			onPress={onPress}
			activeOpacity={70}
		>
			<Text style={styles.buttonText}>{text}</Text>
		</TouchableOpacity>
	)
}
