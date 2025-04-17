import { StyleSheet, Text, ScrollView, View, Image} from 'react-native'
import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const Sunday = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.heading}>Sunday</Text>
        
        <View>
            <Image 
                source={require('../assets/AppImages/sunday.png')}
                style={styles.image}
            />
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Come and join us at </Text>
            <Text style={styles.market}>Brewtown Farmers Market</Text>
            <Text style={styles.infoText}> in Lower Hutt on Saturdays</Text>
            <Text style={styles.infoText}> from 8am - 2pm.</Text>
        </View>
        <View style={styles.mapSection}>
            <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: -41.12914698990437, 
                    longitude: 175.06709355429638,
                    latitudeDelta: 0.0004,
                    longitudeDelta: 0.0004,
                }}
            >
            <Marker 
                coordinate={{
                    latitude: -41.12914698990437, 
                    longitude: 175.06709355429638,
                }}
                title="Brewtown Farmers Market" 
                description="Join us at our market every Sunday"
            />
            </MapView>
        </View>
    </ScrollView>
  )
}

export default Sunday

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        padding: 20,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        paddingBottom: 20,
    },
    sunday: {
        padding: 20,
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
        textAlign: 'center',
        color: '#FBAD43',
        fontWeight: 'bold',
    },
    mapSection:{
        alignItems: 'center',
    },
    map: {
        width:'100%',
        height: 200,
    }
})
