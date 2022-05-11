import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
//vistas
import { UsuariosView } from './UsuariosView';
import MainCursosView from './MainCursosView';
const Main = (props) => {
    return ( <Tab.Navigator>
        <Tab.Screen name="MainCursosView" component={MainCursosView} />
        <Tab.Screen name="Usuarios" component={UsuariosView} />
      </Tab.Navigator>);
}
export { Main }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#999',
        width: "100%",
        padding: 20,
        margin: 10
    }, Title: {
        color: "#fff",
        fontSize: 26
    }
});
