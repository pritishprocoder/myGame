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


export default class AreaFinder extends Component {
  constructor(){
    super();
    this.state={
      length: 0 ,
      breadth : 0,
      area : 0 , 
      perimeter : 0 ,
    }
  }
  areaprocessor=()=>{
 var l =this.state.length
 var b = this.state.breadth
 var area = l*b 
 this.setState({
   area:area
 })

  }

perimeterprocessor=()=>{
  var l =this.state.length
  var b = this.state.breadth
  var perimeter = (l-(-b))*2
  this.setState({
    perimeter:perimeter
  }) 
}
    render(){
        return(
            <View>
                    <TextInput style = {styles.formTextInput}
            
            
            placeholder="Enter value of  length"
            placeholderTextColor="gray"
            onChangeText={(text) => {
              this.setState({
              
               length : text,
              });
            }}
            
            value={this.state.length}
            />
                <TextInput style={styles.formTextInput}
            placeholder="Enter value of width"
            placeholderTextColor="gray"
            onChangeText={(text) => {
              this.setState({
              
               breadth : text,
              });
            }}
            
            value={this.state.breadth}

            
            
            />
             <Text style={{fontSize:20,fontWeight:'bold',color:'blue', textAlign :"center",alignItems:"center",justifyContent:"center"}}>
             area : {this.state.area}
            </Text>
            <Text style={{fontSize:20,fontWeight:'bold',color:'blue', textAlign :"center",alignItems:"center",justifyContent:"center"}}>
             perimeter : {this.state.perimeter}
            </Text>
            < TouchableOpacity style={styles.button}
            onPress={()=>{
              this.areaprocessor()}}
            >
<Text style={styles.buttonText}>
Find area
</Text>
</TouchableOpacity>

< TouchableOpacity style={styles.button}
onPress={()=>{
  this.perimeterprocessor()}}
>
<Text style={styles.buttonText}>
Find perimeter
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