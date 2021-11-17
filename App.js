import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator}from '@react-navigation/stack'
import Login from './screens/login';
import Home from './screens/home';
import Signup from './screens/signup';
import Cart  from './screens/cart';
import ProdDetails from './screens/productdet';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <View style={{flex: 1}}>
  <NavigationContainer>
    <Stack.Navigator screenOptions = {{headerShown: false}}> 
    <Stack.Screen name="Login" component={Login}/> 
    <Stack.Screen name="Home" component={Home}/> 
    <Stack.Screen name="Signup" component={Signup}/> 
    <Stack.Screen name="Cart" component={Cart}/>
    <Stack.Screen name="ProdDetails" component={ProdDetails}/>

    </Stack.Navigator> 
  </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  } 
  });