
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen'
import AlgebraFinder from './screens/AlgebraFinder'
import AreaFinder from './screens/areaFinder'
import PolygonFinder from './screens/PolygonFinder'
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  HomeScreen : {screen:HomeScreen},
  AlgebraFinder : {screen:AlgebraFinder},
 AreaFinder : {screen:AreaFinder},
 PolygonFinder : {screen:PolygonFinder},

})

const AppContainer =  createAppContainer(switchNavigator);
