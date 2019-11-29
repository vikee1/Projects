import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetails from '../Components/ImageDetails.js'

const ImageScreen = ()=> {
    return (
        <View>
            <ImageDetails 
            imageName= "Forest" 
            imageSource={require('../../assets/forest.jpg')} 
            score={9} 
            />
            <ImageDetails 
            imageName= "Mountain" 
            imageSource= {require('../../assets/mountain.jpg')} 
            score={8}
            />
            <ImageDetails 
            imageName= "Beach" 
            imageSource= {require('../../assets/beach.jpg')} 
            score={7}
            />
        </View>
    );
};

const style = StyleSheet.create({});

export default ImageScreen;