import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { CardComponent } from '../util/CardComponent';
class MatriculadosView extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    console.log(this.props);
    this.Dataset = this.props.route.params.Dataset;
  }
  render() {
    return <ScrollView style={styles.container}>
      <Text style={styles.Title}>Persons View</Text>
      <Button title="<- Volver" onPress={() => {
        this.props.navigation.navigate('CursosView');
      }} />
      {
        this.Dataset ?
          this.Dataset.map(p => {
            return (<CardComponent key={p.Carnet} data={p} />)
          }) : <Text>No Data</Text>
      }
    </ScrollView>;
  }
}
export { MatriculadosView }
const styles = StyleSheet.create({
  container: {
    padding: 20,
    textAlign: "center"
  }, Title: {
    fontSize: 26
  }
});