import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Image, TouchableHighlight, Button } from 'react-native';
import { Card } from '../../components/Card';
import { Title } from '../../components/Title';


const Home = ( { navigation } ) => {
  const [color, setColor] = useState(false);
  const onChangeColor = () => {
    setColor(!color);
  }
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const { products } = await response.json();
    setProducts(products)
  }
  const handleNavigate = () => {
    navigation.navigate('Product detail');
  }
  useEffect(() => {
    getProducts()
  }, [])
  console.log(products)

  return (
    <ScrollView style={ color ? styles.container : styles.containerBlue }>
      <Text style={{color: 'red'}} onPress={onChangeColor} >React advanced</Text>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => onChangeColor()} 
      >
        <Text>Touch here</Text>
      </TouchableHighlight>
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={styles.imageCat}
        />
      <Button
        onPress={handleNavigate}
        title="Learn More"
        color="#841584"
      />
      <Title titulo='React avanzado' />
      {
        products.map(product => (
          <Card {...product} key={product.id} />
        ))
      }
      <StatusBar style="auto" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
  },
  containerBlue: {
    flex: 1,
    backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
  },
  imageCat: {width: 300, height: 300},
});

export default Home
