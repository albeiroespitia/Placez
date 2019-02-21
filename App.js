import React from 'react';
import { StatusBar, View } from 'react-native'
import Home from './Components/Views/Home'

export default class App extends React.Component {
  render() {
    return (
		<View>
			<StatusBar hidden />
	      	<Home/>
		</View>
    );
  }
}
