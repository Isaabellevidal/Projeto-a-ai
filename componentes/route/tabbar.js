import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import{FontAwesome} from 'react-native-vector-icons';


import Home from '../../pages/home';
import Cardapio from '../../pages/cardapio';
import Local from '../../pages/local';


const HIcon = require('../../assets/img/home.png');
const HIcon2 = require('../../assets/img/home1.png');
const CIcon = require('../../assets/img/cardapio-acai.png');
const CIcon2 = require('../../assets/img/cardapio1-acai.png');
const LIcon = require('../../assets/img/local-acai.png');
const LIcon2 = require('../../assets/img/local1-acai.png');


const Tab = createBottomTabNavigator();

export default function TabBar() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
        
                position: 'absolute',
                // bottom: 25,
                // left: 20,
                // right: 10,
                // borderRadius: 30,
                height: 65,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.75,
                shadowRadius: 5,
                justifyContent: 'space-between',
                paddingHorizontal:20,
                paddingVertical:10,


            }
        }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {

                        if (focused) { // se ele estiver focado
                            return (
                                // <View style={styles.box}>
                                     <View style={styles.highlighWrapper}>
                                     <TouchableOpacity style={styles.highlighted}>
                                      <FontAwesome name="home" size={35} color="#65146d"/>
                                    {/* <Image source={HIcon2} style={styles.icon} /> */}
                    
                                    </TouchableOpacity>
                                </View>
                                // </View>
                            );
                        }
                        // se n tiver interação
                        return (
                            <View style={styles.box}>
                               
                               
                             <FontAwesome name="home" size={35} color="#65146d"/>
                                {/* <Image source={HIcon} style={styles.icon} /> */}
                                <Text style={styles.title}>Home</Text>
                               
                          
                            </View>
                        )

                    }
                }} />


            <Tab.Screen name='Cardapio' component={Cardapio}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                // <View style={styles.box}>
                                       <View style={styles.highlighWrapper}>
                                       <TouchableOpacity style={styles.highlighted}>
                                      <FontAwesome name="book" size={35} color="#65146d"/>
                                    {/* <Image source={CIcon2} style={styles.icon} /> */}
                                  
                                  </TouchableOpacity>
                                </View>
                                // </View>
                            );
                        }
                        return (
                            <View style={styles.box}>
                                 <FontAwesome name="book" size={35} color="#65146d"/>
                                {/* <Image source={CIcon} style={styles.icon} /> */}
                                <Text style={styles.title}>Cardapio</Text>
                            </View>
                        );
                        }
                    }}/>

                    <Tab.Screen name='Local' component={Local}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({focused}) => {
                                if(focused){
                                    return (
                                        <View style={styles.highlighWrapper}>
                                        <TouchableOpacity style={styles.highlighted}>
                                        <FontAwesome name="map" size={35} color="#65146d"/>
                                        {/* <Image source={LIcon} style={styles.icon} /> */}
                                       </TouchableOpacity>
                                        </View>
                                    )
                                }
                                return(
                                    // <View style={styles.box}>
                                    <View style={styles.box}>
                                          <FontAwesome name="map-marker" size={35} color="#65146d"/>
                                            {/* <Image source={LIcon2} style={styles.icon} /> */}
                                            <Text style={styles.title}>Local</Text>
                                        </View>
                                      
                                    // </View>
                                );
                            }
                        }}/>



        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    box: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        height: 40,
        width: 40,
    },
    highlighWrapper: {
        position: 'absolute',
        top: -30,
        alignSelf:'center',
        borderRadius: 50,
        padding:10,
        backgroundColor: '#fff',
    },

    highlighted:{
        backgroundColor: '#9fcd2c',
        borderRadius: 50,
        padding:10,
    },
    title:{
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
        color:"#65146d",
        bottom:4,
    }
});

