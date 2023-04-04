import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';

const ProductDetail = ( { navigation } ) => {

  return (
    <View>
      <Text>Detalle</Text>
      <Button onPress={ () => navigation.goBack() } >Volver al home</Button>
    </View>
  )
}

export default ProductDetail
