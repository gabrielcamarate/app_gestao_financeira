import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

export default function Moviments({ data }) {
 return (
   <View style={StyleSheet.container}>
        <Text>{data.label}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{

    }
})