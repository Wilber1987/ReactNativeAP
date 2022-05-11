import { StyleSheet, Text, View, Button } from 'react-native';
const Login = (props) => {
    return (<View style={styles.container}>
        <View style={styles.Header}>
            <Text style={styles.Title}>LOGIN</Text>
        </View>
        <View style={styles.Options}>
            <Button title="Login" onPress={() => {
                props.navigation.navigate('Main');
            }} />
        </View>
    </View>);
}
export { Login }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#999',
        padding: 20,
        justifyContent: "center"
    }, Title: {
        color: "#fff",
        fontSize: 26,
    }, Header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }, Options: {
        flex: 3
    }
});
