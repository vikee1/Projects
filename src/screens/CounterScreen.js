import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const CounterScreen = () => {
    const [counter, setcCounter] = useState(0)
    return <View>
        <Button
            title= "Increase"
            onPress= {()=> {
                setcCounter(counter +1);
            }
            }
        />
        <Button
            title= "Decrease"
            onPress= {()=> {
                setcCounter(counter -1);
            }
            }
        />
    <Text>Counter Screen:{counter}</Text>
    </View>
};
const style = StyleSheet.create({})

export default CounterScreen;