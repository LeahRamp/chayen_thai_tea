import { ScrollView, Image, StyleSheet, Text, View, Alert } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';

// Importing Firebase configuration
import "../firebaseconfig";
// Firebase authentication functions
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Main functional component for creating an account
const CreateAccount = ({navigation}) => {
  // State variables to store email and password input from user
  const [email, setUserName] = useState("");
  const [password, setPassword] = useState("");

   // Function to handle account creation logic
  const handleLogin = () => {
    // Check if both fields are filled
    if (!email || !password) {
      Alert.alert("Missing Fields", "Please enter both email and password.");
      return;
    }

    // Get Firebase Auth instance
    const auth = getAuth();

    // Attempt to create a new user with the provided email and password
    createUserWithEmailAndPassword(auth, email, password)
    .then ((userCredential) =>{
      // User creation successful
      const createUser = userCredential.user;
      console.log("Create User Successful:", createUser.email);

      // Navigate to the home screen after successful account creation
      navigation.navigate('HomeTabs');
    }) 
    .catch((error)  => {
      // Handle and display any errors during account creation
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Login Error:", errorCode, errorMessage);
      Alert.alert("Login Failed:", errorMessage);
    });
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/AppImages/logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.formContainer}>
        <CustomInput 
          label="Email"
          value={email}
          onChangeText={setUserName}
          placeholder="Enter your email..."
        />
        <CustomInput 
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your Password..."
        />

      </View>

      <View style={styles.buttonContainer}>
        <CustomButton 
            title="Create Account"
            onPress={handleLogin}
          />
      </View>



    </ScrollView>    
  )
}

export default CreateAccount

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3E2DD',
        padding: 16,
      },
      logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
      },
      logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
      },
      formContainer: {
        width: '80%',
        marginBottom: 20,
      },
      buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
      },
})