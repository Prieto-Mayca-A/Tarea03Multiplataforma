import React,{Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image, TextInput} from 'react-native';
import Message from './App/components/message/Message';
import Body from './App/components/body/Body';
import Lista from './App/components/list/myList';
import Edad from './App/components/validator/ageValidator';

const provincias = [
  {
    id:1,
    name: 'Arequipa',
  },
  {
    id: 2,
    name: 'Lima',
  },
  {
    id: 3,
    name: 'Piura',
  },
];

export default class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      textValue: '',
      count: 0,
    };
  }

  changeTextInput = text =>{
    console.log(text)
    this.setState({textValue: text});
  };
  
  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
};

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.text}>
        <Text>Tarea del laboratorio03 </Text>
        </View>
        <Text>Ingrese su edad por favor : </Text>
        <Edad/>
        <Text>Flat List react native</Text>
        <Lista/>
        <Text></Text>
        <View style={styles.text}>
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text:{
    alignItems: 'center',
    padding: 10,
  },
});
/*
<Text>Lo que se hizo en el lab03</Text>
        </View>
        <View style={styles.text}>
          <Text>Ingrese su edad: </Text>
        </View>
          <TextInput 
          style={{height:40, borderColor: 'red', borderWidth: 1}}
          onChangeText={text => this.changeTextInput(text)}
          value={this.state.textValue}
          />
          <Body textBody={'Texto en Body'} onBodyPress={this.onPress}/>

          <View style={[styles.countContainer]}>
            <Text style={[styles.countText]}>{this.state.count}</Text>
          </View>

          {provincias.map(item => (
            <View>
              <Text>{item.name}</Text>
            </View>
          ))}
*/