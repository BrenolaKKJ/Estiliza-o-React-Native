import { View, Text, StyleSheet } from "react-native";

export default function Footer() {

  return (

    <View style={styles.container}>

      <Text style={styles.texto}>
        Rodapé do App
      </Text>

    </View>

  );

}

const styles = StyleSheet.create({

  container:{
    backgroundColor:"blue",
    padding:20,
    alignItems:"center"
  },

  texto:{
    color:"white"
  }

});