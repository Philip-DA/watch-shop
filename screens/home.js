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
      {img: {uri: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/42-alu-space-sport-black-nc-gallery1_GEO_GB?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1594259769000'}, text: 'Series 3', price: 'GH 2000', key: '1', about:'45mm or 41mm, Swim proof, Most crack resistant, Front crystal, Certified IP6X dust resistant'},
      {img: {uri: 'https://www.luluhypermarket.com/medias/1496934-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4OTUwMHxpbWFnZS9qcGVnfGltYWdlcy9oMjQvaGJhLzkwNjkwMzM4NDg4NjIuanBnfDI4M2UyYmYzNWRlNmVjM2IyN2JkZjI3ZmMxYjRjNjRmMmY1NTUxMWJiZGI4YmU5NjU5N2NjODRiZjdmODI5MmE'}, text: 'Series 4', price:'GH 3000', key: '2', about:'44x38x10.7mm(1.73x1.50x0.42 in), 48g (1.69 oz), Glass front (Sapphire crystal), 50m water resistant, 16GB 1GB RAM'},
      {img: {uri: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FWVF2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1580325951999'}, text: 'Series 5', price: 'GH 5000 ', key: '3', about:'44x38x10.7mm (1.73x 1.50x 0.42 in), 47.8g (1.69 oz), Glass front (Saphire crystal), 50m water resistant, 32GB 1GB RAM'},
      {img: {uri: 'https://www.telefonika.com/wp-content/uploads/2020/11/S6-Series-Space-Gray-Alu-GPS.jpg'}, text: 'Series 6', price: 'GH 8000', key: '3', about:'44x38x10.4mm (1.73x 1.50x 0.41 in), 47.1g (1.66 oz), Glass front (Saphire crystal), 50m water resistant, 32GB 1GB RAM'},
      
  ];

  const hermes =[
    {img: {uri: 'https://dice.bg/content/pics/45710_apple-watch-herms-series-5-40mm-noir-space-black-stainless-steel-case-with-double-tour-gps--cellular-umen-chasovnik-ot-apple_3276749172.jpg'}, text: 'Apple Hermes', price:'GH 10000', key: '3', about:'Band and Case in stainless steel 41mm and Double tour band in Rouge H Swift calfskin, Band made in France, Wrist circumference from 5.1 to 6.1 '},
    {img: {uri: 'https://cdn.theluxurycloset.com/uploads/opt/products/full/luxury-men-hermes-used-watches-p156654-0001.jpg'}, text: 'Hermes Digital', price: 'GH 6000', key: '3', about:'Bronze titanium watch and sunburst silver-brushed titanium bezel with mirror-polished chamfers, silver treated circular silver minutes disk, 39 x 39 mm, Hermes Manufacture movement H137'},
    {img: {uri: 'https://assets.hermes.com/is/image/hermesproduct/carre-h-watch-38-x-38mm--045777WW00-front-1-300-0-600-600_b.jpg'}, text: 'Hermes Carre H', price: 'GH 7000', key: '3', about:'Steel watch, black dial, opaline central guilloche and dial periphery, grained chapter ring, 38 x 38 mm, Hermes Manufacture movement H1912'},
    {img: {uri: 'https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/h/e/hermes-hour-h-quartz-black-dial-ladies-watch-044937ww00_1.jpg?width=350&height=350'}, text: 'Hermes Classic', price: 'GH 7000', key: '3', about:'2000 pre-owned Cape Cod 29mm, the style of this 2000 pre-owned Cape Cod 29mm gained inspiration from the iconic anchor chain link that was used throughout the brands jewellery collection'},
    {img: {uri: 'https://www.watchonista.com/sites/default/files/watchographer/1/watches/491364/pictures/hermes_h08_titanium_and_dlc_orange_strap_cjoelvonallmen_0.jpg'}, text: 'Hermes HO8', price:'GH 8000', key: '3', about:'Satin-brushed titanium watch and sunburst satin-brushed titanium bezel with mirror-polished chamfers, black-gold treated circular satin-brushed minutes disk, 39 x 39 mm, Hermes Manufacture movement H1837, strap in brown fabric'},
];

         return(
            <View style={{flex:1 , backgroundColor: "white", paddingTop: 30, paddingHorizontal: 10, }}>
              
                  
                  <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>

                  <TouchableOpacity>
                  <AntDesign name="setting" size={24} color="black" />
                  </TouchableOpacity>
                  
                   
                  <TextInput style={{borderWidth:1,width:200,borderRadius:9,alignSelf:"auto", height: 30}} placeholder="search" />
                
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