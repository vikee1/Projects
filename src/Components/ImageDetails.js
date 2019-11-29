import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetails = ({imageSource, imageName, score}) => {
    return (
        <View>
            <Image source={imageSource}/>
            <Text>{imageName}</Text>
            <Text>Image Score-{score}</Text>
        </View>
    );
};

const style = StyleSheet.create({

}); 

export default ImageDetails;