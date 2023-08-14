import { StatusBar } from 'expo-status-bar'
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Button,
	TouchableOpacity,
	ScrollView,
	FlatList,
	Alert,
} from 'react-native'
import contohGambar from './assets/icon.png'
import { useState } from 'react'

const items = [
	{
		id: '1',
		title: 'Item Pertama',
	},
	{
		id: '2',
		title: 'Item Kedua',
	},
	{
		id: '3',
		title: 'Item Ketiga',
	},
	{
		id: '4',
		title: 'Item Keempat',
	},
	{
		id: '5',
		title: 'Item Kelima',
	},
	{
		id: '6',
		title: 'Item Keenam',
	},
	{
		id: '7',
		title: 'Item Ketujuh',
	},
	{
		id: '8',
		title: 'Item Kedelapan',
	},
	{
		id: '9',
		title: 'Item Kesembilan',
	},
	{
		id: '10',
		title: 'Item Kesepuluh',
	},
]

export default function App() {
	const [str, setStr] = useState('')
	return (
		<View style={styles.container}>
			<Text>
				Open up App.tsx to start <Text style={styles.textTebel}> working</Text>{' '}
				on your app!
			</Text>
			{/* <Image source={contohGambar} style={styles.imageStyle} />
			<Image source={require('./assets/icon.png')} style={styles.imageStyle} />
			<Image
				source={{
					uri: 'https://prog-8.com/shared/images/document/144/1682652139947.png',
					width: 100,
					height: 100,
				}}
			/> */}
			{/* <TextInput
				style={styles.inputStyle}
				onChangeText={setStr}
				value={str}
				keyboardType="numeric"
			/>
			<TextInput style={styles.inputStyle} onChangeText={setStr} value={str} />
			<TextInput
				style={styles.inputStyle}
				onChangeText={setStr}
				value={str}
				numberOfLines={3}
				multiline
			/>
			<Text>{str}</Text> */}
			<Button
				title="change str"
				onPress={() => {
					console.log('button')
					Alert.alert('alert dari button')
				}}
			/>
			<TouchableOpacity
				onPress={() => console.log('touchable')}
				style={{ width: 200, height: 100, backgroundColor: 'red' }}
				activeOpacity={100}
			/>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					height: 100,
					marginTop: 8,
					width: '100%',
				}}
			>
				<View style={{ backgroundColor: 'blue', flex: 2, margin: 4 }} />
				<View style={{ backgroundColor: 'red', flex: 1, margin: 4 }} />
				<View style={{ backgroundColor: 'green', flex: 1, margin: 4 }} />
			</View>
			<ScrollView
				style={{
					width: 100,
					maxHeight: 150,
					display: 'flex',
				}}
			>
				<View style={{ backgroundColor: 'blue', width: 200, height: 200 }} />
				<View style={{ backgroundColor: 'red', width: 200, height: 200 }} />
				<View style={{ backgroundColor: 'green', width: 200, height: 200 }} />
			</ScrollView>
			<FlatList
				data={items}
				renderItem={({ item: { title } }) => (
					//cth {
					// item: {
					//   title,
					//   id
					// }
					// }
					// renderItem={(item) => (
					// <Text style={styles.title}>{item.item.title}</Text>
					<View style={styles.item}>
						<Text style={styles.title}>{title}</Text>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textTebel: {
		fontWeight: '800',
	},
	imageStyle: {
		width: 100,
		height: 100,
	},
	inputStyle: {
		borderColor: 'red',
		borderWidth: 1,
		width: 200,
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
})
