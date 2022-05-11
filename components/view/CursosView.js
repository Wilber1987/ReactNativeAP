import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, ScrollView } from 'react-native';
//Model
import { TblCurso } from "../../model/TblCurso";
import { TblMatriculadosCursos } from "../../model/TblMatriculadosCursos";
//Componentes
import { CardCursoComp } from "../util/CardCursoComp"
import { MatriculadosView } from './MatriculadosView';
class CursosView extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        console.log(this.props.navigation);
        this.state = {
            isLoading: true,
            Dataset: [],
            Matriculados: [],
            CursoSeleccionado: {}
        }
        this.Curso = new TblCurso();
        this.CargarCursos();
    }
    CargarCursos = async (param = "") => {
        const Cursos = await this.Curso.Get(param);
        this.setState({
            isLoading: false,
            Dataset: Cursos
        });
    }
    CargarMatriculados = async (Curso) => {
        console.log("cargando", Curso);
        const MatriculadosCurso = new TblMatriculadosCursos();
        const Matriculados = await MatriculadosCurso.Get(Curso.IdCurso);
        const UsuariosMat = await Promise.all(Matriculados.map(async (x) => {
            return await x.TblUsuario.get();
        }));
        this.setState({
            CursoSeleccionado: Curso,
            Matriculados: UsuariosMat
        });
        this.props.navigation.navigate('MatriculadosView', { Dataset: this.state.Matriculados });
    }
    render() {
        return <ScrollView style={styles.container}>
            <Text style={styles.Title}>Cursos View</Text>
            <TextInput style={ styles.Input}
                placeholder='Buscar...'
                onChangeText={val => this.CargarCursos(val)}></TextInput>
            {this.state.isLoading ?
                <ActivityIndicator /> :
                this.state.Dataset.map(
                    curso =>
                        <CardCursoComp
                            key={curso.IdCurso}
                            CargarMatriculados={this.CargarMatriculados}
                            data={curso} />
                )}
        </ScrollView>;
    }
}
export { CursosView }
const styles = StyleSheet.create({
    container: {
        padding: 20,
        textAlign: "center"
    }, Title: {
        fontSize: 26
    }, Input: {
        padding: 10, 
        margin: 10,
        borderColor: "#999", 
        borderWidth: 2,
        borderRadius: 10
    }
});