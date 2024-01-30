import React, { Component } from 'react'; 
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import Icono from "react-native-vector-icons/MaterialCommunityIcons"

export default class Wapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
        barraB:false,
    }; //area de variables 

  }

  render() {
    const busca = () =>{
        if(!this.state.barraB){
            this.setState({barraB:true})
        }else{
            this.setState({barraB:false})
        }

    }
    //programación de los elementos
    return ( 
        <View>
            <ImageBackground source={require("./Imagenes/images/bg.png")} style={{width:400,height:800}} blurRadius={40}>
        
                <View style={{borderWidth:0,borderColor:"red",width:190,height:50}}>
                    <View style={{
                        borderWidth:0,
                        borderColor:"black",
                        width:210,
                        height:40,
                        borderRadius:40,
                        marginLeft:70,
                        marginTop:40,
                        backgroundColor:this.state.barraB?"gray":"transparent",
                        opacity: 0.6

                    }}>
                        <Text style={{
                            fontSize:15,
                            color:this.state.barraB?"white":"transparent",
                            marginLeft:5,
                            marginTop:7,
                        }}> Buscar Ciudad
                        </Text>
                    </View>

                    <TouchableOpacity onPress={busca}>
                        <View style={{
                            borderWidth:0,
                            borderColor:"red",
                            width:40,
                            height:40,
                            borderRadius:40,
                            marginTop:-40,
                            marginLeft:240,
                            backgroundColor:"gray",
                        }}>
                            <Icono name="magnify" size={34}></Icono>
                        </View>
                    </TouchableOpacity>
                    
                    {/* Clima de la ciudad */}
                    {/*Ciudad que se escojio en el Select */}
                    <Text style={{
                        color:"white",
                        marginTop:10,
                        marginLeft:80,                 
                    }}>Mexico </Text>

                    <Text style={{
                        color:"gray",
                        fontSize:15,
                        marginTop:-37,
                        marginRight:-50,
                        marginLeft:135
                    }}> Guadalajara,Jal </Text>
                </View>

                <View>
                    <Image  source={require('./Imagenes/images/partlycloudy.png')} style={{width:200,
                        height:200,
                        marginTop:110,
                        marginLeft:90,}}> 
                    </Image>
                    <Text style={{
                        textAlign: 'center',
                        color:"white",
                        fontSize:45,
                        fontWeight:800,
                        marginTop:10,
                    }}>23°</Text>
                    <Text style={{
                        textAlign: 'center',
                        color:"white",
                        fontSize:25,
                        fontWeight:800,
                        marginTop:10,
                    }}>Parcialmente Nublado</Text>
                </View>

                <View style={{}}>
                    <View style={{
                        width:110,
                        height:60,
                        marginTop:15,
                        marginLeft:20,
                    }}>
                        <Icono name="weather-windy" size={48} style={{color:"white",}}></Icono>
                        <Text style={{
                            fontSize:20,
                            fontWeight: 'bold',
                            color:"white",
                            marginTop:-40,
                            marginLeft:45,
                        }}> 22Km </Text>
                    </View>

                    <View style={{
                        width:110,
                        height:60,
                        marginTop:-60,
                        marginLeft:140,
                    }}>
                        <Icono name="water" size={48} style={{color:"white",}}></Icono>
                        <Text style={{
                            fontSize:20,
                            fontWeight: 'bold',
                            color:"white",
                            marginTop:-40,
                            marginLeft:45,
                        }}> 23% </Text>
                    </View>

                    <View style={{
                        width:150,
                        height:60,
                        marginTop:-60,
                        marginLeft:245,
                        marginRight:20,
                    }}>
                        <Icono name="weather-sunny" size={48} style={{color:"white",}}></Icono>
                        <Text style={{
                            fontSize:20,
                            fontWeight: 'bold',
                            color:"white",
                            marginTop:-40,
                            marginLeft:45,
                        }}> 6:05 AM </Text>
                    </View>
                    
                </View>
                <View style={{
                    width:210,
                    height:60,
                    marginTop:0,
                    marginLeft:20,
                }}>
                    <Icono name="calendar-text-outline" size={35} style={{color:"white",}}></Icono>
                    <Text style={{
                        fontSize:20,
                        fontWeight: 'bold',
                        color:"white",
                        marginTop:-30,
                        marginLeft:45,
                    }}> Pronostico Diario </Text>
                </View>

                <View style={{
                    borderBottomWidth:0,
                    backgroundColor:'#063B32',
                    width:100,
                    height:130,
                    borderRadius:20,
                    marginLeft:20,
                    marginTop:-10,
                    }}> 
                    <Image source={require('./Imagenes/images/heavyrain.png')} style={{width:50,
                        height:50,
                        marginTop:10,
                        marginLeft:25,}}> 
                    </Image>
                    <Text style={{
                        color:"white",
                        textAlign: 'center',
                        fontSize:20,
                        fontWeight:800,
                        marginTop:0,
                    }}>Lunes</Text>
                    <Text style={{
                        color:"white",
                        textAlign: 'center',
                        fontSize:25,
                        fontWeight:800,
                        marginTop:0,
                    }}>13°</Text>
                </View>

                <View style={{
                    borderBottomWidth:0,
                    backgroundColor:'#063B32',
                    width:100,
                    height:130,
                    borderRadius:20,
                    marginLeft:140,
                    marginTop:-130,
                    }}> 
                    <Image source={require('./Imagenes/images/heavyrain.png')} style={{width:50,
                        height:50,
                        marginTop:10,
                        marginLeft:25,}}> 
                    </Image>
                    <Text style={{
                        color:"white",
                        textAlign: 'center',
                        fontSize:20,
                        fontWeight:800,
                        marginTop:0,
                    }}>Martes</Text>
                    <Text style={{
                        color:"white",
                        textAlign: 'center',
                        fontSize:25,
                        fontWeight:800,
                        marginTop:0,
                    }}>13°</Text>
                </View>

                <View style={{
                    borderBottomWidth:0,
                    backgroundColor:'#063B32',
                    width:100,
                    height:130,
                    borderRadius:20,
                    marginLeft:260,
                    marginTop:-130,
                    }}> 
                    <Image source={require('./Imagenes/images/heavyrain.png')} style={{width:50,
                        height:50,
                        marginTop:10,
                        marginLeft:25,}}> 
                    </Image>
                    <Text style={{
                        color:"white",
                        textAlign: 'center',
                        fontSize:20,
                        fontWeight:800,
                        marginTop:0,
                    }}>Miercoles</Text>
                    <Text style={{
                        color:"white",
                        textAlign: 'center',
                        fontSize:25,
                        fontWeight:800,
                        marginTop:0,
                    }}>13°</Text>
                </View>

            </ImageBackground>
        </View>
    );
  }
}
//area de estilos