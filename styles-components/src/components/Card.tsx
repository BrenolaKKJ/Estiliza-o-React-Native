import { View, Text, StyleSheet } from "react-native";

export default function Card() {

  return (

    <View style={styles.card}>

      <Text style={styles.texto}>
        Card de Informação
      </Text>

    </View>

  );

}

const styles = StyleSheet.create({

  card:{
    backgroundColor:"#333",
    padding:30,
    margin:20,
    borderRadius:10
  },

  texto:{
    color:"white",
    fontSize:20
  }

});