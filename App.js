import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ActivityIndicator} from 'react-native';
//Views 
import { UsuariosView } from './components/view/UsuariosView';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ReactNative</Text> 
      <UsuariosView></UsuariosView>            
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
