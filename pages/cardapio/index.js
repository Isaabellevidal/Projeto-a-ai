import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {  useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import * as Animatable from 'react-native-animatable';

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

      <ScrollView>
        <View style={styles.container}>

        <Text style={styles.title}>ESCOLHA JÁ O </Text>
        <Text style={styles.titlee}>SEU AÇAI</Text>

        <Text style={styles.subtitle}>VEJA AS OPÇÕES ABAIXO:</Text>


    <Animatable.View animation={'slideInRight'} delay={400} style={styles.card}>  
        <View style={styles.imgContainer}>

        <TouchableOpacity >
        <Image source={Icon7} style={styles.imgg} />
       </TouchableOpacity>

      <View style={styles.textContainer}> 
       <Text style={styles.subtitleimg}>AÇAI COM CONFETE:</Text>
       <Text style={styles.text}>Um açaí cremoso, decorado com uma chuva de confete coloridos que adiciona um toque divertido
         e crocante </Text>
      
       </View>
     </View> 

 </Animatable.View>


    <Animatable.View  animation={'slideInLeft'} delay={400}  style={styles.card}>  
        <View style={styles.imgContainer}>

        <TouchableOpacity >
        <Image source={Icon6} style={styles.imgg} />
       </TouchableOpacity>

      <View style={styles.textContainer}> 
       <Text style={styles.subtitleimg}>AÇAI PURO:</Text>
       <Text style={styles.text}>O açaí puro é um fruto amazônico de cor roxa escura, com sabor terroso e levemente adocicado. Sua polpa é rica em antioxidantes, fibras e gorduras saudáveis, sendo consumida geralmente congelada ou em pó.</Text>
       </View>

     </View> 

  </Animatable.View>


  
  <Animatable.View animation={'slideInRight'} delay={400}  style={styles.card}>  
        <View style={styles.imgContainer}>

        <TouchableOpacity >
        <Image source={Icon5} style={styles.imgg} />
       </TouchableOpacity>

      <View style={styles.textContainer}> 
       <Text style={styles.subtitleimg}>AÇAI COM FRUTAS:</Text>
       <Text style={styles.text}>O açaí de frutas no copo é uma bebida refrescante e nutritiva, feita com polpa de açaí misturada a outras frutas. Servido gelado, oferece um sabor tropical e é rico em vitaminas, antioxidantes e fibras.</Text>
       </View>

     </View> 

  </Animatable.View>


  <Text style={styles.subtitle}>OPÇÕES DE AÇAI NA TIGELA:</Text>

  <Animatable.View animation={'slideInLeft'} delay={400}  style={styles.card}>  
        <View style={styles.imgContainer}>

        <TouchableOpacity >
        <Image source={Icon2} style={styles.imgg} />
       </TouchableOpacity>

      <View style={styles.textContainer}> 
       <Text style={styles.subtitleimg}>AÇAI COM FRUTAS:</Text>
       <Text style={styles.text}>O açaí de frutas no copo é uma bebida refrescante e nutritiva, feita com polpa de açaí misturada a outras frutas. Servido gelado, oferece um sabor tropical e é rico em vitaminas, antioxidantes e fibras.</Text>
       </View>

     </View> 

  </Animatable.View>


  
  < Animatable.View animation={'slideInRight'} delay={400}  style={styles.card}>  
        <View style={styles.imgContainer}>

        <TouchableOpacity >
        <Image source={Icon3} style={styles.imgg} />
       </TouchableOpacity>

      <View style={styles.textContainer}> 
       <Text style={styles.subtitleimg}>AÇAI COM FRUTAS:</Text>
       <Text style={styles.text}>O açaí de frutas no copo é uma bebida refrescante e nutritiva, feita com polpa de açaí misturada a outras frutas. Servido gelado, oferece um sabor tropical e é rico em vitaminas, antioxidantes e fibras.</Text>
       </View>

     </View> 
     </Animatable.View>



    
  <Animatable.View  animation={'slideInLeft'} delay={400}   style={styles.cardd}>  
        <View style={styles.imgContainer}>

        <TouchableOpacity >
        <Image source={Icon4} style={styles.imgg} />
       </TouchableOpacity>

      <View style={styles.textContainer}> 
       <Text style={styles.subtitleimg}>AÇAI COM FRUTAS:</Text>
       <Text style={styles.text}>O açaí de frutas no copo é uma bebida refrescante e nutritiva, feita com polpa de açaí misturada a outras frutas. Servido gelado, oferece um sabor tropical e é rico em vitaminas, antioxidantes e fibras.</Text>
       </View>

     </View> 

  </Animatable.View>

        </View>

        </ScrollView>

 
    );
  }
  

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   
    },
    title:{
      top:90,
      fontSize: 28,
      color: '#65146d',
      right:80,
      fontFamily:'Poppins_800ExtraBold',
    },
    titlee:{
      top:90,
      fontSize: 28,
      color: '#9fcd2c',
      right:120,
      fontFamily:'Poppins_800ExtraBold',
    },
    subtitle:{
      top:105,
      fontSize: 15,
      color: '#65146d',
      textAlign: 'center',
      fontFamily:'Poppins_800ExtraBold',
    },
    subtitleimg:{
      flexDirection: 'row', 
      alignItems: 'center',
      fontSize: 15,
      color: '#65146d',
      fontFamily:'Poppins_800ExtraBold',
    },

    imgg: {
      top:20,
      width: 160,
      height:170,
      resizeMode: 'contain', 
      marginHorizontal: 10, 
      marginBottom:15,
      
    },
  
    imgContainer: {
      flexDirection: 'row', 
      alignItems: 'center',
      right:110,
    }, 

    text:{
      fontSize: 10,
      color: '#65146d',
      fontFamily:'Poppins_400Regular',
      padding:10, // Organiza os itens
      textAlign:'justify',
    },

    textContainer:{
      flexDirection: 'column',

    },


    card:{
    top:100,
    width:200,
    height:220,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    padding:20,


    },

    
    cardd:{
    top:100,
    width:200,
    height:220,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    padding:20,
    marginBottom:200,

    }

  });