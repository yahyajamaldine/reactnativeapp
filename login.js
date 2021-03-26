import React from "react";
import {View,Text,TextInput,StyleSheet, TouchableOpacity as ButtonContainer} from "react-native";
import styles from "./styles";

export default function Login(){

  return(<View style={styles.container}>
      <Text style={styles.text}>Log In </Text>
      <TextInput style={styles.textp} placeholder="Email" />
      <TextInput style={styles.textp} placeholder="Password" />
      <ButtonContainer onPress={""} style={styles.buttoncontainer}>
      <Text style={styles.buttonText}>Log in</Text>
      </ButtonContainer>
      <ButtonContainer onPress={""} style={styles.buttoncontainerUP}>
      <Text style={styles.buttonText}>Sing up </Text>
      </ButtonContainer>
      
      <Text style={{color:"#73767D"}}>Forgot Password ? </Text>
  </View>
  )
}
