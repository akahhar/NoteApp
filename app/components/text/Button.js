import React from 'react'
import { View,Pressable, StyleSheet } from 'react-native'
import { spacing } from '../../theme'
import Text from './text'
const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#FFE600',        
        width:165,
        height:40,        
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default function Button({ title, onPress, style }) {
    return (
        <Pressable style={[styles.btn, style]} onPress={onPress}>
            <Text>{title}</Text>
        </Pressable>
    )
}
