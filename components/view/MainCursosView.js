import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
//Views 
import { MatriculadosView } from './MatriculadosView';
import { CursosView } from './CursosView';


export default function MainCursosView() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen name="CursosView" component={CursosView} />
            <Stack.Screen name="MatriculadosView" component={MatriculadosView} />
        </Stack.Navigator>
    );
}
