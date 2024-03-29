import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignScreen from './screens/SignScreen';
import MessageScreen from './screens/MessageScreen';
import MessageModal from './screens/MessageModal';
import PostModal from './screens/PostModal';
import ProfileModal from './screens/ProfileModal';
import UserPosts from './screens/UserPosts';

export default function App() {
  const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
        <Stack.Screen name="LogIn" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Message" component={MessageScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Sign" component={SignScreen} options={{headerShown:false}}/>
        <Stack.Screen name="UserPosts" component={UserPosts} options={{headerShown:false}}/>
        </Stack.Group>
        <Stack.Group screenOptions={{presentation:"transparentModal"}}>
          <Stack.Screen name="MessageModal" component={MessageModal} options={{headerShown:false}}/>
          <Stack.Screen name="PostModal" component={PostModal} options={{headerShown:false}}/>
          <Stack.Screen name="ProfileModal" component={ProfileModal} options={{headerShown:false}}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

