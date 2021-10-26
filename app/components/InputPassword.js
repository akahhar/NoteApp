import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import { colors, spacing } from '../theme'
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
    input: {
        // padding: spacing[5],
        // paddingLeft: spacing[2],
        // marginHorizontal: spacing[5],
        // marginBottom: spacing[15]
    },
    passwordBody: {
        padding: spacing[5],
        paddingLeft: spacing[2],
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
    }

})
export default function InputPassword({ placeholder, value, onChangeValue, style }) {
    const [hidePass, setHidePass] = useState(true);
    return (
        <View style={styles.passwordBody}>
            <TextInput
                autoCorrect={false}
                secureTextEntry={hidePass ? true : false}
                style={[styles.input, style]}
                onChangeText={onChangeValue}
                value={value}
                placeholder={placeholder}
            />
            <FontAwesome
                onPress={() => setHidePass(!hidePass)}
                name={hidePass ? 'eye-slash' : 'eye'}
                size={spacing[8]}
                color={colors.grey}
            />
        </View>
    )
}
