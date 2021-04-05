import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const Edad = () => {
  const [number, onChangeNumber] = React.useState(null);

    if(Edad >= 18){
        alert("Eres mayor de edad");
    }else{
        alert("Eres menor de edad");
    }   

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        value={number}
        placeholder="Ingrese su edad"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default Edad;
