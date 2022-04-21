import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
//Component
import { CardComponent } from '../util/CardComponent';
//Model
import {Persona} from "../../model/Persona"

class PersonsTestView extends React.Component {
    constructor(props) {
        super();
        this.state = {
            Personas : []
        }
        const persona = new Persona({
            Nombres: "Wilber Matus",
            FechaNacimiento: "2000-01-01"
        });
        const persona2 = new Persona({
            Nombres: "Wilber Matus 2"
        });
        this.state.Personas.push(persona);
        this.state.Personas.push(persona2);
        this.state.Personas.push(persona2);
        this.state.Personas.push(persona);
    }
    render() {      
        return (<View>
            <Text>PersonsTestView</Text>
            {
                this.state.Personas.map(persona => {
                    return <CardComponent data={persona}></CardComponent>
                })
            }
        </View>)
    }
}
export { PersonsTestView }