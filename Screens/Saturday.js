import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const Saturday = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.saturday}>Saturday</Text>

        <View>
            <Image 
                source={require('../assets/AppImages/saturday.png')}
                style={styles.image}
            />
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Come and join us at </Text>
            <Text style={styles.market}>Riverbank Market</Text>
            <Text style={styles.infoText}> in Lower Hutt on Saturdays</Text>
            <Text style={styles.infoText}> from 8am - 2pm.</Text>
        </View>
        <View style={styles.mapSection}>
            <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: -41.20747906108137, 
                    longitude: 174.90333308066147,
                    latitudeDelta: 0.0004,
                    longitudeDelta: 0.0004,
                }}
            >
            <Marker 
                coordinate={{
                    latitude: -41.20747906108137, 
                    longitude: 174.90333308066147,
                }}
                title="Riverbank Market" 
                description="Join us at our market every Saturday"
            />
            </MapView>
        </View>
    </ScrollView>
  )
}

export default Saturday

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        padding: 20,
    },
    saturday: {
        fontWeight: 'bold',
        fontSize: 25,
        paddingBottom: 20,
    },
    image: {
        width: '100%',
    },
    infoContainer: {
        padding: 30,
    },
    infoText: {
        fontSize: 20,
        lineHeight: 30,
        textAlign: 'center',
    },
    market: {
        fontSize: 20,
        lineHeight: 30,
        textAlign: 'center',
        color: '#FBAD43',
        fontWeight: 'bold',
    },
    mapSection: {
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: 200,
    }

})