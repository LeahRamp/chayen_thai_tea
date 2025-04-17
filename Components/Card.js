import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const CustomCard = ({ image, name, price, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardPrice}>${price}</Text>
    </Pressable>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '48%', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 15,
  },
  cardImage: {
    width: '100%',
    height: 170,
    borderRadius: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    paddingLeft: 10,
  },
  cardPrice: {
    fontSize: 14,
    color: '#444',
    marginTop: 4,
    paddingLeft: 10,
    paddingBottom: 10,
  },
});
