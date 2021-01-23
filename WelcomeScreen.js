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
} from "react-native";
import MyHeader from "../componenet/MyHeader";


export default class WelcomeScreen extends Component{
    render(){
        return(
            <View>
              
                <Text style = {styles.theoremfinder}>
                    THEOREM FINDER 
                </Text>
                <View style={{flex:0.15}}/>
        <View style={styles.mit}>
          <Image
          source={require('../assets/mit.png')}
          style={styles.mitimage}
           />
         </View>
        
                <Text style = {styles.welcome}>
                    WELCOME !!!
                </Text>
                <TouchableOpacity
            style={styles.button}
           onPress={() => {
              this.props.navigation.navigate("HomeScreen") 
            }}
          >
            <Text style={styles.buttonText}>next</Text>
          </TouchableOpacity>

                
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
mit :{
    flex:0.85,
    justifyContent:"center",
    alignItems:"center",
    
   
},
mitimage : {
    width: 150,
     height: 150, 
     marginLeft: 95,
     alignItems:"center",
 
},
theoremfinder:{
    textAlign: 'center',
     fontSize: 30, 
     fontWeight: 'bold',
},
welcome : {
    textAlign: 'center',
     fontSize: 30, 
     fontWeight: 'bold',
},
button: {
  marginTop : 200 ,
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
  buttonText: {
    color: "white",
    fontWeight: "200",
    fontSize: 30,
  },
})

