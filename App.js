import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
//Views 
import { MatriculadosView } from './components/view/MatriculadosView';
import { CursosView2 } from './components/view/CursosView2';

export default function App() {
  return (
    <View >
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen  name="Cursos"  component={CursosView2}  options={{ title: 'cursos' }}/>
          <Stack.Screen  name="Matriculados"  component={MatriculadosView}  options={{ title: 'matriculados' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
