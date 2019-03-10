import React from 'react'
import { Text, StyleSheet, ImageBackground, View, StatusBar } from 'react-native'
import { Container, Button } from 'native-base'
import { Entypo } from '@expo/vector-icons';
import { Font } from 'expo';



export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
	      fontLoaded: null,
	    };


	}

	async componentDidMount() {
	  await Font.loadAsync({
		'Montserrat-Bold': require('../../../assets/Montserrat/Montserrat-Bold.ttf'),
		'Montserrat-Regular': require('../../../assets/Montserrat/Montserrat-Regular.ttf'),
		'Roboto': require('../../../assets/Montserrat/Roboto-Regular.ttf')

	  });
	  this.setState({ fontLoaded: true });

	}

	render(){
		return(
			<Container>
				<StatusBar hidden />
				<ImageBackground style={styles.imageContainer} source={require('../../../assets/bac2.jpg')}>
					<View style={styles.titleContainer}>
						<Entypo style={styles.mainIcon} name="location" size={60} color="white" />
						{
							this.state.fontLoaded ? (
								<Text style={styles.title}>Placez</Text>
							):(
								<View></View>
							)
						}

					</View>
					<View style={styles.descriptionContainer}>
						{
							this.state.fontLoaded ? (
								<Text style={styles.description}>Encuentra lo que deseas {"\n"} cerca de ti</Text>
							):(
								<View></View>
							)
						}
					</View>
					<View style={styles.buttonContainer}>
						{
							this.state.fontLoaded ? (
								<Button style={styles.mainButton} onPress={()=> this.props.navigation.navigate('Choose')}>
									<Text style={styles.buttonText}> Get started  </Text>
								</Button>
							):(
								<View></View>
							)
						}
					</View>
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
		flex:1,
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	title:{
		color: '#fff',
		fontSize: 48,
		fontFamily: 'Montserrat-Bold',
		textAlign: 'center'
	},
	mainIcon:{
		alignSelf: 'center'
	},
	description:{
		color: '#fff',
		fontSize: 20,
		fontFamily: 'Montserrat-Regular',
		textAlign: 'center'
	},
	buttonContainer:{
		alignSelf: 'center',
		width: '100%'
	},
	mainButton:{
		alignSelf: 'center',
		backgroundColor: '#66E1B4',
		borderRadius:5,
		width: '60%',
		justifyContent:'center',
		alignItems: 'center'
	},
	buttonText:{
		fontSize: 18,
		fontFamily: 'Roboto',
		textAlign: 'center'
	}

})
