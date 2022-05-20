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
  GuardarContenido = async (Bloque = (new TblBloqueCurso()), Contenido = (new TblContenidos())) => {
    Contenido.IdBloque = Bloque.IdBloque;
    await Contenido.Save();
    const Bloques = await this.state.Curso.TblBloqueCurso.get();
    this.setState({
      Dataset: Bloques
    })
  }
  render() {
    return <ScrollView style={{ padding: 10 }}>
      <Text style={styles.Title}>Bloques View</Text>
      <Button title="<- Regresar" onPress={() => {
        this.props.navigation.navigate("CursosView");
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