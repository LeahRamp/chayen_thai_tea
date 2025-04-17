import { StyleSheet, Text, View, TextInput, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../Components/CustomButton';
import { db } from '../firebaseconfig';
import { addDoc, collection } from 'firebase/firestore';

// Main functional component for adding a product
const AddProduct = () => {
  // State variables to hold user input
  const [imageLink, setImageLink] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [allergens, setAllergens] = useState('');
  const [price, setPrice] = useState('');  
  const [size, setSize] = useState('');    
  const [imageError, setImageError] = useState(false);// Flag for image loading error

  // Check if the image URL is valid (starts with http/https)
  const isValidImage = imageLink && (imageLink.startsWith('http://') || imageLink.startsWith('https://'));

  // Function to add the product to the Firestore database
  const addProduct = async () => {
    await addDoc(collection(db, 'Products'), {
      image: imageLink,
      name: name,
      description: description,
      allergens: allergens,
      price: price,   // Store price in the database
      size: size,     // Store size in the database
    });

    // Clear input fields after submission
    setImageLink('');
    setName('');
    setDescription('');
    setAllergens('');
    setPrice('');
    setSize('');
    setImageError(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} style={{ backgroundColor: 'white' }}>
      <Text style={styles.heading}>Add New Drink</Text>

      <Text style={styles.label}>Image Link</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter image URL"
        value={imageLink}
        onChangeText={(text) => {
          setImageLink(text);
          setImageError(false); // Reset error if user updates input
        }}
      />

      {isValidImage && !imageError && (
        <Image
          source={{ uri: imageLink }}
          style={styles.imagePreview}
          resizeMode="cover"
          onError={() => setImageError(true)}
        />
      )}

      {imageError && (
        <Text style={styles.errorText}>⚠️ Could not load image. Please check the URL.</Text>
      )}

      <Text style={styles.label}>Drink Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter drink name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>Possible Allergens</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter possible allergens"
        value={allergens}
        onChangeText={setAllergens}
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter drink price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"  // Makes sure only numeric input is allowed
      />

      <Text style={styles.label}>Size</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter drink size"
        value={size}
        onChangeText={setSize}
      />

      <CustomButton
        onPress={addProduct}
        title="Add New Product"
      />

      <Image 
        source={{ uri: 'https://example.com/image.jpg' }}
        style={{ width: 200, height: 200 }}
      />
    </ScrollView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 7,
    padding: 10,
    marginTop: 5,
  },
  multiline: {
    height: 100,
    textAlignVertical: 'top',
  },
  imagePreview: {
    width: '100%',
    height: 300,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontSize: 14,
  },
});
