import React from 'react';
import { Profiler } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookDonateScreen from '../screens/BookDonateScreen';
import FuelCalculatorScreen from '../screens/FuelCalculatorScreen';
import FuelRecordScreen from '../screens/FuelRecordScreen';
import ProfileScreen from '../screens/SettingsScreen';
import StatusScreen from '../screens/StatusScreen';
import MapScreen from '../screens/MapScreen';
//import NotificationScreen from '../screens/NotificationScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: BookDonateScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/home.png")} style={{width:31, height:31}}/>,
      tabBarLabel : "HOME",
    }
  },
  FuelCalculator: {
    screen: FuelCalculatorScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/ruppes.png")} style={{width:27, height:27}}/>,
      tabBarLabel : "FuelCostCalculator",
    }


  },

  //Notification: {
    //screen: NotificationScreen,
    //navigationOptions :{
      //tabBarIcon : <Image source={require("../assets/ruppes.png")} style={{width:27, height:27}}/>,
      //tabBarLabel : "Notification",
    //}


  FuelRecord: {
    screen: FuelRecordScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/petrolFiller.png")} style={{width:27, height:27}}/>,
      tabBarLabel : "Fill",
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/profile.png")} style={{width:29, height:29}}/>,
      tabBarLabel : "Profile",
    }
  },
  
  StatusScreen: {
    screen: StatusScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/status.png")} style={{width:27, height:27}}/>,
      tabBarLabel : "Fill",
    }
  },
  MapScreen: {
    screen: MapScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/map.png")} style={{width:27, height:27}}/>,
      tabBarLabel : "Fill",
    }
  }



});
