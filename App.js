import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ActivityIndicator} from 'react-native';
//Views 
import { PersonsTestView } from './components/view/PersonaTestView';
//import { PersonsView } from './components/view/PersonsView';
//Components
import { CardComponent } from './components/util/CardComponent';
//Modelo
import { Persona } from './model/Persona';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ReactNative</Text> 
      <PersonsTestView></PersonsTestView>            
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
