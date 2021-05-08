import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>
      {props.children}
    </View> 
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal:10,
    paddingVertical: 5,
    backgroundColor: '#03BFB8',
    borderRadius: 10,
    shadowColor: 'white',
    shadowOpacity: 0.26,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 8,
    elevation: 6
  }
});