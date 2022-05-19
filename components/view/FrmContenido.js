import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { TextInput } from 'react-native-web';
import { TblContenidos } from '../../model/TblContenidos';
class FrmContenido extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.Bloque =  this.props.route.params.Bloque;
        this.Contenido = new TblContenidos();
    }
    render() {
        return <View style={{ padding: 10 }}>
            <Text style={styles.Title}>Nuevo Bloque</Text>
            {/** FORMULARIO */}
            <TextInput style={styles.InputStyle}
                placeholder='IdContenido'
                onChangeText={val => this.Contenido.IdContenido = val}></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder='Nombre'
                onChangeText={val => this.Contenido.Nombre = val}></TextInput>
               
            {/** OPCIONES */}
            <Button title="Guardar" onPress={async () => {               
                await this.props.route.params.GuardarContenido(this.Bloque, this.Contenido);
                await this.props.route.params.actualizarContenidos();
                this.props.navigation.navigate("DetalleCursoView");
            }} />
            <Button title="Cancelar" onPress={() => {
                this.props.navigation.navigate("DetalleCursoView");
            }} />
        </View>;
    }
}
export { FrmContenido }
const styles = StyleSheet.create({
    Title: {
        fontSize: 26
    }, InputStyle :{
        padding: 10, margin: 10,borderWidth: 2, borderRadius: 3
    }
});