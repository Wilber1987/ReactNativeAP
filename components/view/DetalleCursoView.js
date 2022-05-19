import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { TblBloqueCurso } from '../../model/TblBloqueCurso';
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
  NuevoContenido = async () => {
    this.props.navigation.navigate('FrmContenido', { Dataset: this.Curso });
  }
  GuardarContenido = async (Bloque = (new TblBloqueCurso()), Contenido=(new TblContenidos())) => {
    const bloque = this.state.Dataset.filter(b => b.IdBloque = Bloque.IdBloque);
    setState({
      Dataset: this.state.Dataset
    })
    this.props.navigation.navigate('FrmContenido', { Dataset: this.Curso });
  }
  render() {
    return <ScrollView style={{ padding: 10 }}>
      <Text style={styles.Title}>Bloques View</Text>
      <Button title="<- Regresar" onPress={() => {
        this.props.navigation.navigate("CursosView2");
      }} />
      {
        this.state.Dataset.map(p => {
          return (<View key={p.IdBloque}>
            <Text>{p.NombreBloque}</Text>
            <ContenidosBloque Curso={this.state.Curso}
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