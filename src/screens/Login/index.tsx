import React,{useState} from "react";
import {View,Text,SafeAreaView, StyleSheet, StatusBar, Image, Button, Pressable, TextInput, TouchableOpacity} from "react-native";
import { Logsign_button } from "../../components";


const Login = () =>{

    const [isSecureEntry, setIsSecureEntry] = useState(true);

    return(

<SafeAreaView style={styles.Container}>

  <StatusBar backgroundColor="#9073CE" barStyle="dark-content" />

  <View style={styles.brand}>
  <Image source={require('../../assets/Images/logo.jpg')} style={styles.logoimg} />
    <Text style={styles.logotxt}>Belladonna</Text>
  </View>

  <View style={{alignItems:"center",backgroundColor:"#fff",height:465,top:-10}}>

    <Text style={{color:"#100822",fontWeight:"400",fontSize:40,top:50,fontFamily:"RobotoCondensed-Bold"}}>Log in</Text>

    <View style={{justifyContent:"space-evenly"}}>

    <View style={styles.txtip}>
      <TextInput style={styles.label} autoCapitalize="none" autoCorrect={false} placeholder="Enter Email" placeholderTextColor={'#BDBDBD'} autoFocus={false}  keyboardType="email-address" />
      </View>
  
      <View style={styles.txtip2}>
      <TextInput style={styles.label} autoCapitalize="none"  
      autoCorrect={false} placeholder="Enter Password" placeholderTextColor={'#BDBDBD'} autoFocus={false} secureTextEntry={isSecureEntry}/>
      <TouchableOpacity onPress={()=>{
        setIsSecureEntry((prev)=>!prev)
      }}>
      <Image source={isSecureEntry? require('../../assets/Images/open-eye.png') : require('../../assets/Images/close-eye.png')} style={{height:20,width:28,alignSelf:"center",marginRight:10,marginTop:14}} /> 
      </TouchableOpacity>
      </View>
    
    </View>

    <Pressable onPress={()=>console.log("hello")}><Text style={{color:"#4200FF",fontWeight:"100",fontSize:12,top:140,fontFamily:"RobotoCondensed-Bold",marginLeft:-175}}>Forgot Password ?</Text></Pressable>

    {/* <Pressable onPress={()=> console.log("go to Home page")}>
          <View style={styles.but}><Text style={{fontFamily:"RobotoCondensed-Bold",fontSize:16,color:"#fff",fontWeight:"bold",alignSelf:"center",}}>Log in</Text></View>
      </Pressable> */}
    <Logsign_button name="Log in" />

  </View>

  <View style={{backgroundColor:"#fff",height:465,top:-1}}>

    <View style={{flexDirection: 'row', alignItems: 'center', marginRight:20, marginLeft:20,marginTop:40}}>
      
      <View style={{flex: 1, height: 3, backgroundColor: '#4E3A78'}} />
      
      <View>
        <Text style={{width: 50, textAlign: 'center',color:'#4E3A78',fontWeight:"900" }}>OR</Text>
      </View>
      
      <View style={{flex: 1, height: 3, backgroundColor: '#4E3A78'}} />
      
    </View>

    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:"space-evenly" ,top:54 }}>
      
      <Image source={require('../../assets/Images/facebook.png')} style={styles.logoimg1} />
      
      <Image source={require('../../assets/Images/instagram.png')} style={styles.logoimg1} />
      
      <Image source={require('../../assets/Images/pinterest.png')} style={styles.logoimg1} />
          
    </View>

  </View>
</SafeAreaView>
  )
}
const styles = StyleSheet.create({
  Container:{
    flex:1,  
    backgroundColor:"#F2EEF9",
    paddingTop:20,
  },

  //#9073CE
  logoimg:{
    height:45,
    width:45,
  },
  logoimg1:{
    height:50,
    width:50,
  },
  logotxt:{
    color:"#100822",
    fontFamily: 'DMSerifDisplay-Regular',
    fontSize:23,
    left:5,
  },
  brand:{
    flexDirection:"row",
    top:-20,
    backgroundColor:"#9073CE",
    height:55,
    alignItems:"center",
  },
  but:{
    width:350,
    height:50,
    bottom:-190,
    borderColor:"#fff",
    borderWidth:2,
    borderRadius:10,
    backgroundColor:"#E65C21",
    textAlignVertical:'top',
    justifyContent:"center",
  },
  txtip:{
    width:350,
    height:50,
    top:120,
    borderColor:"#6C657A",
    borderWidth:1,
    borderRadius:5,
    textAlignVertical:'top',
    justifyContent:"center",
    
  },
  txtip2:{
    width:350,
    height:50,
    top:130,
    marginTop:10,
    borderColor:"#6C657A",
    borderWidth:1,
    borderRadius:5,
    textAlignVertical:'top',
    justifyContent:"center",
    flexDirection:'row',
  },
  label:{
    fontFamily:"RobotoCondensed-Bold",
    fontSize:16,color:"#4E3A78",
    fontWeight:"500",
    left:7,
    alignSelf:"flex-start",
    flex:1,
    width:350,
},

})

export default Login;
