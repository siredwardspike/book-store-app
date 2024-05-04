import { View, Text,useWindowDimensions,StyleSheet, FlatList,TextInput , Pressable  } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Item from '../../components/bookItem';
import React, { useState } from 'react'
import Icon from 'react-native-elements/dist/icons/Icon';
import { router,Link } from 'expo-router';



export default function results() {
  const renderItem = ({ item }) => (
    <Item item={item} />
);
const {height, width,fontScale} = useWindowDimensions();
let book1 = { id: 1, name: "Magic Book 1", author: "Segara", category: "Fantasy" };
let book2 = { id: 2, name: "cow", author: "Segara", category: "Fantasy" };
let book3 = { id: 3, name: "cat", author: "Segara", category: "Fantasy" };
const [searchQuery,setSearchQuery] = useState('');
const [data,setData]=useState([book1,book2,book3]);
const [displayData,setDisplayData]=useState(data);
 const handleSearch= ()=>{
  if(searchQuery===""){
    setDisplayData(data);
  }else{
    const filteredData = data.filter(item=>item.name.includes(searchQuery))
    setDisplayData(data.filter(item=>item.name.includes(searchQuery)));
  }

}


  
  return (
    <SafeAreaProvider>
      <View style={{padding:5, backgroundColor:'white',gap:5}}>
            <View>
                <Text style={{fontSize:height*0.04,color:'#2C4E70',fontWeight:'bold'}}>Book Store</Text>
            </View>

            <View style={{flexDirection:'row',gap:10,justifyContent:'space-around'}}>
                <TextInput placeholder='Search for a book !' onChangeText={text => setSearchQuery(text)}
                style={{borderRadius:50, backgroundColor:'white', borderWidth:2, width:width*0.8,textAlign:'center',borderColor:'#B3C8CF',fontSize:height*0.02}}></TextInput>
                <Pressable style={{borderWidth:2,padding:5,borderRadius:10,backgroundColor:'white',borderColor:'#B3C8CF'}} onPress={handleSearch} >
                <Icon name='search' type="material" color="#2C4E70" />
                </Pressable>
            </View>
    </View>


    <FlatList
        contentContainerStyle={styles.container}
        data={[{ key: 'Results', data:displayData  } ]}
        renderItem={({ item }) => {
         
            return (
              <View style={styles.section}>
              <Text style={styles.heading}>{item.key}</Text>
              <FlatList
                  data={item.data}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id.toString()}
              />
             
              </View>

            )
            
        }}
        keyExtractor={(item) => item.key}
    />
                <Text>{searchQuery}</Text>

</SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
      paddingVertical: 20,
      paddingHorizontal: 10,
  },
  section: {
      marginBottom: 20,
  },
  heading: {
      fontWeight: "bold",
      fontSize: 20,
      color: "#2C4E70",
      marginBottom: 10,
  }
});
