import React from 'react';
import { Button, Card, Text, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../app/productSlice';

const CardPaper = ({ title, thumbnail, price, brand }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  const onGoingTo = () => {
    dispatch(addProduct( { title, thumbnail, price, brand } ))
    // navigation.navigate('Cart', {
    //   title,
    //   brand,
    //   thumbnail,
    //   price
    // });
  }



  return (
    <Card style={styles.cardPaper}>
      <Card.Title title={title} subtitle={brand} />
      <Card.Cover source={{ uri: thumbnail }} />
      <Card.Content>
        <Paragraph style={styles.price}>$ {price}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={onGoingTo}
        >Agregar al carrito</Button>
        <Button onPress={() => navigation.navigate('Product detail')} >Comprar</Button>
      </Card.Actions>
    </Card>
  )
}

const styles = StyleSheet.create({
  cardPaper: {
    marginBottom: 25,
  },
  price: {
    marginTop: 15,
  }
});

export default CardPaper;
