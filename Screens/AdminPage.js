import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomButton from '../Components/CustomButton';

// Define the AdminPage functional component
const AdminPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.imageContainer}>
          <Image 
              source={require('../assets/AppImages/homeImage.png')}
              style={styles.homeImage}
          />
      </View>

      <Text style={styles.title}>Welcome, Admin!</Text>

      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome to the admin page. where you weill be able to manage your products. </Text>
      </View>
      
      <CustomButton 
        onPress={() => navigation.navigate('AddProduct')}
        title="Add Product"
      />

    </View>
  );
};

export default AdminPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#37B276',
    padding: 15,
  },
  imageContainer: {
    width: '100%',
    height:430,
    overflow: 'hidden',
    paddingBottom: 20,
  },
  homeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    marginBottom: 30,
    paddingHorizontal: 80,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700',
  },
});

  