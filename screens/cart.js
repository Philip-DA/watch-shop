import React from "react";
import { View, Text, TouchableOpacity, } from "react-native";
import { Ionicons, } from '@expo/vector-icons';

export default function Cart({navigation}){

    return( 
        <View>
            <View style={{marginTop:30, flexDirection:'row',alignItems:'center', marginLeft: 10}}>
                <TouchableOpacity onPress={() => {navigation.navigate ('Home');}}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{marginLeft:"35%", fontSize: 20}}>My Cart</Text>

           
         


       
    </View>
    <View style={{color: 'black',marginTop:"7%"}}>
                    <TouchableOpacity onPress={() => {navigation.navigate ('Login');}}>
                <Text style={{color: 'black',marginLeft:"79%", fontWeight:'bold',fontSize:18, marginBottom:50}}> Log Out</Text>
                </TouchableOpacity>
                </View>     

    </View>
    );
}