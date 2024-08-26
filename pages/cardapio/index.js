import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {  useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

const Icon = require('../../assets/img/acai-inicial.png');
const Icon2 = require('../../assets/img/tigela-1-verd.png');
const Icon3 = require('../../assets/img/tigela-5-roxo.png');
const Icon4 = require('../../assets/img/tigela-2-verde.png');
const Icon5 = require('../../assets/img/copo-2-roxo.png');
const Icon6 = require('../../assets/img/copo-3-verde.png');
const Icon7 = require('../../assets/img/copo-6-roxo.png');


export default function Cardapio() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (


      // <ScrollView>
        <View style={styles.container}>

        <Text style={styles.title}>ESCOLHA JÁ O </Text>
        <Text style={styles.titlee}>SEU AÇAI</Text>

        <Text style={styles.subtitle}>VEJA AS OPÇÕES ABAIXO:</Text>


        <View style={styles.imgContainer}>
        <TouchableOpacity >
        <Image source={Icon7} style={styles.imgg} />
       </TouchableOpacity>

       <Text style={styles.subtitleimg}>AÇAI COM CONFETE:</Text>
       <Text style={styles.paraph}>hh:</Text>
       </View>

       <View style={styles.imgContainer}>
        <TouchableOpacity >
        <Image source={Icon6} style={styles.imgg} />
       </TouchableOpacity>

       <Text style={styles.subtitleimg}>VEJA AS OPÇÕES ABAIXO:</Text>
       </View>


       <View style={styles.imgContainer}>
        <TouchableOpacity >
        <Image source={Icon5} style={styles.imgg} />
       </TouchableOpacity>

       <Text style={styles.subtitleimg}>VEJA AS OPÇÕES ABAIXO:</Text>
       </View>










        </View>

        // </ScrollView>

 
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
      fontSize: 28,
      color: '#9fcd2c',
      right:120,
      fontFamily:'Poppins_800ExtraBold',
    },
    subtitle:{
      fontSize: 15,
      color: '#65146d',
      textAlign: 'center',
      right:85,
      fontFamily:'Poppins_800ExtraBold',
    },
    subtitleimg:{
      fontSize: 15,
      color: '#65146d',
      textAlign: 'left',
    marginBottom:50,
      fontFamily:'Poppins_800ExtraBold',
    },

    imgg: {
      top:20,
      width: 130,
      height:160,
      resizeMode: 'contain', 
      marginHorizontal: 10, 
      right:20,
      marginBottom:15,
    },
  
    imgContainer: {
      flexDirection: 'row', 
      alignItems: 'center',// Organiza os itens em linha horizontal
    }, 
    paraph:{
      fontSize: 10,
      color: '#65146d',
      textAlign: 'left',
      marginBottom:10,
      fontFamily:'Poppins_400Regular',


    },

  });