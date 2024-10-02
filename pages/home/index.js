import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useFonts, Poppins_800ExtraBold } from '@expo-google-fonts/poppins';
import * as Animatable from 'react-native-animatable';
import { FontAwesome } from 'react-native-vector-icons';

const Icon2 = require('../../assets/img/tigela-1-verd.png');
const Icon3 = require('../../assets/img/tigela-5-roxo.png');
const Icon4 = require('../../assets/img/tigela-2-verde.png');
const Icon6 = require('../../assets/img/copo-3-verde.png');
const Icon7 = require('../../assets/img/copo-6-roxo.png');
const foto1 = require('../../assets/img/foto1.png');
const foto2 = require('../../assets/img/foto2.jpeg');
const foto3 = require('../../assets/img/foto3.png');
const foto4 = require('../../assets/img/foto4.png');
const Logo = require('../../assets/img/logo.png');

export default function Home() {
  const [searchText, setSearchText] = useState('');
  let [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.textContainer}>
            <Animatable.Text animation={'zoomInUp'} style={styles.title}>JÁ TOMOU O</Animatable.Text>
            <Animatable.Text animation={'zoomInUp'} style={styles.title}>SEU AÇAI HOJE?</Animatable.Text>
            <Animatable.Text animation={'pulse'} style={styles.subtitle}>EXPERIMENTE AGORA</Animatable.Text>
          </View>
          <Animatable.Image 
            animation={'fadeInLeft'} 
            delay={300} 
            source={Logo} 
            style={styles.logo} 
          />
        </View>
       

        <View> 
          <FontAwesome name="search" size={24} color="#65146d" left={340} />
          <TextInput 
            style={styles.input}
            placeholder="Buscar..."
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>

        <View style={styles.imgContainer}>
          <TouchableOpacity>
            <Image source={Icon2} style={styles.imgg} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={Icon7} style={styles.imgg} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={Icon4} style={styles.imgg} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={Icon6} style={styles.imgg} />
          </TouchableOpacity>
        </View>

        <Text style={styles.title1}>Em alta no Bendito Açaí</Text>

        <View style={styles.imgContainer}>
          <TouchableOpacity>
            <Image source={foto1} style={styles.img1} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={foto2} style={styles.img2} />
          </TouchableOpacity>
        </View>

        <View style={styles.imgContainer}>
          <TouchableOpacity>
            <Image source={foto3} style={styles.img3} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={foto4} style={styles.img4} />
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.card}>

      <Text style={styles.title1}>Em alta no Bendito Açaí</Text>
      </View>


      <StatusBar style="auto" />
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Alinha o texto à esquerda e a logo à direita
    marginTop: 100,
    width: '100%',
    paddingHorizontal: 20,
  },
  textContainer: {
    flex: 1, // Ocupar o espaço restante
  },
  logo: {
    width: 80,
    height: 80,
    bottom:50,
    resizeMode: 'contain',
  }, 
  card: {
    flex:1,
    top: 100,
    width: 390,
    margin:10,
    height:150,
    backgroundColor: '#65146d',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    padding: 20,
    marginBottom: 200,
    borderRadius:10,
  },

  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
    color: '#333',
    bottom: 35,
    width: 380,
  },
  img: {
    width: 400,
    height: 250,
    marginBottom: 50,
  },
  imgLogo: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
  img1: {
    top: 60,
    width: 180,
    height: 270,
    marginBottom: 40,
    borderRadius: 10,
    marginHorizontal: 10,
    right: 10,
  },
  img2: {
    top: 30,
    width: 180,
    height: 220,
    marginBottom: 40,
    borderRadius: 10,
  },
  img3: {
    width: 180,
    height: 220,
  
    borderRadius: 10,
    marginHorizontal: 10,
    right: 10,
  },
  img4: {
    width: 180,
    height: 270,
    borderRadius: 10,
    top: 5,
   
  },
  imgg: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginHorizontal: 10,
    bottom: 15,
  },
  imgContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Organiza os itens em linha horizontal
  },
  title: {
    fontSize: 28,
    color: '#65146d',
    fontFamily: 'Poppins_800ExtraBold',
    marginBottom: -10, 
  },
  title1: {
    top: 24,
    fontSize: 23,
    color: '#65146d',
    fontFamily: 'Poppins_800ExtraBold',
  },
  subtitle: {
    right:60,
    fontSize: 15,
    color: '#9fcd2c',
    textAlign: 'center',
    fontFamily: 'Poppins_800ExtraBold',
    marginBottom: 30,
  },
});
