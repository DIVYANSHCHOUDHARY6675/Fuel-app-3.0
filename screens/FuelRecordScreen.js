import React from 'react';
import db from '../config'
import firebase from "firebase"
import { TouchableOpacity,ImageBackground,TextInput,Image,View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../components/Card';
import Constants from 'expo-constants';
import CustomButton from '../components/CustomButton';
//import { Header } from 'react-native-elements';
export default class FuelRecordScreen extends React.Component {
  constructor(){
  super()
  this.state={
    odo:"",
    price:"",
    Fuel:""

  }
}
saveData=()=>{
  db.collection("FuelExpense").add({
    "odo_reading":this.state.odo,
    "price":this.state.price,
    "fuel_quantity":this.state.fuel

  })
}
    render(){
    return (
      
      <View
        style={styles.container}>
            {/* <ImageBackground
        style={{ flex: 1 }}
        //We are using online image to set background
        source={
          require("../assets/abstract4.jpeg")
        }
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
   </ImageBackground> */} 
  
 
  
  

          <View><Text style={styles.text}>Details</Text></View>
          <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:10}}>
         
          <Image source={require("../assets/odo1.png")} style={{width:27, height:27,marginTop:24}}/>
          
          <TextInput
          style={styles.formTextInput}
          placeholder ={"Odometer"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              odo: text
            })
          }}
        />
    
        </View>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:10,}}>
          <Image source={require("../assets/petrolFiller.png")} style={{width:27, height:27, marginTop:24}}/>
          <TextInput
          style={styles.formTextInput}
          placeholder ={"Fuel Filled ?"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              Fuel: text
            })
          }}
        />
            
        </View>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:10}}>
          <Image source={require("../assets/rup.jpeg")} style={{width:35, height:35,marginTop:24}}/>
          <TextInput
          style={styles.formTextInput}
          placeholder ={"Total Cost"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
             price: text
            })
          }}
        />
        </View>
       
        <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.saveData()}}
                >
                <Text style={styles.buttontext}>Save</Text>
              </TouchableOpacity>
     
      </View>
    );
  }
  }
  const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor:'#62D1FF',
    },
    homeCard: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 130,
      marginHorizontal: 15,
  
    },
    text: {
      fontSize:65,
     fontWeight:'500',
     paddingBottom:30,
     color:'black',
     paddingTop:0,
     paddingLeft:80,
     paddingBottom:0
     
     
    },
    button:{
      width:"45%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:12,
      backgroundColor:"#FD5858",
      shadowColor: "#03BFB8",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation:16,
      marginTop:280,
      marginLeft: 100
      },
    background: {
      position: 'absolute',
    
      left: 0,
      right: 0,
      top: 0,
      height: 700,
    },
    formTextInput:{
      width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#FCCE4E',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,

      
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'repeat', // or 'stretch'
      
  },
  buttontext:{
    fontSize:30,
    color:"blue"
   
  },

    
  });
