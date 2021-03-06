import { StyleSheet, Text, View } from 'react-native';
const CardComponent = (props) => {
    return (<View style={styles.CardStyle}>
        <Text style={styles.Title}>Detalle</Text>
        <Text style={styles.Atribute}>Nombres: {props.data.Nombres}</Text>
    </View>);
}
export { CardComponent }
const styles = StyleSheet.create({
    CardStyle: {
        flex: 4,
        backgroundColor: '#999',
        padding: 20,
        margin: 10
    }, Title: {
        color: "#fff",
        fontSize: 26
    }, Atribute: {
        color: "#fff",
        fontSize: 16
    }
});
