import React from 'react'
import {StatusBar, ImageBackground, StyleSheet} from 'react-native';
import {Container} from 'native-base'

export default class Choose extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
				<StatusBar hidden />
				<ImageBackground style={styles.imageContainer} source={require('../../../assets/back2.jpg')}>
					


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
	}
})
