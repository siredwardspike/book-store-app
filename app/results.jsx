import { View, Text, useWindowDimensions, StyleSheet, FlatList, TextInput, Pressable } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Item from '../components/bookItem';
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-elements/dist/icons/Icon';
import { router, Link } from 'expo-router';


let books = [{ id: 0, name: "book1", author: "Segara", category: "science",price:120,favorite:false }
    , { id: 1, name: "book2", author: "Segara", category: "Fantasy",price:15,favorite:false  },
{ id: 2, name: "book3", author: "Segara", category: "coding" ,price:25,favorite:false }
]
export default function results() {

  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  const { height, width, fontScale } = useWindowDimensions();
  
  const [searchData, setsearchData] = useState(books);
  const [search, setSearch] = useState("");

  const searchElement = (searchText) => {
    setSearch(searchText); 

    if (searchText === "") {
      setsearchData(books); 
    } else {

      const filteredData = books.filter(element => element.name.toLowerCase().includes(searchText));
      setsearchData(filteredData);
    }

  }
  



  return (
    <SafeAreaProvider>
      <View style={{ padding: 5, backgroundColor: 'white', gap: 5 }}>

        <View>
          <Text style={{ fontSize: height * 0.04, color: '#2C4E70', fontWeight: 'bold' }}>Book Store</Text>
        </View>

        <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'space-around' }}>
          <Link href='/' asChild>
            <Pressable style={{ borderWidth: 2, padding: 5, borderRadius: 10, backgroundColor: 'white', borderColor: '#B3C8CF' }} >
              <Icon name='arrow-back' type="material" color="#2C4E70" />
            </Pressable>
          </Link>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderRadius: 50, backgroundColor: 'white', borderWidth: 2, width: width * 0.8, borderColor: '#B3C8CF',padding:5}}>
            <TextInput placeholder='Search for a book!' onChangeText={(t) => searchElement(t.toLowerCase())}
              style={{ textAlign:'center' ,fontSize: height * 0.02 , maxWidth:width * 0.6}}></TextInput>
              <Icon name='search' type="material" color="#B3C8CF"/>
          </View>
         
        </View>
      </View>


      <FlatList
        contentContainerStyle={styles.container}
        data={search === "" ? books : searchData}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
      />
      

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
