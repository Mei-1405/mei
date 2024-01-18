import { View, Text, Button, Pressable } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { navigation } from '../../routers/navigation'
import { Login } from '../../screens'
import { colors } from '../../styles'

interface props{
    onPress:()=>void;
    text:string;
}

const Login_button = (props:props) => {
    return (
        <SafeAreaView>
            <Pressable bg={colors.orange[500]} 
             px={'125'} py={'4'}  mt={'20'} top={'50'} borderColor={'white'}
             borderRadius={'5'} borderWidth={'2'} >
                <Text textAlign={'center'} color={'white'} fontWeight={'extrabold'} >{props.text}</Text>
            </Pressable>
        </SafeAreaView >
    )
}

export default Login_button

