import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Alert } from 'react-native';
import { TblBloqueCurso } from '../../model/TblBloqueCurso';
import { TblContenidos } from '../../model/TblContenidos';
import { TblCurso } from '../../model/TblCurso';
import { ContenidosBloque } from '../util/ContenidosBloque';
class NewCursoFrm extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.Curso = new TblCurso();
        this.state = {
            Bloques: []
        }
        this.CargarCursos =this.props.route.params.CargarCursos;
    }
    NuevoBloque = async () => {

    }
    GuardarBloque = async (Bloque = (new TblBloqueCurso())) => {
        this.state.Bloques.push(Bloque);
        this.setState({
            Bloques: this.state.Bloques
        });
        this.props.navigation.navigate("NewCursoFrm");
    }
    NuevoContenido = async (Bloque = (new TblBloqueCurso()), actualizarContenidos) => {
        this.props.navigation.navigate('FrmContenido', {
            Bloque: Bloque,
            GuardarContenido: this.GuardarContenido,
            actualizarContenidos: actualizarContenidos
        });
    }
    GuardarContenido = async (Bloque = (new TblBloqueCurso()), Contenido = (new TblContenidos())) => {
        const Contenidos = await Bloque.TblContenidos.get();
        Contenidos.push(Contenido);
        this.props.navigation.navigate("NewCursoFrm");
    }
    Save = async () => {
        try {
            await this.Curso.Save("IdCurso");
            for (let index = 0; index < this.state.Bloques.length; index++) {
                const bloque = this.state.Bloques[index];
                bloque.IdCurso = this.Curso.IdCurso;
                await bloque.Save("IdBloque");
                const contenidosBloques = bloque.TblContenidos.val;
                for (let ibloque = 0; ibloque < contenidosBloques.length; ibloque++) {
                    const contenido = contenidosBloques[ibloque];
                    contenido.IdBloque = bloque.IdBloque;
                    await contenido.Save("IdContenido");
                }
            }
            return true;
        } catch (error) {
            console.log(error);
            return true;
        }

    }
    render() {
        return <ScrollView style={{ padding: 10 }}>
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
                this.props.navigation.navigate("FrmBloque", {
                    GuardarBloque: this.GuardarBloque
                });
            }} />
            <ScrollView>
                {this.state.Bloques.map(p => {
                    return (<View>
                        <Text>{p.NombreBloque}</Text>
                        <ContenidosBloque key={p.IdBloque} Curso={this.state.Curso}
                            NuevoContenido={this.NuevoContenido}
                            TblBloqueCurso={p} />
                    </View>)
                })}
            </ScrollView>
            {/** OPCIONES */}
            <Button title="Guardar" onPress={async () => {
                const response = await this.Save();
                if (response) {
                    console.log(this.props.route.params);
                    await this.CargarCursos(); 
                    this.props.navigation.navigate("CursosView");
                } else {
                    Alert.alert("error..");
                }
            }} />
            <Button title="Cancelar" onPress={() => {
                this.props.navigation.navigate("CursosView");
            }} />
        </ScrollView>;
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