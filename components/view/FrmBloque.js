import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { TblBloqueCurso } from '../../model/TblBloqueCurso';
import { TblContenidos } from '../../model/TblContenidos';
class FrmBloque extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.Bloque = new TblBloqueCurso();
    }
    render() {
        return <View style={{ padding: 10 }}>
            <Text style={styles.Title}>Nuevo Bloque</Text>
            {/** FORMULARIO */}           
            <TextInput style={styles.InputStyle}
                placeholder='Nombre'
                multiline
                numberOfLines={2}
                onChangeText={val => this.Bloque.NombreBloque = val}></TextInput>
            {/** OPCIONES */}
            <Button title="Guardar" onPress={async () => {  
                await this.props.route.params.GuardarBloque(this.Bloque);           
                this.props.navigation.navigate("NewCursoFrm");
            }} />
            <Button title="Cancelar" onPress={() => {
                this.props.navigation.navigate("NewCursoFrm");
            }} />
        </View>;
    }
}
export { FrmBloque }
const styles = StyleSheet.create({
    Title: {
        fontSize: 26
    }, InputStyle :{
        padding: 10, margin: 10,borderWidth: 2, borderRadius: 3
    }
});