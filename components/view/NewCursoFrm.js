import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { } from 'react-native-web';
import { TblCurso } from '../../model/TblCurso';
class NewCursoFrm extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.Curso = new TblCurso();
        this.state = {
            Bloques: [],
            Contenidos: []
        }
    }
    NuevoBloque = async () => {

    }
    GuardarBloque = async () => {

    }
    NuevoContenido = async () => {

    }
    render() {
        return <View style={{ padding: 10 }}>
            <Text style={styles.Title}>Nuevo Bloque</Text>
            {/** FORMULARIO */}
            <TextInput style={styles.InputStyle}
                placeholder='Nombre'
                multiline
                numberOfLines={2}
                onChangeText={val => this.Curso.NombreCurso = val} />
            <TextInput style={styles.InputStyle}
                placeholder='Resumen'
                multiline
                numberOfLines={4}
                onChangeText={val => this.Curso.ResumenCurso = val} />
            <TextInput style={styles.InputStyle}
                placeholder='Fecha'
                onChangeText={val => this.Curso.FechaInicio = val} />
            {/** Detalle */}
            <Button title="Agregar Bloque" onPress={async () => {
                this.props.navigation.navigate("NuevoBloque", {
                    GuardarBloque: this.GuardarBloque
                });
            }} />
            <ScrollView>
                {this.state.Bloques.map(B => {
                    return (<View>
                        <Text>{p.NombreBloque}</Text>
                        <ContenidosBloque key={p.IdBloque} Curso={this.state.Curso}
                            NuevoContenido={this.NuevoContenido}
                            TblBloqueCurso={p} />
                    </View>)
                })
                }
            </ScrollView>
            {/** OPCIONES */}
            <Button title="Guardar" onPress={async () => {
                this.props.navigation.navigate("CursosView");
            }} />
            <Button title="Cancelar" onPress={() => {
                this.props.navigation.navigate("CursosView");
            }} />
        </View>;
    }
}
export { NewCursoFrm }
const styles = StyleSheet.create({
    Title: {
        fontSize: 26
    }, InputStyle: {
        padding: 10, margin: 10,
        borderWidth: 2, borderRadius: 5,
        borderColor: "#999"
    }
});