import { View, StyleSheet } from "react-native";

import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {

  return (

    <View style={styles.container}>

      <Header />

      <Card />

      <Footer />

    </View>

  );

}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"black",
    paddingTop:50
  }

});