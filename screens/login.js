import React from "react";
import { View, TextInput, Text, Image, TouchableOpacity, ImageBackground, } from "react-native";



export default function Login({navigation}){
    return (
        <ImageBackground blurRadius={10} source={{uri: "https://images.unsplash.com/photo-1610230099906-7ad016cf5cf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXBwbGUlMjB3YXRjaHxlbnwwfDF8MHxibGFja3w%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}
            style={{flex:1}}>
            <View style={{justifyContent: "center", alignItems: "center",paddingTop:100}}>
    
                <Image 
                    style={{
                    width: 200,
                    height: 200,
                    borderRadius: 10,
                    marginBottom: 30
                    }}
                    source={{uri: "https://images.unsplash.com/photo-1590688560938-57c514814ddb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXBwbGUlMjB3YXRjaHxlbnwwfDF8MHxibGFja3w%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} />
                <Text style={{color: "grey", fontSize: 30, fontWeight: '600'}}> Apple Watch</Text>
                <Text style={{color: "rgba(0,0,0,0.7)", fontSize: 20, fontWeight: '400', fontStyle: 'italic'}}>Hermes</Text>
                
            </View>
            <View>
                <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '400', color: 'white'}}>Email</Text>
            
    <TextInput placeholder='eg. Philip21@gmail.com' style={{padding: 10, fontSize: 20, borderWidth:1, backgroundColor: 'white', alignSelf:'center',borderRadius: 20, width: 350}}/>
   
                
                
                <Text style={{color: 'white', textAlign: 'center', fontSize: 20, fontWeight: "400", marginTop:10,}} >Password</Text>

                
     <TextInput secureTextEntry= {true} placeholder='password' style={{padding: 10, fontSize: 20, borderWidth:2, backgroundColor: 'white', alignSelf:'center',borderRadius: 20, width: 350}}/>

     
   <TouchableOpacity onPress={() => {navigation.navigate ('Home');}}>
               <View style={{marginHorizontal: 100, alignItems: 'center', height: 50, borderWidth: 1, borderRadius: 20, backgroundColor: 'black', marginTop:10}}>
                   <Text style={{color: 'white', fontSize: 20, fontWeight: '500', marginTop: 8}}>Login</Text>
               </View>
</TouchableOpacity>
            </View> 
    </ImageBackground>
    );
}
