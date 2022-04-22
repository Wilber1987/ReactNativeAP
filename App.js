import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ActivityIndicator} from 'react-native';
//Views 
import { UsuariosView } from './components/view/UsuariosView';
import { CursosView } from './components/view/CursosView';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ReactNative</Text>  
      <CursosView style={{flex: 8}}/>          
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
  }, title :{
    height: 100,
    fontSize: 25
  }
});
