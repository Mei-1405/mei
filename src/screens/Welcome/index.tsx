import { Text, Box } from 'native-base'
import React from 'react'
import { SafeAreaView } from '../../layout'
import { colors } from '../../styles'
import { login_button } from '../../components'
import Login_button from '../../components/Button'

const Index = () => {
    return (
        <SafeAreaView>
            <Box justifyContent={'center'} flex={1} alignItems={'center'} >
                <Text bold color={colors.primary[500]} >Hello Welcome!</Text>
                <Text bold color={colors.secondary[500]} >Hello Welcome!</Text>
            </Box>
            <Login_button />
        </SafeAreaView>
    )
}

export default Index

