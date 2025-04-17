import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';


const Home = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
            <Image 
                source={require('../assets/AppImages/homeImage.png')}
                style={styles.homeImage}
            />
        </View>

        <View style={styles.logoContainer}>
            <Image 
                source={require('../assets/AppImages/logo.png')}
                style={styles.logo}
            />
        </View>

        <View style={styles.textContainer}>
        <Text style={styles.text}>Chayen Thai Tea is a traditional Thai Milk Tea with a twist. We have a variety of drinks, Smoothies, and Teas. </Text>
        </View>

        <View style={styles.cardContainer}>
        <Image
            style={styles.image}
            source={require('../assets/AppImages/saturday.png')}
        />
        <View style={styles.cardTextContainer}>
            <Text style={styles.heading}>Saturday</Text>
            <Text style={styles.description}>Join us at the market every Saturday</Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Saturday')}
            >
                <Text style={styles.buttonText}>Find Out More</Text>
            </TouchableOpacity>
        </View>
        </View>

        <View style={styles.cardContainer}>
        
        <View style={styles.cardTextContainer}>
            <Text style={styles.heading}>Sunday</Text>
            <Text style={styles.description}>Join us at the market every Sunday</Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Sunday')}
            >
                <Text style={styles.buttonText} >Find Out More</Text>
            </TouchableOpacity>
        </View>
        <Image
            style={styles.image}
            source={require('../assets/AppImages/sunday.png')}
        />
        </View>

    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',  
        alignItems: 'center',
        backgroundColor: 'white',
    },
    imageContainer: {
        width: '100%',
        height: 430,
        overflow: 'hidden',
        paddingBottom: 20,
    },
    homeImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    logoContainer: {
       textAlign: 'center',
       marginBottom: 40,
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
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
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        elevation: 5,
        marginBottom: 10,
        width: '85%',
        marginBottom: 20,
    },
    cardTextContainer: {
        flex: 1,
        justifyContent: 'center',
        marginRight: 10,
        padding: 15,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#FBAD43',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: 170,
        height: 170,
        borderRadius: 15,
    },
});