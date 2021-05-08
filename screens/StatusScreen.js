import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import firebase from 'firebase';
import db from '../config'
import { Header } from 'react-native-elements';
export default class StatusScreen extends React.Component{

  constructor()
  {
    super()
  this.state={
    userId:firebase.auth().currentUser.email,
    water:36,


  }
  }
  getInfo =()=>{
    db.collection("Fuel_Usage").where("user_id","==", this.state.userId).get()
    .then((snapshot)=>{
   snapshot.forEach((doc) => {
    this.setState({
    "fuel" : doc.data().fuel_quantity
  })
});
})
//db.collection("plant_manure_tracker").where("user_id","==", this.state.userId).get()
  //  .then((snapshot)=>{
   //snapshot.forEach((doc) => {
    //this.setState({
    //"manure" :doc.data().manure_quantity
  //})
//});
//})

  }

  componentDidMount(){
  



  }


 



  render(){
  return (
    <View style={styles.horizontal}>
    <View style={{marginTop:10}}>
    <AnimatedProgressWheel 
     size={270} 
     width={37} 
    progress={this.state.water}
    animateFromValue={0}
    duration={2500}
    color={'white'}
    fullColor={'purple'}
    
    
/>
</View>
<Text style={{marginLeft:80}}>Monthly Report</Text>




</View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding:50,
    marginTop:140,
    marginLeft:17,
  },
});