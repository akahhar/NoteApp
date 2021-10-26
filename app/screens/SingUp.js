import React, { useState } from 'react'
import { View, StyleSheet, Pressable, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../components/Input'
import InputPassword from '../components/InputPassword'
import RadioButton from '../components/RadioButton'
import Button from '../components/text/Button'
import Text from '../components/text/text'
import { colors, spacing } from '../theme'
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config'


const styles = StyleSheet.create({
    SingUp: {
        // justifyContent: 'center',        
        // padding: spacing[5],
        paddingHorizontal: spacing[5],
        backgroundColor: colors.white,
        flex: 1
    },
    loginImg: {
        width: '90%',
        alignSelf: 'center',
    },
    mt: {
        marginTop: spacing[10]
    },
    loginFooter: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 50,
    },
    flexRow: {
        flexDirection: 'row'
    }

})
const genderOption = [
    'Male', 'Female', 'Other'
]

export default function SingUp() {
    const navigation = useNavigation();
    const [gender, setGender] = useState('Male')
    const [email, setEmail] = useState('')
    const [passsword, setPassword] = useState('')
    const [fullname, setFullname] = useState('')
    const [age, setAge] = useState('')
    const [loading, setLoading] = useState(false)

    const SingUpData = () => {
        setLoading(true);
        firebase.auth()
            .createUserWithEmailAndPassword(email, passsword)
            .then((response) => {
                const uid = response.user.uid;
                const userProfileData = {
                    id: uid,
                    name: fullname,
                    email: email,
                    age: age,
                    gender: gender
                }
                const userRef = firebase.firestore().collection('users')
                userRef.doc(uid).set(userProfileData)
            }
            ).catch((error) => {
                console.log('Error' + error);
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        setLoading(false);
    }    

    return (
        <SafeAreaView style={styles.SingUp}>
            <View>
                <Input placeholder={'Email'} onChangeValue={(text) => setEmail(text)} />
                <InputPassword placeholder={'Password'} onChangeValue={(text) => setPassword(text)} />

                <Text preset='mt-sm textGray' >Password must include at least 8 characters, 1 symbol and 1 capital letter (example: @Bttr123)
                </Text>

                <Input placeholder={'Full Name'} onChangeValue={(text) => setFullname(text)} style={styles.mt} />
                <Input placeholder={'Age'} onChangeValue={(text) => setAge(text)} />

                <View style={{ flexDirection: 'row' }}>
                    <Text preset='textGray' >Select Gender:</Text>
                    {genderOption.map((label, index) => (
                        <RadioButton key={index}
                            label={label}
                            value={gender}
                            setValue={setGender}
                        />
                    ))}
                </View>

                {loading ? <ActivityIndicator /> :
                    <Button onPress={SingUpData} style={{ alignSelf: 'center', marginTop: spacing[20] }} title='Submit' />
                }
            </View>
            <View style={[styles.flexRow, styles.mt]}>
                <Pressable onPress={() => navigation.navigate('TermsOfUse')}>
                    <Text preset='text-xs textGray'>By Countinuing,you accept the <Text preset='bold TextSuccess'>Terms of use</Text> use </Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PrivacyPolicy')} >
                    <Text preset='text-xs textGray'>and <Text preset='bold TextSuccess'>Privacy Policy</Text></Text>
                </Pressable>
            </View>

            <Pressable onPress={() => navigation.navigate('Login')} style={styles.loginFooter}>
                <Text>Remember your account? <Text preset='bold TextSuccess'>Login</Text></Text>
            </Pressable>
        </SafeAreaView>
    )
}
