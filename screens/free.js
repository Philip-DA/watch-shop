<View style={{flex:1 , backgroundColor: "white", justifyContent: "center", alignItems: "center"}}>
    
        <Image 
          style={{
              width: 200,
              height: 200,
              borderRadius: 10,
              marginBottom: 30
          }}
        source={{uri: "https://cdn.shopify.com/s/files/1/0333/0936/0264/files/Dive-mobile-box.jpg?v=1599162093"}} />
        <Text style={{color: "black", fontSize: 24, fontWeight: '600'}}> Apple Watch</Text>
        <Text style={{color: "rgba(0,0,0,0.7)", fontSize: 18, fontWeight: '400', fontStyle: 'italic'}}>Hermes</Text>
        <TouchableOpacity 
        onPress={() => {
            navigation.navigate("Home")
        }}
        style={{backgroundColor: "#e3e3e3", 
        padding: 10,
         paddingHorizontal: 60,
         borderRadius: 10, 
         marginTop: 10,
          flexDirection: "row",
           alignItems: "center" }}>

        <MaterialCommunityIcons name="gmail" size={24} color="black" />
            <Text style={{ fontSize: 20, fontWeight:'400', marginLeft: 10}}>Login with Gmail</Text>

        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => {
            navigation.navigate("Home")
        }}
        style={{backgroundColor: "black",
         padding: 10, 
         paddingHorizontal: 60,
          borderRadius: 10, 
          marginTop: 10,
           flexDirection: "row",
            alignItems:"center" }}>

        <AntDesign name="apple1" size={24} color="white" />
            <Text style={{ fontSize: 20, fontWeight:'400', color: 'white', marginLeft: 10}}>Login with Apple</Text>

        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{marginTop: 10, color: "grey", fontWeight: '600'}}>Shop Wrist-Watch <Text style={{color: 'red', fontWeight: '800'}}> Now</Text>
        </Text>
        </TouchableOpacity>
    </View> 