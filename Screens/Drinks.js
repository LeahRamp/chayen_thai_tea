import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseconfig';
import CustomCard from '../Components/Card';
import { useNavigation } from '@react-navigation/native';

const Drinks = () => {
  // Declare state variables for storing drinks data and loading state
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  // Function to fetch drinks data from Firebase
  const fetchDrinks = async () => {
    try {
      // Get documents from the 'Products' collection in Firestore
      const querySnapshot = await getDocs(collection(db, 'Products'));
      const drinkList = [];

      // Loop through the documents and push each drink with its data to the drinkList
      querySnapshot.forEach((doc) => {
        drinkList.push({ id: doc.id, ...doc.data() });
      });

      // Update the state with the fetched drinks
      setDrinks(drinkList);
    } catch (error) {
      // Log any errors that occur during the fetch
      console.error('Error fetching drinks:', error);
    } finally {
      // Set loading state to false after fetching data (or if an error occurs)
      setLoading(false);
    }
  };

  // useEffect hook to fetch drinks data when the component is mounted
  useEffect(() => {
    fetchDrinks();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        drinks.map((drink) => (
          <CustomCard
            key={drink.id}
            image={drink.image}
            name={drink.name}
            price={drink.price}
            onPress={() =>
              navigation.navigate('ViewDrink', {
                drink: drink,
              })
            }
          />
        ))
      )}
    </ScrollView>
  );
};

export default Drinks;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'white',
  },
});
