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
import { Header } from 'react-native-elements';

export default class AlgebraFinder extends Component {
    render(){
        return(
            
                   <View style={{ flex: 1}}>
                       <View style={{ flex: 0.1}}>
                       

                        </View>   
                    <TextInput
            style={styles.formTextInput}        
            placeholder="Enter equation"
            placeholderTextColor="gray"
            />
< TouchableOpacity style={styles.button}>
<Text style = {styles.buttonText}>
Find
</Text>
</TouchableOpacity>
            
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button:{
        width: "75%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:50,
        backgroundColor: "#32867d",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
          
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        alignSelf:"center" ,
        marginTop:50,
 
    } ,
    buttonText: {
        color: "black",
        fontWeight: "200",
        fontSize: 20,
      },
      formTextInput: {
        width: "75%",
        height:35,
        borderWidth: 1,
        padding: 10,
        alignItems:"center",
        alignSelf:"center",
        justifyContent:"center",
        marginTop:100,
        
      },
 })