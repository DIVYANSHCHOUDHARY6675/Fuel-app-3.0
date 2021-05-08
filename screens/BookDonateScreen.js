import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  render(){
  return (
    
    <View
      style={styles.container}>
      
  <LinearGradient
        // Background Linear Gradient
        colors={['#00ffff', 'transparent']}
        style={styles.background}
      />
<Header
     centerComponent={{ text:"Fuel Saver App", style: { color:'#FE5858' , fontSize:33.818,fontWeight:"normal", } }}
     backgroundColor = "#01333C"
    />




      <Card style={styles.homeCard}>
        <View><Text style={styles.text}>Start Saving Fuel Now!</Text></View>
        <CustomButton
          style={styles.button}
          title="START"
          onPress={() => {
         //   props.navigation.navigate('Addscreen');
          }}
        />
      
      </Card>

      <Card style={styles.homeCard}>
        <View><Text style={styles.text}>Calculate your journey fuel cost here.</Text></View>
        <CustomButton
          style={styles.button}
          title="Calculate"
          onPress={() => {
    props.navigation.navigate('FuelCalculator');
          }}
        />
        
      </Card>
    </View>
  );
}
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor:'#ff00ff',
    
  },
  homeCard: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 130,
    marginHorizontal: 15
  },
  text: {
    fontSize: 22
  },
  button: {
    marginVertical:20,
  },
  background: {
    position: 'absolute',
  
    left: 0,
    right: 0,
    top: 0,
    height: 700,
  }
  
});



