import React,{useState} from 'react';
import { StyleSheet,View, Text, FlatList, SafeAreaView, TextInput, ScrollView, Switch, } from 'react-native';
import Card from './components/Card/Card';
import styless from './App.style';
import productData from './product-data.json';

function App() {
  const renderProducts = ({ item }) => <Card productts={item} />
  const [stokta,setstokta]=useState(false);
    
  function stoktakiler(onlyStokta){
    setstokta(onlyStokta);
    console.log(onlyStokta);      
  }

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styless.Header}>
        <Text style={styless.HeaderTextOne}>Patika</Text>
        <Text style={styless.HeaderTextTwo}>Store</Text>
      </View>
      <View style={styless.SearchContainer}>
        <TextInput style={styless.input} placeholder='Search...' />
      </View>
      <Switch value={stokta} onValueChange={stoktakiler}/>
      <ScrollView>
        <FlatList
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          data={productData}
          renderItem={renderProducts}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({

  Container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },

});

export default App;
