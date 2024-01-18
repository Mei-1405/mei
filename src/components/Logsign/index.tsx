import { View, Text, Button, Pressable } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { navigation } from '../../routers/navigation'
import { Login } from '../../screens'
import { colors } from '../../styles'


type Buttonprops ={name:string};


const Login_button = (props:Buttonprops) => {

    return (
        <SafeAreaView>
            <Pressable bg={colors.orange[500]} px={'155'} py={'3'}  top={'165'} borderColor={'white'} borderRadius={'5'} borderWidth={'2'} onPress={() => navigation.navigate("Home")}>
                <Text textAlign={'center'} color={'white'} fontWeight={'extrabold'} >{props.name}</Text>
            </Pressable>
        </SafeAreaView >
    )
}

export default Login_button

