import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button 
        onPress = {() => navigation.navigate('Componets')}
        title = "Go to Components Demo"
      />
      <Button
        title = "Go to List Demo"
        onPress = {() => navigation.navigate('list')}
      />
      <Button
        title = "Go to Image Screen Demo"
        onPress = {() => navigation.navigate('Image')}
      />
      <Button
        title = "Go to Counter Screen"
        onPress = {() => navigation.navigate('Counter')}
      />
      <Button 
        title= "Go to Colour Screen"
        onPress= {()=> navigation.navigate('Colour')}
      />
      <Button
        title= "Go to Squar Screen"
        onPress={()=> navigation.navigate('Squar')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
