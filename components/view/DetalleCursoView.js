import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { TblBloqueCurso } from '../../model/TblBloqueCurso';
import { TblContenidos } from '../../model/TblContenidos';
import { CardComponent } from '../util/CardComponent';
import { ContenidosBloque } from '../util/ContenidosBloque';
class DetalleCursoView extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      Curso: this.props.route.params.Curso,
      Dataset: this.props.route.params.Dataset ?? []
    }
  }
  NuevoContenido = async (Bloque = (new TblBloqueCurso()), actualizarContenidos) => {
    this.props.navigation.navigate('FrmContenido', {
      Bloque: Bloque,
      GuardarContenido: this.GuardarContenido,
      actualizarContenidos: actualizarContenidos
    });
  }
  GuardarBloque = async (Bloque = (new TblBloqueCurso())) => {
    Bloque.IdCurso = this.state.Curso.IdCurso;
    await Bloque.Save("IdBloque");   
    const Bloques = await this.state.Curso.TblBloqueCurso.get();
    this.setState({
      Dataset: Bloques
    });
    this.props.navigation.navigate("DetalleCursoView");
  }
  GuardarContenido = async (Bloque = (new TblBloqueCurso()), Contenido = (new TblContenidos())) => {
    Contenido.IdBloque = Bloque.IdBloque;
    await Contenido.Save("IdContenido");
    const Bloques = await this.state.Curso.TblBloqueCurso.get();
    this.setState({
      Dataset: Bloques
    });
    this.props.navigation.navigate("DetalleCursoView");
  }  
  render() {
    return <ScrollView style={{ padding: 10 }}>
      <Text style={styles.Title}>Bloques View</Text>
      <Button title="<- Regresar" onPress={() => {
        this.props.navigation.navigate("CursosView");
      }} />
      <Button title="Nuevo Bloque" onPress={() => {
        this.props.navigation.navigate("FrmBloque", { GuardarBloque: this.GuardarBloque });
      }} />
      {
        this.state.Dataset.map(p => {
          return (<View>
            <Text>{p.NombreBloque}</Text>
            <ContenidosBloque key={p.IdBloque} Curso={this.state.Curso}
              NuevoContenido={this.NuevoContenido}
              TblBloqueCurso={p}></ContenidosBloque>
          </View>)
        })
      }
    </ScrollView>;
  }
}
export { DetalleCursoView }
const styles = StyleSheet.create({
  Title: {
    fontSize: 26
  }
});