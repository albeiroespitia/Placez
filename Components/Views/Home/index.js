import React from 'react'
import { Text, StyleSheet, ImageBackground } from 'react-native'
import { Container } from 'native-base'

export default class Home extends React.Component{
	render(){
		return(
			<Container>
				<ImageBackground style={styles.imageContainer} source={require('../../../assets/backgroundHome.jpg')}>
					<Text>asdasdasd</Text>

				</ImageBackground>
			</Container>
		)
	}
}


const styles = StyleSheet.create({
	imageContainer : {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
	}
})
