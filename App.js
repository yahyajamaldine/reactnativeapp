import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./login";
import Home from "./Home";
import Singup from "./Singup";
const Stack=createStackNavigator();
export default function App(){
  return(
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
       <Stack.Screen  name="Login" component={Login} />
       <Stack.Screen name="home" component={Home} />
       <Stack.Screen name="singup" component={Singup} />
      </Stack.Navigator>
     </NavigationContainer>            
  )
}
