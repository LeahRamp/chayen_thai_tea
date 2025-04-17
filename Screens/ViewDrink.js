import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

// Main component for viewing a drink's details
const ViewDrink = ({ route, navigation }) => {
  // Pulling drink info from the route's parameters
  const { drink } = route.params;

  // Accessing the addToCart function from CartContext
  const {addToCart} = useContext(CartContext);

  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <Image source={{ uri: drink.image }} style={styles.image} />

        <View style={styles.content}>
          <View style={styles.namePriceContainer}>
            <Text style={styles.name}>{drink.name}</Text>
            <Text style={styles.price}>${drink.price}</Text>
          </View>
          <Text style={styles.description}>{drink.description}</Text>


          <View style={styles.allergensContainer}>
            <Text style={styles.heading}>Possible Allergens</Text>
            <Text style={styles.allergens}>{drink.allergens}</Text>
          </View>

          <View style={styles.sizeContainer}>
            <Text style={styles.heading}>Drink Size</Text>
            <Text style={styles.size}>{drink.size}</Text>
          </View>
        </View>
      </ScrollView>

      
      <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(drink)}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewDrink;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  scrollContent: {
    paddingBottom: 50, 
  },
  image: {
    width: '100%',
    height: 400,
  },
  content: {
    padding: 30,
    backgroundColor: 'white',
  },
  namePriceContainer: {
    marginVertical: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FBAD43',
  },
  price: {
    fontSize: 18,
    fontWeight: '900',
    color: '#37B276',
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
  },
  allergensContainer: {
    marginBottom: 30,
  },
  allergens: {
    fontSize: 14,
    color: 'gray',
  },
  sizeContainer: {
    marginBottom: 60,
  },
  size: {
    fontSize: 14,
    color: 'gray',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#37B276',
    borderRadius: 15,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#37B276',
    padding: 15,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    zIndex: 1,
  },
  addToCartText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
