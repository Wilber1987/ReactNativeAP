import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
//Views 
import { Login } from './components/view/Login';
import { Main } from './components/view/Main';

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
          }} >
          <Stack.Screen  name="Login"  component={Login}  options={{ title: 'Login' }}/>
          <Stack.Screen  name="Main"  component={Main}  options={{ title: 'Main' }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
