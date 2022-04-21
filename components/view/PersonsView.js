import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { CardComponent } from '../util/CardComponent';

import { Persona } from "../../model/Persona";
class PersonsView extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: true,
      Persons: []
    }
    this.PersonaModel = new Persona();
  }
  componentDidMount() {
    return this.PersonaModel.GetPersonas().then((responseJson) => {
      this.setState({
        isLoading: false,
        Persons: responseJson,
      });
    }).catch((error) => {
      console.error(error);
    });
  }
  render() {
    return <View>
      <Text>Persons View</Text>
      {this.state.isLoading?
          <ActivityIndicator size="large" color="#0000ff" />
          :
        this.state.Persons.map(p => {
          return (<CardComponent data={p} />)
        })
      } 
    </View>;
  }
}
export { PersonsView }