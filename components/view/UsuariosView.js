import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, ScrollView } from 'react-native';
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
  ChargePersons = async (Param = "") => {
    console.log("serching...");
    const Persons = await this.PersonaModel.Get(Param);
    this.setState({
      isLoading: false,
      Persons: Persons,
    });
  }
  render() {
    return <ScrollView>
      <Text>Persons View</Text>
      <TextInput placeholder='Buscar...' onChangeText={Value => this.ChargePersons(Value)} />
      {this.state.isLoading ?
        <ActivityIndicator size="large" color="#0000ff" /> :
        this.state.Persons.map(p => {
          return (<CardComponent key={p.Carnet} data={p} />)
        })
      }
    </ScrollView>;
  }
}
export { UsuariosView }