import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useContext } from 'react';

// Import CartContext to access cart state and functions
import { CartContext } from '../CartContext';

const Cart = () => {
  // Extract cart data and functions from CartContext
  const { cartItems, increaseQuantity, decreaseQuantity } = useContext(CartContext);

   // Calculate the total amount for all items in the cart
  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Calculate the total quantity of all items
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Render each item in the cart
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>

      <Image source={{ uri: item.image }} style={styles.itemImage} />

      <View style={styles.itemDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.size}>{item.size}</Text>  
        <Text style={styles.price}>{`$${item.price}`}</Text>
      </View>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.button}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.button}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Handle checkout button press
  const handleCheckout = () => {
    console.log('Proceeding to checkout...');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalItems}>{getTotalItems()} Items</Text>
          <Text style={styles.totalText}>Total: ${getTotalAmount()}</Text>
        </View>
        
        <View style={styles.divider} />
        <TouchableOpacity onPress={handleCheckout} style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  itemContainer: {
    flexDirection: 'row',  
    alignItems: 'center', 
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10,
    borderBottomWidth: 1,   
    borderBottomColor: '#E0E0E0',  
  },
  itemImage: {
    width: 100,            
    height: 100,                
    marginRight: 15,       
  },
  itemDetails: {
    flex: 1,              
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  size: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  price: {
    color: '#37B276',
    fontSize: 16,
    fontWeight: '600',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 5,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  footer: {
    marginTop: 20,
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 1,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,  
  },
  totalItems: {
    fontSize: 16,
    fontWeight: '600',
  },
  totalText: {
    fontSize: 18,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#FBAD43',
    marginVertical: 10,
  },
  checkoutButton: {
    backgroundColor: '#37B276',
    margin: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignSelf: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
