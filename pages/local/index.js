import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const Icon = require('../../assets/img/local-img.png');
const Icon4 = require('../../assets/img/logo.png');

export default function Local() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Já conhece </Text>
        <Text style={styles.title}>   a nossa loja?</Text>

        <Image source={Icon} style={styles.img} />

        <Text style={styles.titlee}>Venha conhecer nossa loja</Text>

        <Text style={styles.text}>
          Venha conhecer nossa loja de açaí! Estamos na Rua das Palmeiras, nº 123, de segunda a sábado, das 10h às 20h. Oferecemos açaí puro e misturado com outras frutas em um ambiente acolhedor. Esperamos você!
        </Text>

        <Text style={styles.title2}>Sobre a empresa</Text>

        <View style={styles.imgContainer}>
          <TouchableOpacity>
            <Image source={Icon4} style={styles.imgg} />
          </TouchableOpacity>

          <View style={styles.textContainer}>
            <Text style={styles.text1}>
              A Bendito Açaí é dedicada a oferecer açaí de alta qualidade, com um compromisso com a excelência proporcionamos uma experiência deliciosa e saudável em cada visita.
            </Text>
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
  title: {
    top:95,
    textAlign:"left",
    marginRight:180,
    fontSize: 28,
    color: '#65146d',
    fontFamily: 'Poppins_800ExtraBold',
    marginBottom: -20, // Ajuste para aproximar os títulos
  },
  titlee: {
    top: 100,
    fontSize: 25,
    color: '#65146d',
    fontFamily: 'Poppins_800ExtraBold',
  },
  title2: {
    top: 60,
    fontSize: 25,
    color: '#65146d',
    fontFamily: 'Poppins_800ExtraBold',
  },
  img: {
    top: 120,
    width: 400,
    height: 200,
    marginBottom: 50,
  },
  text: {
    top: 70,
    fontSize: 15,
    color: '#65146d',
    fontFamily: 'Poppins_400Regular',
    padding: 30,
    textAlign: 'center',
  },
  text1: {
    top: 100,
    fontSize: 15,
    color: '#65146d',
    fontFamily: 'Poppins_400Regular',
    padding: 5,
    textAlign: 'center',
  },
  card: {
    top: 90,
    width: 380,
    height: 150,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.8,
    padding: 20,
    borderRadius: 10,
    marginTop: 40,
    elevation: 10,
    marginBottom: 200,
  },
  imgg: {
    top: 90,
    width: 110,
    height: 100,
    margin: 40,
    marginBottom: 50,
  },
  imgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 90,
    marginBottom: 200,
  },
  textContainer: {
    flexDirection: 'column',
    marginRight: 200,
  },
});
