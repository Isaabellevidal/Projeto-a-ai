import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const Icon = require('../../assets/img/local-img.png');
const Icon4 = require('../../assets/img/logo.png');
const Logo = require('../../assets/img/logo.png');
const foto1 = require('../../assets/img/casal.jpeg');
const foto2 = require('../../assets/img/familia.jpeg');
const foto3 = require('../../assets/img/idosos.jpeg');

export default function Local() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Já conhece</Text>
            <Text style={styles.title}>a nossa loja?</Text>
          </View>
          <Image source={Logo} style={styles.logo} />
        </View>

        <Image source={Icon} style={styles.img} />

        <Text style={styles.titlee}>Venha conhecer nossa loja</Text>

        <Text style={styles.text}>
          Venha conhecer nossa loja de açaí! Estamos na Rua das Palmeiras, nº 123, de segunda a sábado, das 10h às 20h. Oferecemos açaí puro e misturado com outras frutas em um ambiente acolhedor. Esperamos você!
        </Text>

        <Text style={styles.title2}>Sobre a empresa</Text>

        <View style={styles.card}>
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

        <Text style={styles.title3}>Ambiente familiar e amigável</Text>

        {/* View para as três fotos lado a lado */}
        <View style={styles.photosContainer}>
          <Image source={foto1} style={styles.photo} />
          <Image source={foto2} style={styles.photo} />
          <Image source={foto3} style={styles.photo} />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 100,
  },
  titleContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 28,
    color: '#65146d',
    fontFamily: 'Poppins_800ExtraBold',
    lineHeight: 30,
   
  },
  title3: {
    fontSize: 28,
    color: '#65146d',
    fontFamily: 'Poppins_800ExtraBold',
    lineHeight: 40,
     textAlign:"center"
  },
  logo: {
    width: 80,
    height: 80,
    bottom: 20,
    resizeMode: 'contain',
  },
  titlee: {
    top: 20,
    fontSize: 25,
    color: '#65146d',
    fontFamily: 'Poppins_800ExtraBold',
  },
  title2: {
    top: 30,
    fontSize: 25,
    color: '#65146d',
    fontFamily: 'Poppins_800ExtraBold',
  },
  img: {
    top: 20,
    width: 400,
    height: 200,
    marginBottom: 50,
  },
  text: {
    top: 5,
    fontSize: 15,
    color: '#65146d',
    fontFamily: 'Poppins_400Regular',
    padding: 30,
    textAlign: 'center',
  },
  text1: {
    fontSize: 15,
    color: '#65146d',
    fontFamily: 'Poppins_400Regular',
    padding: 10,
    textAlign: 'center',
  },
  card: {
    top: 40,
    width: 380,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 9, height: 5 },
    shadowOpacity: 0.8,
    padding: 20,
    borderRadius: 10,
    elevation: 15,
    marginBottom: 100,
  },
  imgg: {
    width: 120,
    height: 110,
    marginRight: 20,
  },
  imgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  photosContainer: {
    flexDirection: 'row', // Exibe as fotos lado a lado
    justifyContent: 'space-between', // Distribui o espaço entre elas
    marginTop: 20,
    paddingHorizontal: 10,
  },
  photo: {
    width: 120,
    height: 200,
    marginHorizontal: 5,
    borderRadius: 10,
    marginBottom:100
  },
});
