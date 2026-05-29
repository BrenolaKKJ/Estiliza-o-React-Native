import { View, Text, StyleSheet } from "react-native";

export default function Header() {

  return (

    <View style={styles.container}>

      <Text style={styles.texto}>
        Meu App
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
    color:"white",
    fontSize:24
  }

});