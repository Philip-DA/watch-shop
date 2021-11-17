import React from 'react';
import {  Text,   View,  Image, StyleSheet, FlatList, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';



export default function ProdDetails({navigation, route}) {
    const item = route.params;

    return (
        <View style={{paddingHorizontal:20, paddingTop:110}}>
            <StatusBar style='auto' />
            <Image source={item.img}  style={styles.pic} />
            <View>
                <View style={{justifyContent:'space-between',marginTop: '10%'}}>
                    <Text style={styles.title}>{item.text}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
                <Text style={styles.about}>{item.about}</Text>
                <FlatList />
                <TouchableOpacity>
                    <View style={{marginTop: '10%', backgroundColor:'dodgerblue',  flexDirection:'row', justifyContent:'space-around', alignSelf:'center', borderWidth: 1,borderRadius: 25,width: 200,alignItems: 'center',padding: 5,}}>
                    <Text style={{color:'white',}}>+</Text>
                    <Text style={{color:'white',}}>ADD TO CART</Text>
                    </View>
                </TouchableOpacity>
            </View>

            

        </View>
    )
}

const styles = StyleSheet.create({
pic:{
    width:'80%',
     height:'40%', 
     alignSelf:'center',
    },
title:{
    fontSize:25,
},

price:{
    fontSize:20,
    marginTop:5,
},   

about:{
    fontSize:20,
    marginTop:5,
},

});