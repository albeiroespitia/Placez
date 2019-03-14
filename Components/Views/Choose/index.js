import React from 'react'
import {Text,StatusBar, ImageBackground, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Root, Container, Button, Fab, Icon} from 'native-base'
import { Font } from 'expo';
import { Entypo } from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import ActionButton from 'react-native-circular-action-menu';




export default class Choose extends React.Component{
    constructor(props){
        super(props)
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
			<Root>
            	<Container>
				<StatusBar hidden />
				<ImageBackground containerStyle={styles.imageContainer} style={styles.imageContainer} source={require('../../../assets/backfinal.jpg')}>
					<View style={styles.descriptionContainer}>
						{
							this.state.fontLoaded ? (
								<Text style={styles.description}>Que deseas hacer hoy?</Text>
							):(
								<View></View>
							)
						}
					</View>

					<View style={styles.buttonSelectContainer}>
						<ActionButton buttonColor="rgba(231,76,60,1)">
				          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
				            <Entypo name="location" style={styles.actionButtonIcon} />
				          </ActionButton.Item>
				          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
				            <Entypo name="location" style={styles.actionButtonIcon} />
				          </ActionButton.Item>
				          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
				            <Entypo name="location" style={styles.actionButtonIcon} />
				          </ActionButton.Item>
				        </ActionButton>
					</View>

				</ImageBackground>
            </Container>
		</Root>

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
	description:{
		color: '#fff',
		fontSize: 30,
		fontFamily: 'Montserrat-Regular',
		textAlign: 'center'
	},
	buttonSelectAction:{
		borderWidth:1,
		borderColor:'rgba(0,0,0,0.2)',
		alignItems:'center',
		justifyContent:'center',
		width:80,
		height:80,
		backgroundColor:'#28c7fa',
		borderRadius:50,
	}
})
