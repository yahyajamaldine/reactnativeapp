import React, { useState } from "react";
import {View,Text,TextInput, TouchableOpacity as ButtonContainer, Alert} from "react-native";
import styles from "./styles";

export default function Login({navigation}){
  const [name, setname] = useState(null);
  const [pass,setpass]=useState(null)
  return(<View style={styles.container}>
      <Text style={styles.text}>Log In </Text>
      <TextInput style={styles.textp} placeholder="Name" onChangeText={e=>{setname(e)}} />
      <TextInput style={styles.textp} placeholder="Password" secureTextEntry onChangeText={e=>{setpass(e)}} />
      <ButtonContainer onPress={()=>{
        if(name&&pass){
          navigation.navigate('home',{
            names:name
          })}
          else{
            Alert.alert('Please fill missed field');
          }
      }} style={styles.buttoncontainer}>
      <Text style={styles.buttonText}>Log in</Text>
      </ButtonContainer>
      <ButtonContainer onPress={()=> navigation.navigate('singup')} style={styles.buttoncontainerUP}>
      <Text style={styles.buttonText}>Sing up </Text>
      </ButtonContainer>
      
      <Text style={{color:"#73767D"}}onPress={()=>Alert.alert("This feature is  not Available")}>Forgot Password ? </Text>
  </View>
  )
}
