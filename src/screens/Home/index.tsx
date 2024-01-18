import { Box, Row } from "native-base";
import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image, Button, Pressable, TextInput, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import ImgSlider from '../../components/ImdSlider'
import { navigation } from "../../routers/navigation";




const Login = () => {

  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (

    <SafeAreaView style={styles.Container}>

      <StatusBar backgroundColor="#9073CE" barStyle="dark-content" />

      <Row bg={'#9073CE'} alignItems={'center'} justifyContent={'space-around'} space={3}  >
        <Image source={require('../../assets/Images/logo.jpg')} style={styles.logoimg} />
        {/* <Image source={require('../../assets/Images/cart.svg')} style={styles.logoimg} />
  <Image source={require('../../assets/Images/heart.jpg')} style={styles.logoimg} />
  <Image source={require('../../assets/Images/search.jpg')} style={styles.logoimg} /> */}
        <Row space={3}  >
          <AntDesign name='hearto' size={20} color={'black'} />
          <AntDesign name='shoppingcart' size={20} color={'white'} />
          {/* <MaterialIcons name='favorite-border' size={20} color={'green'} />
  <MaterialIcons name='favorite-border' size={20} color={'white'} />
  <MaterialIcons name='favorite-border' size={20} color={'yellow'} /> */}
          {/* <Icon name='favorite-border' size={20} color={'yellow'} /> */}

        </Row>
      </Row>
     <Pressable onPress={()=>navigation.navigate('Welcome')} >
     <ImgSlider />
     </Pressable>
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
  brand: {

    top: -20,
    backgroundColor: "#9073CE",
    height: 55,
    alignItems: "center",
  },
  but: {
    width: 350,
    height: 50,
    bottom: -190,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#E65C21",
    textAlignVertical: 'top',
    justifyContent: "center",
  },
  txtip: {
    width: 350,
    height: 50,
    top: 120,
    borderColor: "#6C657A",
    borderWidth: 1,
    borderRadius: 5,
    textAlignVertical: 'top',
    justifyContent: "center",

  },
  txtip2: {
    width: 350,
    height: 50,
    top: 140,
    borderColor: "#6C657A",
    borderWidth: 1,
    borderRadius: 5,
    textAlignVertical: 'top',
    justifyContent: "center",
    flexDirection: 'row',
  },
  label: {
    fontFamily: "RobotoCondensed-Bold",
    fontSize: 16, color: "#4E3A78",
    fontWeight: "500",
    left: 7,
    alignSelf: "flex-start",
    flex: 1,
    width: 350,
  },

})

export default Login;
