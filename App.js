import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native'
import Home from './Components/Views/Home'
import Choose from './Components/Views/Choose'
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Home: {
	  screen: Home,
	  navigationOptions: {
                header: null
        }
	},
  Choose: {
	  screen: Choose,
	  navigationOptions: {
                header: null
    	}
  }

});

class App extends React.Component {
  render() {
    return (
		<View style={styles.container}>
	      	<Home/>
		</View>
    );
  }
}

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
	container:{
		width: '100%',
		height: '100%'
	}
})
