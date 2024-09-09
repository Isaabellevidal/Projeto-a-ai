import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {  useFonts, Poppins_800ExtraBold } from '@expo-google-fonts/poppins';
import * as Animatable from 'react-native-animatable';


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
    <Animatable.Text animation={'zoomInUp'} style={styles.title} >JÁ TOMOU O </Animatable.Text>
    <Animatable.Text animation={'zoomInUp'}  style={styles.title}>       SEU AÇAI HOJE?</Animatable.Text>
    <Animatable.Text  animation={'pulse'}  style={styles.subtitle}>EXPERIMENTE AGORA</Animatable.Text>

   <Animatable.Image  animation={'fadeInLeft'} delay={300}
    source={Icon} style={styles.img} />

   <Text style={styles.text}>São várias opções de açai </Text>
   <Text style={styles.text}>para você escolher</Text>

    <Animatable.View animation={'pulse'}style={styles.imgContainer}>

    <TouchableOpacity >
   <Image source={Icon2} style={styles.imgg} />
   </TouchableOpacity>

   <TouchableOpacity >
   <Image source={Icon3} style={styles.imgg} />
   </TouchableOpacity>

   <TouchableOpacity >
   <Image source={Icon4} style={styles.imgg} />
   </TouchableOpacity>
   </Animatable.View>
 

    <Animatable.View animation={'pulse'} easing="ease-out" iterationCount="infinite" style={styles.imgContainer}>
    <TouchableOpacity >
   <Image source={Icon5} style={styles.imag} />
   </TouchableOpacity >

   <TouchableOpacity >
   <Image source={Icon6} style={styles.imag} />
   </TouchableOpacity >

   <TouchableOpacity >
   <Image source={Icon7} style={styles.imag} />
   </TouchableOpacity >
   </Animatable.View>
  

   <View style={styles.card} >
    <Text style={styles.title1}>Os mais pedidos</Text>







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
      width: 400,
      height:240,
      marginBottom:50,
  
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

    title1:{
      fontSize: 23,
      color: '#65146d',
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
      marginBottom:150,
    },
  row:{
    display:"flex",
    flexDirection:"column",
   } ,

    card:{
    width:380,
    height:280,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.8,
    padding:20,
    borderRadius:10,
    marginTop:40,
    elevation:10,
    marginBottom:200,
    },





  });