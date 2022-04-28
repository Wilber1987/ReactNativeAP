import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput } from 'react-native';
//Model
import { TblCurso } from "../../model/TblCurso";
import { TblMatriculadosCursos} from "../../model/TblMatriculadosCursos";
//Componentes
import { CardCursoComp } from "../util/CardCursoComp"
import { MatriculadosView } from './MatriculadosView';
class CursosView extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isLoading: true,
            Dataset: [],
            Matriculados: []
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
    CargarMatriculados = async (param = "") => {
        console.log("cargando", param);
        const MatriculadosCurso = new TblMatriculadosCursos();
        const Matriculados = await MatriculadosCurso.Get(param);
        console.log(Matriculados);
        
        this.setState({
            Matriculados: Matriculados
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
                <MatriculadosView Dataset= {this.state.Matriculados}></MatriculadosView>
        </View>;
    }
}
export { CursosView }