import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator , TextInput } from 'react-native';
import { CardComponent } from '../util/CardComponent';
class MatriculadosView extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  } 
  render() {
    return <View>
      <Text>Persons View</Text>
      <TextInput placeholder='Buscar...' onChangeText={Value => this.ChargePersons(Value)}/>  
      {
        this.props.Dataset.map(p => {
          return (<CardComponent key={p.Carnet} data={p} />)
        })
      }
    </View>;
  }
}
export { MatriculadosView }