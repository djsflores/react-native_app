import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Card = ({ title, thumbnail, price, brand }) => {
  return (
    <View style={styles.card}>
      <View style={styles.containerTitle}>
        <Text style={styles.titleCard}>{title}</Text>
        <Text style={styles.subTitleCard}>{brand}</Text>
      </View>
      <Image
        source={{
          uri: thumbnail,
        }}
        style={styles.imageCard}
      />
      <Text style={styles.priceCard}>Precio: ${price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width:'100%',
    height: 350,
    border: '1px solid black', 
    marginBottom: 20,
  },
  titleCard: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  subTitleCard: {
    fontSize: 15,
    marginVertical: 15 ,
  },
  imageCard: {
    height: '75%',
  },
  priceCard: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '900',
    marginTop: 15
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  }
});

export default Card
