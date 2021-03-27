import React from "react";
import {View,Text, TouchableOpacity as ButtonContainer} from "react-native";
import styles from "./styles";

export default function Home({route,navigation}){
       return(
             <View style={styles.container}>
                <Text style={styles.text}>Home Screen</Text>
                <Text style={styles.text}> Welcome {route.params.names}!!</Text>  
                <ButtonContainer onPress={()=>{
                      navigation.goBack();
          }}  style={styles.buttoncontainer}>
      <Text style={styles.buttonText}>Go back</Text>
      </ButtonContainer>
             </View>          

       )        
}