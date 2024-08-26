import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';



const Icon = require('../../assets/img/local-img.png');


export default function Local(){
    return (
        <View style={styles.container}>
        <Text  style={styles.title}>Já conhece </Text>
        <Text  style={styles.title}> a nossa loja?</Text>

        <Image source={Icon} style={styles.img} />

        <Text  style={styles.titlee}>Venha conhecer nossa loja</Text>

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontSize: 28,
      color: '#65146d',
      right:80,
      fontFamily:'Poppins_800ExtraBold',
    },
    titlee:{
      fontSize: 25,
      color: '#65146d',
      fontFamily:'Poppins_800ExtraBold',
    },
  img: {

    width: 415,
    height:490,
    resizeMode: 'contain', 
    borderColor: 'red'
  },

  });