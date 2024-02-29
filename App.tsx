import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignScreen from './screens/SignScreen';

export default function App() {
  const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Sign" component={SignScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

