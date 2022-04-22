import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput } from 'react-native';
//Model
import { TblCurso } from "../../model/TblCurso";
//Componentes
import { CardCursoComp } from "../util/CardCursoComp"
class CursosView extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isLoading: true,
            Dataset: []
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
    render() {
        return <View style={{ flex: 5 }}>
            <Text>Cursos View</Text>
            <TextInput style={{ padding: 10, margin: 10 }} placeholder='Buscar'
                onChangeText={val => this.CargarCursos(val)} />
            {this.state.isLoading ? <ActivityIndicator /> :
                this.state.Dataset.map(
                    curso => <CardCursoComp key={curso.IdCurso} data={curso} />
                )}
        </View>
    }
}
export { CursosView }