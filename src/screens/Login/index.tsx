import { Text, Box } from 'native-base'
import React from 'react'
import { SafeAreaView } from '../../layout'
import { colors } from '../../styles'

const Index = () => {
    return (
        <SafeAreaView>
            <Box justifyContent={'center'} flex={1} alignItems={'center'} >
                <Text bold color={colors.primary[900]} >Login page</Text>
            </Box>
        </SafeAreaView>
    )
}

export default Index
