import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CartProvider } from './CartContext';
import { useContext } from 'react';
import { CartContext } from './CartContext';


import Home from './Screens/Home';
import Drinks from './Screens/Drinks';
import Cart from './Screens/Cart';
import ViewDrink from './Screens/ViewDrink';
import Saturday from './Screens/Saturday';
import Sunday from './Screens/Sunday';
import Login from './Screens/Login';
import CreateAccount from './Screens/CreateAccount';
import AdminPage from './Screens/AdminPage';
import AddProduct from './Screens/AddProduct';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {

  const { getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();


  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#37B276', 
        tabBarInactiveTintColor: 'gray',  
        tabBarStyle: {
          height: 60,
          backgroundColor: '#FEEAD0', 
          borderColor: 'white',
          borderWidth: 5,
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15,
          padding: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home Page',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} /> 
          ),
        }}
      />
      <Tab.Screen
        name="Drinks"
        component={Drinks}
        options={{
          title: 'Drinks',
          headerStyle: {
            backgroundColor: 'white',
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="emoji-food-beverage" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <View>
              <Ionicons name="cart" size={size} color={color} />
              {totalItems > 0 && (
                <View style={{
                  position: 'absolute',
                  right: -6,
                  top: -3,
                  backgroundColor: 'red',
                  borderRadius: 8,
                  width: 16,
                  height: 16,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Text style={{ color: 'white', fontSize: 10 }}>{totalItems}</Text>
                </View>
              )}
            </View>
          ),
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          }
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{ title: 'Login Page', headerShown: false }} 
          />
          <Stack.Screen 
            name="CreateAccount" 
            component={CreateAccount} 
            options={{ title: 'Create Account Page', headerShown: false }} 
          />
          <Stack.Screen 
            name="AdminPage" 
            component={AdminPage} 
            options={{title: 'Welcome, Admin!',headerShown: false,}} 
          /> 
          <Stack.Screen 
            name="AddProduct"
            component={AddProduct}
            options={{
              title: '',
              headerShown: true,
              headerStyle: {
                backgroundColor: 'white',
                elevation: 0,
                shadowOpacity: 0,
              },
              headerLeft: () => {
                const navigation = useNavigation(); 
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('AdminPage')} 
                    style={{
                      backgroundColor: '#37B276', 
                      borderRadius: 15, 
                      width: 50,
                      height: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 20, 
                    }}
                  >
                    <Ionicons name="arrow-back" size={30} color="white" /> 
                  </TouchableOpacity>
                );
              },
            }}
          />
          <Stack.Screen 
            name="HomeTabs" 
            component={HomeTabs} 
            options={{ title: '', headerShown: false }} 
          />
          <Stack.Screen 
            name="ViewDrink" 
            component={ViewDrink} 
            options={{title: '', headerShown: false,}}
          />
          <Stack.Screen 
            name="Saturday" 
            component={Saturday} 
            options={{
              title: '',
              headerShown: true,
              headerStyle: {
                backgroundColor: 'transparent',
                elevation: 0, 
                shadowOpacity: 0, 
              },
              headerLeft: () => {
                const navigation = useNavigation(); 
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('HomeTabs')} 
                    style={{
                      backgroundColor: '#37B276', 
                      borderRadius: 15, 
                      width: 50,
                      height: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 20, 
                    }}
                  >
                    <Ionicons name="arrow-back" size={30} color="white" />
                  </TouchableOpacity>
                );
              },
            }}
          />
          <Stack.Screen 
            name="Sunday" 
            component={Sunday} 
            options={{
              title: '',
              headerShown: true,
              headerStyle: {
                backgroundColor: 'transparent',
                elevation: 0, 
                shadowOpacity: 0, 
              },
              headerLeft: () => {
                const navigation = useNavigation(); 

                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('HomeTabs')} 
                    style={{
                      backgroundColor: '#37B276', 
                      borderRadius: 15, 
                      width: 50,
                      height: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 20, 
                    }}
                  >
                    <Ionicons name="arrow-back" size={30} color="white" />
                  </TouchableOpacity>
                );
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

export default App;
