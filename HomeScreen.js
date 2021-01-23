import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button,
} from "react-native";
//import MyHeader from '../componenet/MyHeader'
import AlgebraFinder from './AlgebraFinder'
import AreaFinder from './areaFinder'
import PolygonFinder from './PolygonFinder'

export default class HomeScreen extends Component{
  render(){
      return(
          <View>
              
             <TouchableOpacity

             style={styles.button}
             onPress={()=>{
               this.props.navigation.navigate("PolygonFinder")
             }}
             
             >
                 <Text style={styles.buttontext}>
                     POLYGON
                 </Text>
                 </TouchableOpacity>




                 <TouchableOpacity
             style={styles.button}
             onPress={()=>{
              this.props.navigation.navigate("AreaFinder")
            }}
            
             >
                 <Text style={styles.buttontext}>
                     area and perimeter
                 </Text>
                 </TouchableOpacity> 


                 <TouchableOpacity
             style={styles.button}
             onPress={()=>{
              this.props.navigation.navigate("AlgebraFinder")
            }}
             
             >
                 <Text style={styles.buttontext}>
                     algebra
                 </Text>
                 </TouchableOpacity>


                 
          </View>
      )
  }
}

const styles=StyleSheet.create({
    button: {
        marginTop : 100 ,
        marginBottom:50,
          width: 300,
          height:50 ,
          marginLeft : "40%" ,
          justifyContent: "center",
          alignItems: "center",
      
         // borderRadius: RFValue(25),
          backgroundColor: "black",
          shadowColor: "#000",
          //marginBottom:RFValue(10),
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.3,
          shadowRadius: 10.32,
          elevation: 16,
        },
        buttontext: {
          color: "white",
          fontWeight: "200",
          fontSize: 30,
        },
})
    
