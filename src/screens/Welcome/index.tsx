import React from "react";
import {View,Text,SafeAreaView, StyleSheet, StatusBar, Image, Button} from "react-native";
import {Pressable} from "native-base";
import Login_button from '../../components/loginButton'
import { Signup_button } from "../../components";
import { navigation } from "../../routers/navigation";

const OnBoarding = () =>{
  return(
    <SafeAreaView style={styles.Container}>

      <StatusBar backgroundColor="#9073CE" barStyle="dark-content" />
    
      <View style={styles.brand}>
        <Image source={require('../../assets/Images/logo.jpg')} style={styles.logoimg} />
        <Text style={styles.logotxt}>Belladonna</Text>
      </View>
    
      <View style={{alignItems:"center",}}>
        <Image source={require('../../assets/Images/illus.png')} style={{height:250,width:300,top:30,alignSelf:"center"}} />
        <Text style={styles.illus}>Hello, Welcome !</Text>
        <Text style={{fontFamily:"RobotoCondensed-Bold",fontSize:16,color:"#fff",top:60,alignSelf:"center",fontWeight:"bold"}}>hunt the uncompromising style</Text>
      </View>
    
      <View style={{alignItems:"center",}}>
    
        {/* <Pressable onPress={()=> console.log("go to Log in page")}>
          <View style={styles.but}><Text style={{fontFamily:"RobotoCondensed-Bold",fontSize:16,color:"#fff",fontWeight:"bold",alignSelf:"center",}}>Log in</Text></View>
        </Pressable> */}

        <Pressable p={'4'} bg={'coolGray.600'} onPress={()=>navigation.navigate('Login')} >
            <Text>Test</Text>
        </Pressable>

        {/* <Login_button onPress={()=>navigation.navigate('Login')
        } text={"Log in"} /> */}
        <Signup_button />
        {/* <Pressable onPress={()=> console.log("go to Sign up page")}>
          <View style={styles.but2}><Text style={{fontFamily:"RobotoCondensed-Bold",fontSize:16,color:"#fff",fontWeight:"bold",alignSelf:"center",}}>Sign up</Text></View>
        </Pressable> */}
        
      </View>

    </SafeAreaView>
      )
    }

    // "node": ">=18"


const styles = StyleSheet.create({
  Container:{
    flex:1,
    // alignItems:'center',
    // justifyContent:'center',    
    backgroundColor:"#9073CE",
    paddingTop:20,
  },
  logoimg:{
    height:60,
    width:60,
  },
  logotxt:{
    color:"#100822",
    fontFamily: 'DMSerifDisplay-Regular',
    fontSize:30,
    top:2,
  },
  brand:{
    flexDirection:"row",
  },
  illus:{fontFamily:"RobotoCondensed-Bold",fontSize:30,color:"#fff",top:38,alignSelf:"center",fontWeight:"bold"},
  but:{
    width:280,
    height:60,
    top:110,
    borderColor:"#fff",
    borderWidth:2,
    borderRadius:10,
    backgroundColor:"#E65C21",
    textAlignVertical:'top',
    justifyContent:"center",
  },
  but2:{
    width:280,
    height:60,
    top:150,
    borderColor:"#fff",
    borderWidth:2,
    borderRadius:10,
    backgroundColor:"#F2AA8C",
    textAlignVertical:'top',
    justifyContent:"center",
  },

})

export default OnBoarding


