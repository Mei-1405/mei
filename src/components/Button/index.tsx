import { View, Text, Button, Pressable } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { navigation } from '../../routers/navigation'
import { Login } from '../../screens'
import { colors } from '../../styles'

const Login_button = () => {
    return (
        <SafeAreaView>
            <Pressable bg={colors.primary[500]} p={'4'} onPress={() => navigation.navigate("Login")}>
                <Text textAlign={'center'}>Loblacg in</Text>
            </Pressable>
        </SafeAreaView >
    )
}

export default Login_button

