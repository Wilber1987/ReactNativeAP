import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import React from 'react';
import { TblBloqueCurso } from '../../model/TblBloqueCurso';
import { Button } from 'react-native-web';
class ContenidosBloque extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            isLoading: true,
            Contenidos: []
        }
        this.TblBloqueCurso = this.props.TblBloqueCurso ?? new TblBloqueCurso();
        this.cargarContenidos();
    }
    cargarContenidos  = async ()=>{
        const Contenidos = await this.TblBloqueCurso.TblContenidos.get();
        this.setState({
            isLoading: false,
            Contenidos: Contenidos
        });
    }
    render() {
        return (<View style={styles.CardStyle}>
            <Text style={styles.Title}>Contenidos</Text>
            <Button title="+" onPress={() => {
                this.props.NuevoContenido();
            }}></Button>
            {this.state.isLoading ?
                <ActivityIndicator size="large" color="#0000ff" /> :
                this.state.Contenidos.map(p => {
                    return (<View key={p.IdContenido}>
                       <Text style={styles.Atribute}>{ p.Nombre }</Text>
                    </View>)
                })
            }
        </View>);
    }

}
export { ContenidosBloque }
const styles = StyleSheet.create({
    CardStyle: {
        flex: 4,
        backgroundColor: '#999',
        padding: 20,
        margin: 20
    }, Title: {
        color: "#fff",
        fontSize: 26
    }, Atribute: {
        color: "#fff",
        fontSize: 16
    }
});