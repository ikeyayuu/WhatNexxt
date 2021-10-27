import React from 'react'
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'

export const Header = (props) => {
    return (
        <View style={styles.header}>
           <Text style={styles.title}>{ props.title }</Text>
        </View>
      )  
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#ffbb3d',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        color:'#333333',
        fontSize: 28,
        fontWeight: '900',
        textTransform: 'uppercase',
    }
});