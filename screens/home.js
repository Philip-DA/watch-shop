import React from "react";
import { View, Text, TouchableOpacity, ImageBackground,FlatList, StyleSheet, ScrollView,Image} from "react-native";
import { Entypo, AntDesign, SimpleLineIcons, Feather } from '@expo/vector-icons';

export default function Home({navigation}){
    const categories =[
        {text: 'Trending', key: '1'},
        {text: 'Popular', key: '2'},
        {text: 'We recommend', key: '3'},
    ];
         return(
            <View style={{flex:1 , backgroundColor: "white", paddingTop: 40, paddingHorizontal: 10, }}>
                  
                  <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>

                  <TouchableOpacity>
                  <Entypo name="menu" size={24} color="black" />
                  </TouchableOpacity>

                  <TouchableOpacity>
                  <AntDesign name="search1" size={24} color="black" />
                  </TouchableOpacity>

                  <TouchableOpacity>
                  <SimpleLineIcons name="handbag" size={24} color="black" />
                  </TouchableOpacity>
    
                  </View>
                  <View style={{}}>
                  <Text style={{fontSize: 30, fontWeight:'600', marginTop: 30, marginLeft: 10}}> Discover our exclusive watches</Text>

                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
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
                  <View style={{paddingTop:30}}>
                      <Text style={{color: "black", fontSize: 24, fontWeight: '600', textAlign:'center'}}> Apple Watches</Text>
                  <Image 
      style={{
          width: 400,
          height: 400,
          marginBottom: 30,
       
      }}
    source={{uri: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/42-alu-space-sport-black-nc-gallery1_GEO_GB?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1594259769000"}} />
              
              <View style={{flexDirection:'row'}}>
               <Text style={{fontSize: 20, fontWeight: '500'}}>Series 3 <Text style={{color: "green"}}>In stock</Text></Text>
               <Text style={{paddingLeft: 120,fontWeight:'500',fontSize:20}}>GH 2000</Text>
</View>
               <TouchableOpacity 
   style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     borderRadius: 60,
     flexDirection: 'row',
     paddingHorizontal: 100 ,
     marginTop: 20,
    }}>
    <Text style={{fontSize: 17, color: "black",fontWeight: '900',marginLeft:1}}>ADD TO CART</Text>
   </TouchableOpacity>
               

               <Image 
      style={{
          width: 400,
          height: 400,
          marginBottom: 80,
       
      }}
    source={{uri: "https://www.luluhypermarket.com/medias/1496934-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4OTUwMHxpbWFnZS9qcGVnfGltYWdlcy9oMjQvaGJhLzkwNjkwMzM4NDg4NjIuanBnfDI4M2UyYmYzNWRlNmVjM2IyN2JkZjI3ZmMxYjRjNjRmMmY1NTUxMWJiZGI4YmU5NjU5N2NjODRiZjdmODI5MmE"}} />

<View style={{flexDirection: 'row'}}>
<Text style={{fontSize: 20, fontWeight: '500'}}>Series 4 <Text style={{color: "green"}}>In stock</Text></Text>
<Text style={{paddingLeft: 120, fontWeight: '500', fontSize: 20}}>GH 3000</Text>
</View>

<TouchableOpacity 
   style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     borderRadius: 60,
     flexDirection: 'row',
     paddingHorizontal: 100 ,
     marginTop: 20,
    }}>
    <Text style={{fontSize: 17, color: "black",fontWeight: '900',marginLeft:1}}>ADD TO CART</Text>
   </TouchableOpacity>


<Image 
      style={{
          width: 400,
          height: 400,
          marginBottom: 30,
       
      }}
    source={{uri: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FWVF2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1580325951999"}} />

<View style={{ flexDirection: 'row'}}>
<Text style={{fontSize: 20, fontWeight: '500'}}>Series 5 <Text style={{color: "green"}}>In stock</Text></Text>
<Text style={{ paddingLeft: 120, fontWeight: '500', fontSize: 20}}>GH5000</Text>
</View>

<TouchableOpacity 
   style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     borderRadius: 60,
     flexDirection: 'row',
     paddingHorizontal: 100 ,
     marginTop: 20,
    }}>
    <Text style={{fontSize: 17, color: "black",fontWeight: '900',marginLeft:1}}>ADD TO CART</Text>
   </TouchableOpacity>


<Image 
      style={{
          width: 400,
          height: 400,
          marginBottom: 30,
       
      }}
    source={{uri: "https://www.telefonika.com/wp-content/uploads/2020/11/S6-Series-Space-Gray-Alu-GPS.jpg"}} />

<View style={{ flexDirection: 'row'}}>
<Text style={{fontSize: 20, fontWeight: '500'}}>Series 6 <Text style={{color: "green"}}>In stock</Text></Text>
<Text style={{ paddingLeft: 120, fontWeight: '500', fontSize: 20}}>GH 8000</Text>
</View>

<TouchableOpacity 
   style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     borderRadius: 60,
     flexDirection: 'row',
     paddingHorizontal: 100 ,
     marginTop: 20,
    }}>
    <Text style={{fontSize: 17, color: "black",fontWeight: '900',marginLeft:1}}>ADD TO CART</Text>
   </TouchableOpacity>


