import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { CardComponent } from '../util/CardComponent';

import { TblUsuario } from "../../model/TblUsuario";
class UsuariosView extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: true,
      Persons: []
    }
    this.PersonaModel = new TblUsuario();
    this.ChargePersons();
  }
  ChargePersons = async () => {
    const Persons = await this.PersonaModel.Get();    
    this.setState({
      isLoading: false,
      Persons: Persons,
    });
  }
  render() {
    return <View>
      <Text>Persons View</Text>
      {this.state.isLoading ?
        <ActivityIndicator size="large" color="#0000ff" />
        :
        this.state.Persons.map(p => {
          return (<CardComponent key={p.Carnet} data={p} />)
        })
      }
    </View>;
  }
}
export { UsuariosView }