import { FlatList, StyleSheet, Text, View } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Moviments from '../../components/Moviments';

const list = [
        {    
        id: 1,
        label: 'Boleto conta luz',
        value: '300,90',
        date: '17/09/2022',
        type: 0 // despesas 
        },

        {   
            id: 2,
            label: 'Pix Cliente X',
            value: '2.500,00',
            date: '17/09/2022',
            type: 1 // receita
        },

        {   
            id: 3,
            label: 'Sálario',
            value: '7.500,00',
            date: '17/09/2022',
            type: 1 // receita
        },
]

export default function Home() {
  return (
    <View style={styles.container}>

      <Header name="Gabriel Camarate"/>
      <Balance saldo="9.250,90" gastos="-527,00"/>

      <Text style={styles.title}>Últimas movimentações</Text>

    <FlatList 
        style={styles.list} 
        data={list} 
        keyExtractor={ (item) => String(item.id)} 
        showsVerticalScrollIndicator={false} 
        renderItem={ ({ item }) => <Moviments data={item}/>}
    />
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
