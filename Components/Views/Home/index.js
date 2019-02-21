import React from 'react'
import { Text, StyleSheet, ImageBackground } from 'react-native'
import { Container } from 'native-base'

export default class Home extends React.Component{
	render(){
		return(
			<Container style={styles.mainContainer}>
				<ImageBackground style={{width: '100%', height: '100%'}} imageStyle={styles.imageContainer} source={require('../../../assets/test.jpg')}>
					<Text>Inicio</Text>
				</ImageBackground>
			</Container>
		)
	}
}


const styles = StyleSheet.create({
	mainContainer:{
		flex:1,
		justifyContent: 'center'
	},
	imageContainer : {
		resizeMode: 'cover',
	}

})
