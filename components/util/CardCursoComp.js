import { StyleSheet, Text, View, Button } from 'react-native';
const CardCursoComp = (props) => {
    return (<View style={styles.CardStyle}>
        <Text style={styles.Title}>Detalle</Text>
        <Text style={styles.Atribute}>Nombres: {props.data.NombreCurso}</Text>
        {/* <Text style={styles.Resumen}>Resumen: {props.data.ResumenCurso}</Text> */}
        <Text style={styles.Atribute}>Fecha: {props.data.FechaCreacion}</Text>
        <Button title="Ver Detalle" onPress={() => {
            props.CargarBloques(props.data);
        }}> </Button>
        <Button title="Ver Matriculados" onPress={() => {
            props.CargarMatriculados(props.data);
        }}> </Button>
    </View>);
}
export { CardCursoComp }
const styles = StyleSheet.create({
    CardStyle: {
        flex: 4,
        backgroundColor: '#999',
        padding: 20,
        margin: 20,
        borderRadius: 10
    }, Title: {
        color: "#fff",
        fontSize: 26
    }, Atribute: {
        color: "#fff",
        fontSize: 16
    }, Resumen: {
        color: "#fff",
        fontSize: 12
    }
});