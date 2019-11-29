import React, {useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ColourCounter from '../Components/ColourCounter';

const COLOR_INCREAMENT = 15

const SquarScreen= () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const setColor = (color, change) => {
        switch (color) {
            case 'Red': 
                red+change > 255 || red+change < 0 ? null : setRed(red + change);
                return;

            case 'Green': 
                green+change > 255 || green+change < 0 ? null : setGreen(green+change);
                return;
            case 'Blue':
                blue+change > 255 || blue+change < 0 ? null : setBlue(blue+change);
                return;
        }
    };
    return <View>
        <ColourCounter 
            onIncrease={()=> setColor("Red", COLOR_INCREAMENT)} 
            onDecrease={()=> setColor("Red", -1*COLOR_INCREAMENT)} 
            color= "Red"
        />
        <ColourCounter 
            onIncrease={()=> setColor("Green", COLOR_INCREAMENT)} 
            onDecrease={()=> setColor("Green", -1*COLOR_INCREAMENT)} 
            color= "Green"
        />
        <ColourCounter 
            onIncrease={()=> setColor("Blue", COLOR_INCREAMENT)} 
            onDecrease={()=> setColor("Blue", -1*COLOR_INCREAMENT)} 
            color= "Blue"
        />
        <View 
            style={{height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}
        />
    </View>
};

const style = StyleSheet.create({

})

export default SquarScreen;
