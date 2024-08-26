import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {  useFonts, Poppins_800ExtraBold } from '@expo-google-fonts/poppins';



const Icon = require('../../assets/img/acai-inicial.png');
const Icon2 = require('../../assets/img/tigela-1-verd.png');
const Icon3 = require('../../assets/img/tigela-5-roxo.png');
const Icon4 = require('../../assets/img/tigela-2-verde.png');
const Icon5 = require('../../assets/img/copo-2-roxo.png');
const Icon6 = require('../../assets/img/copo-3-verde.png');
const Icon7 = require('../../assets/img/copo-6-roxo.png');


export default function Home() {
  let [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (

    <ScrollView>
    <View style={styles.container}>
    {/* <View style={styles.row}> */}
    <Text style={styles.title} >JÁ TOMOU O </Text>
    <Text style={styles.title}>       SEU AÇAI HOJE?</Text>
    <Text style={styles.subtitle}>EXPERIMENTE AGORA</Text>

   <Image source={Icon} style={styles.img} />

   <Text style={styles.text}>São várias opções de açai </Text>
   <Text style={styles.text}>para você escolher</Text>

    <View style={styles.imgContainer}>
    <TouchableOpacity >
   <Image source={Icon2} style={styles.imgg} />
   </TouchableOpacity>

   <TouchableOpacity >
   <Image source={Icon3} style={styles.imgg} />
   </TouchableOpacity>

   <TouchableOpacity >
   <Image source={Icon4} style={styles.imgg} />
   </TouchableOpacity>
   </View>
 

    <View style={styles.imgContainer}>
    <TouchableOpacity >
   <Image source={Icon5} style={styles.imag} />
   </TouchableOpacity >

   <TouchableOpacity >
   <Image source={Icon6} style={styles.imag} />
   </TouchableOpacity >

   <TouchableOpacity >
   <Image source={Icon7} style={styles.imag} />
   </TouchableOpacity >
   </View>
  




   </View>
   <StatusBar style="auto" />
 {/* </View> */}
 </ScrollView>
  );
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    img: {
      width: 415,
      height:490,
      resizeMode: 'contain', 
      borderColor: 'red'
  
    },
    imgg: {
      width: 120,
      height:160,
      resizeMode: 'contain', 
      marginHorizontal: 10, 
    },
    imag: {
      width: 120,
      height:160,
      resizeMode: 'contain', 
      marginHorizontal: 10, 
      marginBottom:200,
    },
    imgContainer: {
      flexDirection: 'row', 
      alignItems: 'center',// Organiza os itens em linha horizontal
    }, 
    title:{
      top: 100, 
      fontSize: 28,
      color: '#65146d',
      right:90,
      fontFamily:'Poppins_800ExtraBold',
     
    },
    text:{
      fontSize: 24,
      color: '#65146d',
      fontFamily:'Poppins_800ExtraBold',
   
     
    },
    subtitle:{
      top: 100, 
      fontSize: 15,
      color: '#9fcd2c',
      textAlign: 'center',
      right:95,
      fontFamily:'Poppins_800ExtraBold',
    },
  row:{
    display:"flex",
    flexDirection:"column",
}  ,
  });