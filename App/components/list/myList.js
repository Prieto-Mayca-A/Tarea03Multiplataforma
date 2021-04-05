import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Clasico',
    image:'https://i.pinimg.com/474x/95/dc/94/95dc942cfb929b9a85059965ff1df595.jpg',
  },
  {
    id: '2',
    title: 'Deportivo',
    image:'https://i.pinimg.com/originals/1e/39/15/1e3915a62c9f52e80b1df3051fa5cf69.jpg',
  },
  {
    id: '3',
    title: 'Humilde',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauRZ8psILOgy0X16J04ReL11q3nX_4i5-aA&usqp=CAU',
  },
];
   
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Lista  = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );


  return (
      <FlatList
        data={DATA}
        renderItem={renderItem}
        height={275}
        keyExtractor={item => item.id}
      />
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    height: 100,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

/*
import React from 'react';
import {View, Text} from 'react-native';

const Lista = () => (
    <View>
        <Text>Este es mi mensaje lista</Text>
    </View>
);
*/
export default Lista;