import React, { useState } from 'react'
import { View, SafeAreaView, Image, StyleSheet, TextInput, Pressable } from 'react-native'
import Input from '../components/Input'
import InputPassword from '../components/InputPassword'
import Button from '../components/text/Button'
import Text from '../components/text/text'
import { colors, spacing } from '../theme'


const styles = StyleSheet.create({
    login: {

        // justifyContent: 'center',        
        padding: spacing[5],
        backgroundColor: colors.white,
        flex: 1
    },
    loginImg: {
        width: '100%',
        alignSelf: 'center',
    },
    inputBody: {
        marginTop: spacing[10]
    },
    loginFooter: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 50,
    }

})
export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <View style={styles.login}>
            <View >
                <Image style={styles.loginImg} resizeMode='contain'
                    source={require('../../assets/img/loginImg.png')} />
                <Text preset='asCenter bold'>Never forget your Notes </Text>
            </View>
            <View style={styles.inputBody}>
                <Input placeholder='Email Address' value={email} onChangeValue={setEmail} />
                <InputPassword placeholder='Password' />
                <Button style={{ alignSelf: 'center', marginTop: spacing[10] }} title='Login' />
            </View>
            <Pressable onPress={() => navigation.navigate('SingUp')} style={styles.loginFooter}>
                <Text>Dont have Account? <Text preset='bold TextSuccess'>Sing Up</Text></Text>
            </Pressable>
        </View>
    )
}
