import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';



const Icon = require('../../assets/img/local-img.png');

const Icon4 = require('../../assets/img/logo.png');


export default function Local(){
    return (

      <ScrollView>

        <View style={styles.container}>
        <Text  style={styles.title}>Já conhece </Text>
        <Text  style={styles.title}> a nossa loja?</Text>

        <Image source={Icon} style={styles.img} />

        <Text  style={styles.titlee}>Venha conhecer nossa loja</Text>
        
        <Text  style={styles.text}>Venha conhecer nossa loja de açaí! Estamos na Rua das Palmeiras, nº 123, de segunda a sábado, das 10h às 20h. Oferecemos açaí puro e misturado com outras frutas em um ambiente acolhedor. Esperamos você! </Text>


         
        <Text  style={styles.titlee}>Sobre a empresa</Text>

        
    

        <View style={styles.imgContainer}>

        <TouchableOpacity >
        <Image source={Icon4} style={styles.imgg} />
       </TouchableOpacity>

      <View style={styles.textContainer}> 
       <Text style={styles.text}>O açaí de frutas no copo é uma bebida refrescante e nutritiva, feita com polpa de açaí misturada a outras frutas. Servido gelado, oferece um sabor tropical e é rico em vitaminas, antioxidantes e fibras.</Text>
       </View>



  </View>












      </View>


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
    title:{
      top:40,
      fontSize: 28,
      color: '#65146d',
      right:80,
      fontFamily:'Poppins_800ExtraBold',
    },
    titlee:{
      top:60,
      fontSize: 25,
      color: '#9fcd2c',
      fontFamily:'Poppins_800ExtraBold',
    },
  img: {
    top:60,
    width: 400,
    height:200,
    marginBottom:50,
  },
  text:{
    top:60,
    fontSize: 15,
    color: '#65146d',
    fontFamily:'Poppins_400Regular',
    padding:10, // Organiza os itens
    textAlign:'center',
  },
  
card:{
  top:90,
  width:380,
  height:150,
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

  imgg: {
    width: 110,
    height:100,
    margin:40,
    marginBottom:50,

  },

  imgContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    left:90,
    marginBottom:200,  // Organiza os itens em linha horizontal
  }, 
  
  textContainer:{
    flexDirection: 'column',

  },


  });