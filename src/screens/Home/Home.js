import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Image, TouchableHighlight, Button } from 'react-native';
import { CardPaper } from '../../components/CardPaper';
import { Title } from '../../components/Title';
import { useSelector } from 'react-redux';

const Home = ( { navigation } ) => {
  // const { product } = useSelector( (state) => state.product);
  // console.log(product);
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
  
  useEffect(() => {
    getProducts()
  }, [])
  console.log(products)

  return (
    <ScrollView style={ color ? styles.container : styles.containerBlue }>
      <Text style={{color: 'red'}} onPress={onChangeColor} >Cambiar color</Text>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => onChangeColor()} 
      >
        <Text>Touch here</Text>
      </TouchableHighlight>
      <Title titulo='e-commerce' />
      {
        products.map(product => (
          <CardPaper {...product} key={product.id} />
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
