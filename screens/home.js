import React from "react";
import { View, Text, TouchableOpacity, ImageBackground,FlatList, StyleSheet, ScrollView,Image} from "react-native";
import {  AntDesign, SimpleLineIcons, } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";

export default function Home({navigation}){
    const categories =[
        {text: 'Trending', key: '1'},
        {text: 'Popular', key: '2'},
        {text: 'We recommend', key: '3'},
    ];

    const apple =[
      {img: {uri: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/42-alu-space-sport-black-nc-gallery1_GEO_GB?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1594259769000'}, text: 'Series 3', price: 'GH 2000', key: '1', about:''},
      {img: {uri: 'https://www.luluhypermarket.com/medias/1496934-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4OTUwMHxpbWFnZS9qcGVnfGltYWdlcy9oMjQvaGJhLzkwNjkwMzM4NDg4NjIuanBnfDI4M2UyYmYzNWRlNmVjM2IyN2JkZjI3ZmMxYjRjNjRmMmY1NTUxMWJiZGI4YmU5NjU5N2NjODRiZjdmODI5MmE'}, text: 'Series 4', price:'GH 3000', key: '2', about:''},
      {img: {uri: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FWVF2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1580325951999'}, text: 'Series 5', price: 'GH 5000 ', key: '3', about:''},
      {img: {uri: 'https://www.telefonika.com/wp-content/uploads/2020/11/S6-Series-Space-Gray-Alu-GPS.jpg'}, text: 'Series 6', price: 'GH 8000', key: '3', about:''},
      
  ];

  const hermes =[
    {img: {uri: 'https://dice.bg/content/pics/45710_apple-watch-herms-series-5-40mm-noir-space-black-stainless-steel-case-with-double-tour-gps--cellular-umen-chasovnik-ot-apple_3276749172.jpg'}, text: 'Apple Hermes', price:'GH 10000', key: '3', about:''},
    {img: {uri: 'https://cdn.theluxurycloset.com/uploads/opt/products/full/luxury-men-hermes-used-watches-p156654-0001.jpg'}, text: 'Hermes Digital', price: 'GH 6000', key: '3', about:''},
    {img: {uri: 'https://assets.hermes.com/is/image/hermesproduct/carre-h-watch-38-x-38mm--045777WW00-front-1-300-0-600-600_b.jpg'}, text: 'Hermes Carre H', price: 'GH 7000', key: '3', about:''},
    {img: {uri: 'https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/h/e/hermes-hour-h-quartz-black-dial-ladies-watch-044937ww00_1.jpg?width=350&height=350'}, text: 'Hermes Classic', price: 'GH 7000', key: '3', about:''},
    {img: {uri: 'https://www.watchonista.com/sites/default/files/watchographer/1/watches/491364/pictures/hermes_h08_titanium_and_dlc_orange_strap_cjoelvonallmen_0.jpg'}, text: 'Hermes HO8', price:'GH 8000', key: '3', about:''},
];

         return(
            <View style={{flex:1 , backgroundColor: "white", paddingTop: 30, paddingHorizontal: 10, }}>
              
                  
                  <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>

                  <TouchableOpacity>
                  <AntDesign name="setting" size={24} color="black" />
                  </TouchableOpacity>
                  
                   
                  <TextInput style={{borderWidth:1,width:150,borderRadius:5,alignSelf:"auto"}} placeholder="search" />
                
                  <TouchableOpacity onPress={() => {navigation.navigate ('Cart');}}>
                  <SimpleLineIcons name="handbag" size={24} color="black" />
                  </TouchableOpacity>
    
                  </View>
                  <View style={{}}>
                  <Text style={{fontSize: 30, fontWeight:'600', marginTop: 30, marginLeft: 10}}> Discover our exclusive watches</Text>

                    </View>
                            <View> 
                                <FlatList 
                                data={categories}
                                showsHorizontalScrollIndicator={false}
                                horizontal
                                renderItem={({ item }) => (
                                    <TouchableOpacity>
                                        <View style= {{}}>
                                        <Text style= {{}} > {item.text} </Text>
                                        </View>
                                    </TouchableOpacity>
                                )} 
                                />


                  </View>
                  <ScrollView showsVerticalScrollIndicator={false}>

                  <View style={{paddingTop:10}}>
                      <Text style={{color: "black", fontSize: 24, fontWeight: '600', textAlign:'center'}}> Apple Watches</Text>

                        <View>
                        <FlatList 
                            data={apple}
                            showsVertitalScrollIndicator={false}
                            vertical
                            renderItem={({ item }) => (
                              <TouchableOpacity onPress={()=>{navigation.navigate('ProdDetails', item)}}>
                                <View style= {{alignItems:'center',paddingHorizontal:20}}>
                                  <Image source={item.img} style={{width:300, height:300, marginTop:40,}} />
                                  <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                                  <Text style= {{fontSize: 20, }} > {item.text} </Text>
                                  <Text style={{fontSize: 20,}}>{item.price}</Text>
                                  </View>
                                </View>
                              </TouchableOpacity>
                            )} 
                          />
                        </View>



                  </View>

                  <View style={{paddingTop:10}}>
                      <Text style={{color: "black", fontSize: 24, fontWeight: '600', textAlign:'center', marginTop: 50}}> Hermes Watches</Text>

                        <View>
                        <FlatList 
                            data={hermes}
                            showsVertitalScrollIndicator={false}
                            vertical
                            renderItem={({ item }) => (
                              <TouchableOpacity onPress={()=>{navigation.navigate('ProdDetails', item)}}>
                                <View style= {{alignItems:'center',paddingHorizontal:20}}>
                                  <Image source={item.img} style={{width:300, height:300, marginTop:40,}} />
                                  <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                                  <Text style= {{fontSize: 20, }} > {item.text} </Text>
                                  <Text style={{fontSize: 20,}}>{item.price}</Text>
                                  </View>
                                </View>
                              </TouchableOpacity>
                            )} 
                          />
                        </View>



                  </View>
                  </ScrollView>

                  
 </View>
    );
}