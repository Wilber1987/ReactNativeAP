import React from 'react';
import { StyleSheet, Text, Alert, ActivityIndicator, TextInput, ScrollView } from 'react-native';
import { TblBloqueCurso } from '../../model/TblBloqueCurso';
//Model
import { TblCurso } from "../../model/TblCurso";
import { TblMatriculadosCursos } from "../../model/TblMatriculadosCursos";
//Componentes
import { CardCursoComp } from "../util/CardCursoComp";
class CursosView extends React.Component {
    constructor(props) {
        super();
        this.props = props;
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
    CargarMatriculados = async (param) => {
        const MatriculadosCurso = new TblMatriculadosCursos();
        const Matriculados = await MatriculadosCurso.Get(param.IdCurso);
        const UsuariosMat = await Promise.all(Matriculados.map(async (x) => {
            return await x.TblUsuario.get();
        }));
        this.setState({
            CursoSeleccionado: param,
            Matriculados: UsuariosMat
        });
        this.props.navigation.navigate('MatriculadosView', { Dataset: this.state.Matriculados });
    }
    CargarBloques = async (Curso = (new TblCurso())) => {        
        const Bloques = await Curso.TblBloqueCurso.get();   
        this.props.navigation.navigate('DetalleCursoView', {
            Curso: Curso,
            Dataset: Bloques
        });
    }
    render() {
        return <ScrollView style={{}}>
            <Text style={styles.Title}>Cursos View</Text>
            <TextInput style={{ padding: 10, margin: 10 }}
                placeholder='Buscar'
                onChangeText={val => this.CargarCursos(val)}></TextInput>
            {this.state.isLoading ?
                <ActivityIndicator /> :
                this.state.Dataset.map(
                    curso =>
                        <CardCursoComp
                            key={curso.IdCurso}
                            CargarBloques={this.CargarBloques}
                            CargarMatriculados={this.CargarMatriculados}
                            data={curso} />
                )}
        </ScrollView>;
    }
}
export { CursosView }
const styles = StyleSheet.create({
    Title: {
        fontSize: 26
    }
});