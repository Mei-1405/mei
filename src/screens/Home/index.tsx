import { Box, Row, ScrollView,Text,  Image, Button, Pressable, ToastProvider, Column,} from "native-base";
import React, { useState } from "react";
import { View,  SafeAreaView, StyleSheet, TextInput, TouchableOpacity ,StatusBar} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import ImgSlider from '../../components/ImdSlider'
import { navigation } from "../../routers/navigation";
import { colors } from "../../styles";
import { Selectloc } from "../../components";

const Login = () => {

  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (

    <SafeAreaView style={styles.Container}>
       <ScrollView>

      <StatusBar backgroundColor="#9073CE" barStyle="dark-content" />

      <Row bg={'#9073CE'} alignItems={'center'} justifyContent={'space-between'} space={3} p={'2'} px={'3'} >
        <Image source={require('../../assets/Images/logo.jpg')} style={styles.logoimg} />
        <Row space={7} justifyContent={"space-evenly"} >
          <AntDesign name='shoppingcart' size={30} color={'#100822'}  />
          <AntDesign name='hearto' size={30} color={'#100822'} />
          <AntDesign name='search1' size={30} color={'#100822'} />
          <AntDesign name='user' size={30} color={'#100822'} />
        </Row>
      </Row>

      <Box bg={'white'} w={'400'} h={'155'} mt={'2'} pt={'2'} pl={'2'}>
        <Text color={"gray.400"} fontSize={'10'} >Location</Text>
        <Row>
          <Text color={"gray.600"} fontSize={'12'}>Mylapore, Chennai</Text>
          <Box top={'1.5'} left={'1'}>
            <AntDesign name='down' size={16} color={'#100822'} />
          </Box>
        </Row>
        <ScrollView horizontal={true} mt={'3'}>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Image source={require('../../assets/Images/Picture1.jpg')} w={'70'} h={'90'} mr={'3'}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Image source={require('../../assets/Images/Picture2.jpg')} w={'70'} h={'90'} mr={'3'}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Image source={require('../../assets/Images/Picture3.jpg')} w={'70'} h={'90'} mr={'3'}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Image source={require('../../assets/Images/Picture4.jpg')} w={'70'} h={'90'} mr={'3'}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Image source={require('../../assets/Images/Picture5.jpg')} w={'70'} h={'90'} mr={'3'}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Image source={require('../../assets/Images/Picture6.jpg')} w={'70'} h={'90'} mr={'3'}/>
          </Pressable>
        </ScrollView>      
      </Box>

      <Box top={'2'}>
        <ImgSlider />
      </Box>

      <Box bg={'white'} w={'400'} h={'270'} mt={'4'} pt={'5'} pl={'2'}>
        <Text fontWeight={'900'} fontSize={'16'} color={"#1A3060"} alignSelf={'center'}>New Arrival</Text>
        <Box bg={colors.orange[500]} w={'8'} h={'2.2'} alignSelf={'center'}></Box>

        <ScrollView horizontal={true} mt={'2'}>

          <Pressable onPress={() => navigation.navigate("Login")}>
            <Column>
              <Image source={require('../../assets/Images/dress1.jpg')} w={'109'} h={'163'} mr={'3'}/>
              <Text fontSize={12} color={colors.dark[900]} fontWeight={'light'}>Lilac Co-ord set</Text>
              <Text fontSize={13} color={colors.dark[900]}>₹ 2649</Text>
            </Column>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Login")}>
            <Column>
              <Image source={require('../../assets/Images/dresss2.jpg')} w={'109'} h={'163'} mr={'3'}/>
              <Text fontSize={12} color={colors.dark[900]} fontWeight={'light'}>Lilac Co-ord set</Text>
              <Text fontSize={13} color={colors.dark[900]}>₹ 2649</Text>
            </Column>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Login")}>
            <Column>
              <Image source={require('../../assets/Images/dress3.jpg')} w={'109'} h={'163'} mr={'3'}/>
              <Text fontSize={12} color={colors.dark[900]} fontWeight={'light'}>Lilac Co-ord set</Text>
              <Text fontSize={13} color={colors.dark[900]}>₹ 2649</Text>
            </Column>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Login")}>
            <Column>
              <Image source={require('../../assets/Images/dress4.jpg')} w={'109'} h={'163'} mr={'3'}/>
              <Text fontSize={12} color={colors.dark[900]} fontWeight={'light'}>Lilac Co-ord set</Text>
              <Text fontSize={13} color={colors.dark[900]}>₹ 2649</Text>
            </Column>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Login")}>
            <Column>
              <Image source={require('../../assets/Images/dress5.jpg')} w={'109'} h={'163'} mr={'3'}/>
              <Text fontSize={12} color={colors.dark[900]} fontWeight={'light'}>Lilac Co-ord set</Text>
              <Text fontSize={13} color={colors.dark[900]}>₹ 2649</Text>
            </Column>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Login")}>
            <Column>
              <Image source={require('../../assets/Images/dress6.jpg')} w={'109'} h={'163'} mr={'3'}/>
              <Text fontSize={12} color={colors.dark[900]} fontWeight={'light'}>Lilac Co-ord set</Text>
              <Text fontSize={13} color={colors.dark[900]}>₹ 2649</Text>
            </Column>
          </Pressable>

        </ScrollView>

      </Box>
     </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#F2EEF9",

  },

  //#9073CE
  logoimg: {
    height: 45,
    width: 45,
  },
  logoimg1: {
    height: 50,
    width: 50,
  },
  logotxt: {
    color: "#100822",
    fontFamily: 'DMSerifDisplay-Regular',
    fontSize: 23,
    left: 5,
  },
 

})

export default Login;
