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


export default class PolygonFinder extends Component {
  constructor(){
    super();
   this.state={
     sides : 0 ,
     angle : 0 , 
   }
  }

  processor=()=>{
    //angle =  (sides-2)*180 ,
    var sides= this.state.sides
    var sangle = (sides-2)*180;
    this.setState ({
      angle:sangle
    })
  }
    render(){
        return(
            <View >
                 <TextInput style= {styles.formTextInput}
            placeholder="Enter no.of sides"
            placeholderTextColor="gray"
            onChangeText={(text) => {
              this.setState({
                sides : text,
              });
            }}
            value={this.state.sides}
            />
            <Text style={{fontSize:20,fontWeight:'bold',color:'blue', textAlign :"center",alignItems:"center",justifyContent:"center"}}>
             Sum of the interior angles : {this.state.angle}
            </Text>
            < TouchableOpacity style={styles.button}   
            onPress={()=>{
            this.processor()}}
            >
<Text style={styles.buttonText}>
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
