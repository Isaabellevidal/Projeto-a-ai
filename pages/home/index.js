import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useFonts, Poppins_800ExtraBold } from '@expo-google-fonts/poppins';
import * as Animatable from 'react-native-animatable';
import { FontAwesome } from 'react-native-vector-icons';

const Icon2 = require('../../assets/img/tigela-1-verd.png');
const Icon3 = require('../../assets/img/tigela-5-roxo.png');
const Icon4 = require('../../assets/img/tigela-2-verde.png');
const Icon6 = require('../../assets/img/copo-4-roxo.png');
const Icon7 = require('../../assets/img/copo-6-roxo.png');
const foto1 = require('../../assets/img/foto1.png');
const foto2 = require('../../assets/img/foto2.jpeg');
const foto3 = require('../../assets/img/foto3.png');
const foto4 = require('../../assets/img/foto4.png');
const foto5 = require('../../assets/img/foto5.jpeg');
const foto6 = require('../../assets/img/foto6.jpeg');
const Logo = require('../../assets/img/logo.png');
const userImage = require('../../assets/img/pessoa1.jpeg'); 
const userImage2 = require('../../assets/img/pessoa2.jpeg');
const userImage3 = require('../../assets/img/pessoa3.jpeg');// Adicione uma imagem fictícia do usuário
const starIcon = require('../../assets/img/star.png'); // Adicione uma imagem de estrela

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
      <Animatable.View   animation={'fadeInUp'} 
            delay={400} style={styles.container}>
        {/* Header Section */}
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

        {/* Search Section */}
        <View> 
          <FontAwesome name="search" size={24} color="#65146d" left={340} />
          <TextInput 
            style={styles.input}
            placeholder="Buscar..."
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>

        {/* Popular Section */}
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

        {/* Images Section */}
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

        <View style={styles.imgContainer}>
          <TouchableOpacity>
            <Image source={foto5} style={styles.img5} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={foto6} style={styles.img6} />
          </TouchableOpacity>
        </View>

        {/* Testimonials Section */}
        <Text style={styles.title2}>Depoimentos de Clientes</Text>

        {/* Testimonial 1 */}
        <View style={styles.testimonialCard}>
          <View style={styles.testimonialHeader}>
            <Image source={userImage} style={styles.userImage} />
            <View style={styles.testimonialStars}>
              <Image source={starIcon} style={styles.star} />
              <Image source={starIcon} style={styles.star} />
              <Image source={starIcon} style={styles.star} />
              <Image source={starIcon} style={styles.star} />
              <Image source={starIcon} style={styles.star} />
            </View>
          </View>
          <Text style={styles.testimonialText}>"O melhor açaí que já provei! Atendimento excelente e o ambiente é muito aconchegante."</Text>
          <Text style={styles.clientName}>- Ana Clara</Text>
        </View>

        {/* Testimonial 2 */}
        <View style={styles.testimonialCard}>
          <View style={styles.testimonialHeader}>
            <Image source={userImage2} style={styles.userImage} />
            <View style={styles.testimonialStars}>
              <Image source={starIcon} style={styles.star} />
              <Image source={starIcon} style={styles.star} />
              <Image source={starIcon} style={styles.star} />
              <Image source={starIcon} style={styles.star} />
              <Image source={starIcon} style={styles.star} />
            </View>
          </View>
          <Text style={styles.testimonialText}>"Recomendo demais! Sempre peço o açaí com cupuaçu e nunca me decepciono."</Text>
          <Text style={styles.clientName}>- Pedro Silva</Text>
        </View>

        {/* Testimonial 3 */}
        <View style={styles.testimonialCardd}>
          <View style={styles.testimonialHeader}>
            <Image source={userImage3} style={styles.userImage} />
            <View style={styles.testimonialStars}>
              <Image source={starIcon} style={styles.star} />
              <Image source={starIcon} style={styles.star} />
              <Image source={starIcon} style={styles.star} />
              <Image source={starIcon} style={styles.star} />
              <Image source={starIcon} style={styles.star} />
            </View>
          </View>
          <Text style={styles.testimonialText}>"Lugar perfeito para curtir com a família e amigos. O atendimento é maravilhoso."</Text>
          <Text style={styles.clientName}>- Juliana Oliveira</Text>
        </View>
      </Animatable.View>
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
    justifyContent: 'space-between',
    marginTop: 100,
    width: '100%',
    paddingHorizontal: 20,
  },
  textContainer: {
    flex: 1,
  },
  logo: {
    width: 80,
    height: 80,
    bottom: 50,
    resizeMode: 'contain',
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
  imgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgg: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginHorizontal: 10,
    bottom: 15,
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
    top: 10,
  },
  img4: {
    width: 180,
    height: 270,
    borderRadius: 10,
    top: 1,
  },
  img5: {
    top: 10,
    width: 180,
    height: 270,
    marginBottom: 40,
    borderRadius: 10,
    marginBottom: 50,
    right: 10,
  },
  img6: {
    top: 10,
    width: 180,
    height: 220,
    marginBottom: 50,
    borderRadius: 10,
    left: 10,
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
  title2: {
    fontSize: 25,
    color: '#65146d',
    fontFamily: 'Poppins_800ExtraBold',
    marginVertical: 20,
  },
  subtitle: {
    right: 60,
    fontSize: 15,
    color: '#9fcd2c',
    textAlign: 'center',
    fontFamily: 'Poppins_800ExtraBold',
    marginBottom: 30,
  },
  testimonialCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    elevation: 1,
  },
  testimonialCardd: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    elevation: 1,
    marginBottom:100,
  },
  testimonialHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  testimonialStars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    width: 20,
    height: 20,
    marginHorizontal: 2,
  },
  testimonialText: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
    fontStyle: 'italic',
  },
  clientName: {
    marginTop: 5,
    fontSize: 12,
    color: '#65146d',
    fontWeight: 'bold',
  },
});
