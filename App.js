import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native'
import Home from './Components/Views/Home'

export default class App extends React.Component {
  render() {
    return (
		<View style={styles.container}>
			<StatusBar hidden />
	      	<Home/>
		</View>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		width: '100%',
		height: '100%'
	}
})
