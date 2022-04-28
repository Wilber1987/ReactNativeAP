import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput } from 'react-native';
//Model
import { TblCurso } from "../../model/TblCurso";
import { TblMatriculadosCursos } from "../../model/TblMatriculadosCursos";
//Componentes
import { CardCursoComp } from "../util/CardCursoComp"
import { MatriculadosView } from './MatriculadosView';
class CursosView extends React.Component {
    constructor(props) {
        super();
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
        console.log("cargando", param);
        const MatriculadosCurso = new TblMatriculadosCursos();
        const Matriculados = await MatriculadosCurso.Get(Curso.IdCurso);
        const UsuariosMat = await Promise.all(Matriculados.map(async (x) => {
            return await x.TblUsuario.get();
        }));
        this.setState({
            CursoSeleccionado: Curso,
            Matriculados: UsuariosMat
        });
    }
    render() {
        return <View style={{ flex: 5 }}>
            <Text>Cursos View</Text>
            <TextInput style={{ padding: 10, margin: 10 }}
                placeholder='Buscar'
                onChangeText={val => this.CargarCursos(val)}></TextInput>
            {this.state.isLoading ?
                <ActivityIndicator /> :
                this.state.Dataset.map(
                    curso =>
                        <CardCursoComp
                            key={curso.IdCurso}
                            function={this.CargarMatriculados}
                            data={curso} />
                )}
            <MatriculadosView Data={this.state.CursoSeleccionado}
                Dataset={this.state.Matriculados}></MatriculadosView>
        </View>;
    }
}
export { CursosView }