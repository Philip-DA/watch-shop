import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, } from "react-native";


export default function Cart({navigation}){

    return(
        <ImageBackground  blurRadius={10} source={{uri: "https://images.unsplash.com/photo-1631863552122-3072cf599a46?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGFwcGxlJTIwd2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}
        style={{flex:1}}>

        
<View style={{position:'absolute', bottom:'40%', alignSelf:'center',}}>
<Text  style={{color: "grey", fontSize: 60, fontWeight: '600', }}> Welcome</Text>
</View>
 
 <View style={{position:'absolute', bottom:'30%', alignSelf:'center', borderWidth:1, borderColor:'grey', backgroundColor:'grey', borderRadius:25, paddingHorizontal:20, 
}}>
     <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
     <Text  style={{color: "white", fontSize: 30, fontWeight: '600', }}> Get Started</Text>
     </TouchableOpacity>
 </View>
</ImageBackground>
    );

}