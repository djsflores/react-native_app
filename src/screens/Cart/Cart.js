import React from 'react'
import { View, Text } from 'react-native'
import { Button, Card } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { CardPaper } from '../../components/CardPaper';

const Cart = ( { navigation } ) => {
  const { products } = useSelector((state) => state);
  console.log('productos en el carrito: ', products)
  const route = useRoute();
  // const {title, brand, thumbnail, price} = route.params;
  const producto = route.params;
  return (
    <View>
      <Text>Carrito (producto recibido por parametros)</Text>
      {
        !producto?.title || !producto?.brand || !producto?.price
        ? <Text>No hay productos cargados en el carito</Text>
        : <Text>{producto.title}</Text>
      }
      <Text>Carrito (productos en el storage)</Text>
      {
        products.map(product =>  <Text>{product.title}</Text>)
      }
      <Button onPress={ () => navigation.goBack() }>Volver al home</Button>
    </View>
  )
}

export default Cart
