import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { colors, spacing } from '../theme'

const styles = StyleSheet.create({
    input: {
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
        padding: spacing[5],
        paddingLeft: spacing[2],        
        marginBottom: spacing[10]
    }
})
export default function Input({ placeholder, value, onChangeValue, style, password = false }) {
    return (
        <TextInput autoCorrect={false}            
            style={[styles.input, style]}
            onChangeText={onChangeValue}
            value={value}
            placeholder={placeholder}

        />
    )
}
