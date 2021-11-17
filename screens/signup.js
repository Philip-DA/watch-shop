import React from "react";
import { View,Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";

export default function Signup({navigation}){

    return (
        <ImageBackground blurRadius={10} source={{uri: "https://images.unsplash.com/photo-1631863552122-3072cf599a46?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGFwcGxlJTIwd2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}
        style={{flex:1}}>


    <View>
        <Text style={{ fontSize: 24, fontWeight: '600', textAlign:'center', marginTop: 30}}>Sign Up</Text>

        <Text style={{color: 'black', textAlign: 'center', fontSize: 20, fontWeight: "400", marginTop:40,}} ><Text style={{color: "white"}}>Fir</Text>st name</Text>
        <TextInput secureTextEntry= {true} style={{padding: 10, fontSize: 20, borderWidth:2, backgroundColor: 'white', alignSelf:'center',borderRadius: 20, width: 350}}/>

        <Text style={{color: 'black', textAlign: 'center', fontSize: 20, fontWeight: "400", marginTop:40,}} ><Text style={{color: "white"}}>La</Text>st name</Text>
        <TextInput secureTextEntry= {true} style={{padding: 10, fontSize: 20, borderWidth:2, backgroundColor: 'white', alignSelf:'center',borderRadius: 20, width: 350}}/>

        <Text style={{color: 'black', textAlign: 'center', fontSize: 20, fontWeight: "400", marginTop:40,}} >Email</Text>
        <TextInput placeholder='eg. Philip21@gmail.com' style={{padding: 10, fontSize: 20, borderWidth:2, backgroundColor: 'white', alignSelf:'center',borderRadius: 20, width: 350}}/>

        <Text style={{color: 'black', textAlign: 'center', fontSize: 20, fontWeight: "400", marginTop:40,}} ><Text style={{color: "white"}}>Pa</Text>ssword</Text>
        <TextInput secureTextEntry= {true} placeholder='password' style={{padding: 10, fontSize: 20, borderWidth:2, backgroundColor: 'white', alignSelf:'center',borderRadius: 20, width: 350}}/>


        <TouchableOpacity onPress={() => {navigation.navigate ('Home');}}>
               <View style={{marginHorizontal: 100, alignItems: 'center', height: 50, borderWidth: 1, borderRadius: 20, backgroundColor: 'black', marginTop:20}}>
                   <Text style={{color: 'white', fontSize: 20, fontWeight: '500', marginTop: 8}}>Login</Text>
               </View>
</TouchableOpacity>



    </View>
    </ImageBackground>
    );
    
}