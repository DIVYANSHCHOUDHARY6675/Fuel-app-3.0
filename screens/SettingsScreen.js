import React,{Component}from "react";
import {View,Text,Alert,KeyboardAvoidingView,TextInput,TouchableOpacity,StyleSheet}from "react-native"
import db from '../config'
import firebase from 'firebase'
import MyHeader from '../components/MyHeader'
import { Avatar } from 'react-native-elements';


export default class SettingScreen extends Component{
  constructor(){
    super()
    this.state={
      emailId:'',
      firstName:'',
      lastName:'',
      address:'',
      contact:'',
      docId:'',
    }
  }
  getUserDetails(){
    var user = firebase.auth().currentUser;
    var email = user.email

    db.collection("users").where("email_id","==",email).get().then(snapshot=>{
      snapshot.forEach(doc=>{
var data = doc.data()
this.setState({
  emailId:data.email_id,
  firstName:data.first_name,
  lastName:data.last_name,
  address:data.address,
  contact:data.contact,
  docId:doc.id,
})
  })
    })
  }
  updateUserDetails=()=>{
    db.collection("users").doc(this.state.docId).update({
      "first_name":this.state.firstName,
      "last_name":this.state.lastName,
      "address":this.state.address,
      "contact":this.state.contact,
    })
    Alert.alert("Your profile has been updated succesfully")
  }

  componentDidMount(){
    this.getUserDetails
  }
  render(){
    return(
      <View style={styles.containter}>
    <Avatar
  size={194}
  rounded
  icon={{name: 'user', type: 'font-awesome'}}
  onPress={() => console.log("Works!")}
  activeOpacity={1}
  containerStyle={{flex: 0.4, marginLeft: 20, marginTop: 10}}
/>
   

    <View style={styles.formContainer}>

    {/* <TextInput
          style={styles.formTextInput}
          placeholder ={"First Name"}
          maxLength ={20}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
          value={this.state.firstName}
        /> */ }


   <View><Text style={styles.text}>DIVYANSHS CHOUDHARY</Text></View>
      

        <TextInput
          style={styles.formTextInput}
          placeholder ={"Contact"}
          maxLength ={10}
          keyboardType={'numeric'}
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
          value={this.state.contact}
        />

        

        <TouchableOpacity style={styles.button} onPress={()=>{this.updateUserDetails}}>
        <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

      </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({

  containter:{
    flex:1,
    width:400,
    alignItems:"center",
    justifyContent:"center"
  },
  formContainer:{
    flex:1,
    alignItems:"center",
    width:"100%",
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:"center",
    borderColor:"purple",
    borderRadius:10,
    borderWidth:1.5,
    marginTop:20,
    padding:10,
  },

  button:{
    width:"75%",
    height:50,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    backgroundColor:"blue",
    marginTop:250,
     
  },
  buttonText:{
    fontSize:25,
    fontWeight:"bold",
    color:"white",
  },
  text:{
    fontSize: 22,
    marginLeft:15,
    marginTop:15,
  }

})