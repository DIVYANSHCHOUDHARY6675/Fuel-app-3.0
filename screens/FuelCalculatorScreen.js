import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'
import { withTheme } from 'react-native-elements';
import { Value } from 'react-native-reanimated';

export default class FuelCalculatorScreen extends Component{
  constructor(){
    super();
    this.state ={
      userId : firebase.auth().currentUser.email,
     distance:"",
     fuel:"",
     efficiency:"",
     response:""
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }



  addRequest =async()=>{
    var fuel = Number(this.state.fuel)
    var distance = Number(this.state.distance)
    var  efficiency = Number(this.state. efficiency)
    var value= (distance/efficiency)*fuel
    console.log(value)
    return Alert.alert("Your estimated fuel cost would be "+value)


{

 /* { await fetch("https://daily-fuel-prices-india.p.rapidapi.com/api/HP/allstates", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "bfd80b7abfmshb911325f20cb65fp1ef412jsne81bf1cc4d5f",
		"x-rapidapi-host": "daily-fuel-prices-india.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

}*/}
  }


  componentDidMount()
  {
   fetch("https://daily-fuel-prices-india.p.rapidapi.com/api/proxy/hp/states/RJ", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "bfd80b7abfmshb911325f20cb65fp1ef412jsne81bf1cc4d5f",
		"x-rapidapi-host": "daily-fuel-prices-india.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
  }


  

  render(){
    return(
        <View style={{flex:1}}>
          <MyHeader title="Fuel Cost Calculator" style={styles.heading}/>
            <KeyboardAvoidingView style={styles.keyBoardStyle}>
              <TextInput
                style ={styles.formTextInput}
                placeholder={"Trip Distance in km"}
                onChangeText={(text)=>{
                    this.setState({
                        distance:text
                    })
                }}
                value={this.state.bookName}
              />
              
             <TextInput
                style ={styles.formTextInput}
                placeholder={"Fuel Efficiency"}
                onChangeText={(text)=>{
                    this.setState({
                        fuel:text
                    })
                }}
                value={this.state.bookName}
              />

              <TextInput
                style ={styles.formTextInput}
                placeholder={"Gas or Fuel price per liter"}
                onChangeText ={(text)=>{
                    this.setState({
                      efficiency:text
                    })
                }}
                value ={this.state.reasonToRequest}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addRequest()}}
                >
                <Text style={styles.text}>Calculate</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#01333C'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
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
    marginTop:150
    },
    text:{
      fontSize:30,
     
    },
  
  
  }
)