<Text style={{color: "black", fontSize: 24, fontWeight: '600', textAlign:'center'}}> Hermes Watches</Text>


<Image 
      style={{
          width: 400,
          height: 400,
          marginBottom: 30,
       
      }}
    source={{uri: "https://dice.bg/content/pics/45710_apple-watch-herms-series-5-40mm-noir-space-black-stainless-steel-case-with-double-tour-gps--cellular-umen-chasovnik-ot-apple_3276749172.jpg"}} />

<View style={{ flexDirection: 'row'}}>
<Text style={{fontSize: 20, fontWeight: '500'}}>Apple Hermes <Text style={{color: "green"}}>In stock</Text></Text>
<Text style={{ paddingLeft: 60, fontWeight: '500', fontSize: 20}}>GH 10000</Text>
</View>

<TouchableOpacity 
   style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     borderRadius: 60,
     flexDirection: 'row',
     paddingHorizontal: 100 ,
     marginTop: 20,
    }}>
    <Text style={{fontSize: 17, color: "black",fontWeight: '900',marginLeft:1}}>ADD TO CART</Text>
   </TouchableOpacity>


<Image 
      style={{
          width: 400,
          height: 400,
          marginBottom: 30,
       
      }}
    source={{uri: "https://cdn.theluxurycloset.com/uploads/opt/products/full/luxury-men-hermes-used-watches-p156654-0001.jpg"}} />

<View style={{ flexDirection: 'row'}}>
<Text style={{fontSize: 20, fontWeight: '500'}}>Hermes Digital <Text style={{color: "green"}}>In stock</Text></Text>
<Text style={{ paddingLeft: 60, fontWeight: '500', fontSize: 20}}>GH 6000</Text>
</View>

<TouchableOpacity 
   style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     borderRadius: 60,
     flexDirection: 'row',
     paddingHorizontal: 100 ,
     marginTop: 20,
    }}>
    <Text style={{fontSize: 17, color: "black",fontWeight: '900',marginLeft:1}}>ADD TO CART</Text>
   </TouchableOpacity>


<Image 
      style={{
          width: 400,
          height: 400,
          marginBottom: 30,
       
      }}
    source={{uri: "https://assets.hermes.com/is/image/hermesproduct/carre-h-watch-38-x-38mm--045777WW00-front-1-300-0-600-600_b.jpg"}} />

<View style={{ flexDirection: 'row'}}>
<Text style={{fontSize: 20, fontWeight: '500'}}>Hermes Carre H <Text style={{color: "green"}}>In stock</Text></Text>
<Text style={{ paddingLeft: 50, fontWeight: '500', fontSize: 20}}>GH 7000</Text>
</View>

<TouchableOpacity 
   style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     borderRadius: 60,
     flexDirection: 'row',
     paddingHorizontal: 100 ,
     marginTop: 20,
    }}>
    <Text style={{fontSize: 17, color: "black",fontWeight: '900',marginLeft:1}}>ADD TO CART</Text>
   </TouchableOpacity>


<Image 
      style={{
          width: 400,
          height: 400,
          marginBottom: 30,
       
      }}
    source={{uri: "https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/h/e/hermes-hour-h-quartz-black-dial-ladies-watch-044937ww00_1.jpg?width=350&height=350"}} />

<View style={{ flexDirection: 'row'}}>
<Text style={{fontSize: 20, fontWeight: '500'}}>Hermes Classic <Text style={{color: "green"}}>In stock</Text></Text>
<Text style={{ paddingLeft: 50, fontWeight: '500', fontSize: 20}}>GH 6000</Text>
</View>

<TouchableOpacity 
   style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     borderRadius: 60,
     flexDirection: 'row',
     paddingHorizontal: 100 ,
     marginTop: 20,
    }}>
    <Text style={{fontSize: 17, color: "black",fontWeight: '900',marginLeft:1}}>ADD TO CART</Text>
   </TouchableOpacity>

<Image 
      style={{
          width: 400,
          height: 400,
          marginBottom: 30,
       
      }}
    source={{uri: "https://www.watchonista.com/sites/default/files/watchographer/1/watches/491364/pictures/hermes_h08_titanium_and_dlc_orange_strap_cjoelvonallmen_0.jpg"}} />

<View style={{ flexDirection: 'row'}}>
<Text style={{fontSize: 20, fontWeight: '500'}}>Hermes HO8 <Text style={{color: "green"}}>In stock</Text></Text>
<Text style={{ paddingLeft: 80, fontWeight: '500', fontSize: 20}}>GH 8000</Text>
</View>

<TouchableOpacity 
   style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     borderRadius: 60,
     flexDirection: 'row',
     paddingHorizontal: 100 ,
     marginTop: 20,
    }}>
    <Text style={{fontSize: 17, color: "black",fontWeight: '900',marginLeft:1}}>ADD TO CART</Text>
   </TouchableOpacity>




                  </View>
                  
 </ScrollView>
 </View>
    );
}