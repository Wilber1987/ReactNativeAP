import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CursosView } from './CursosView';
import { MatriculadosView } from './MatriculadosView';
import { DetalleCursoView } from './DetalleCursoView';
import { FrmContenido } from './FrmContenido';
const Stack = createNativeStackNavigator();
//Views 

export default function MainCursosView() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CursosView2" component={CursosView}  />
        <Stack.Screen name="MatriculadosView" component={MatriculadosView} />
        <Stack.Screen name="DetalleCursoView" component={DetalleCursoView} />
        <Stack.Screen name="FrmContenido" component={FrmContenido} />
      </Stack.Navigator>
  );
}