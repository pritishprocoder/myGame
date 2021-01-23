import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';


export default class MyHeader extends Component{
  render(){
      return(
        <Header
        leftComponent={<Icon name='bars' type='font-awesome' color='#ffffff' 
         //onPress={() => this.props.navigation.toggleDrawer()}
         />}
        centerComponent={{ text: "Theorem Finder", style: { color: '#ffffff', fontSize:20,fontWeight:"bold", } }}
        //rightComponent={<this.BellIconWithBadge {...this.props}/>}
        backgroundColor = "black"
      />
      )
  }  
}