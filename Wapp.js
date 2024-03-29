import React, { Component } from 'react'; 
import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import Icono from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";


export default class Wapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        barraB:true,
        temperatura: "23",
        textoTemp: "parcialmente nublado",
        imagenTemp: "",
        viento:"22",
        lluvia:"23",
        amanece: "6:04",
        textDia1: "Lunes",
        textDia2: "Lunes",
        textDia3: "Lunes",
        textDia4: "Lunes",
        tempDia1: "13",
        tempDia2: "13",
        tempDia3: "13",
        tempDia4: "13",
        imgDia1: "",
        imgDia2: "",
        imgDia3: "",
        imgDia4: "",
        country: "México",
        name: "Guadalajara",
        region: "Jalisco",
        ciudad: ""

    }; //area de variables 

  }

  render() {
    const busca = () =>{

    let _this = this



        // Hacer una petición para un usuario con ID especifico
        axios.get('http://api.weatherapi.com/v1/forecast.json?key=0edeba6a1cc041d382452853240102&q='+this.state.ciudad+'&days=5&aqi=no&alerts=no=es')
        .then(function (response) {
            // manejar respuesta exitosa
            console.log(response.data.current.temp_c);
            _this.setState({temperatura:response.data.current.temp_c})
            _this.setState({textoTemp:response.data.current.condition.text})
            _this.setState({imagenTemp:response.data.current.condition.icon})
            _this.setState({viento:response.data.current.wind_kph})
            _this.setState({lluvia:response.data.current.humidity})
            _this.setState({amanece:response.data.forecast.forecastday[0].astro.sunrise})
            _this.setState({textDia1:response.data.forecast.forecastday[0].date})
            _this.setState({textDia2:response.data.forecast.forecastday[1].date})
            _this.setState({textDia3:response.data.forecast.forecastday[2].date})
            _this.setState({textDia4:response.data.forecast.forecastday[0].date})
            _this.setState({tempDia1:response.data.forecast.forecastday[0].day.avgtemp_c})
            _this.setState({tempDia2:response.data.forecast.forecastday[1].day.avgtemp_c})
            _this.setState({tempDia3:response.data.forecast.forecastday[2].day.avgtemp_c})
            _this.setState({tempDia4:response.data.forecast.forecastday[0].day.avgtemp_c})
            _this.setState({imgDia1:response.data.forecast.forecastday[0].day.condition.icon})
            _this.setState({imgDia2:response.data.forecast.forecastday[1].day.condition.icon})
            _this.setState({imgDia3:response.data.forecast.forecastday[2].day.condition.icon})
            _this.setState({imgDia4:response.data.forecast.forecastday[0].day.condition.icon})
            _this.setState({country:response.data.location.country})
            _this.setState({name:response.data.location.name})
            _this.setState({region:response.data.location.region})

            //_this.setState({imgDia2:response.data.forecast.forecastday[2].hour[0].condition.icon})
            //_this.setState({imgDia3:response.data.forecast.forecastday[3].hour[0].condition.icon})
        })
        .catch(function (error) {
            // manejar error
            console.log(error);
        })
        .finally(function () {
            // siempre sera executado
        });
            //programación de los elementos
        }
    
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
                        <TextInput 
                        placeholder='Buscar ciudad'
                        onChangeText={ciudad => this.setState({ciudad})}>
                        </TextInput>
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
                        fontSize:20,
                        marginTop:10,
                        marginLeft:80,                 
                    }}>{this.state.country} </Text>

                    <Text style={{
                        color:"gray",
                        fontSize:15,
                        marginTop:-23,
                        marginRight:-125,
                        marginLeft:145, 
                    }}> {this.state.name},{this.state.region} </Text>
                </View>

                <View>
                    <Image  source={this.state.imagenTemp===""?require('./Imagenes/images/partlycloudy.png'):{uri:"http:"+this.state.imagenTemp}} style={{width:150,
                        height:150,
                        marginTop:110,
                        marginLeft:120,}}> 
                    </Image>
                    <Text style={{
                        textAlign: 'center',
                        color:"white",
                        fontSize:45,
                        fontWeight:800,
                        marginTop:10,
                    }}>{this.state.temperatura}°
                    </Text>
                    <Text style={{
                        textAlign: 'center',
                        color:"white",
                        fontSize:25,
                        fontWeight:800,
                        marginTop:0,
                    }}> {this.state.textoTemp}</Text>
                </View>

                <View style={{}}>
                    <View style={{
                        width:110,
                        height:60,
                        marginTop:15,
                        marginLeft:20,
                    }}>
                        <Image  source={require('./Imagenes/icons/wind.png')} style={{
                            height:30,
                            width:30,
                        }}>
                        </Image>
                        
                        <Text style={{
                            fontSize:18,
                            fontWeight: 'bold',
                            color:"white",
                            marginTop:-30,
                            marginLeft:40,
                        }}> {this.state.viento}Km </Text>
                    </View>

                    <View style={{
                        width:110,
                        height:60,
                        marginTop:-60,
                        marginLeft:140,
                    }}>
                        <Image  source={require('./Imagenes/icons/drop.png')} style={{
                            height:30,
                            width:30,
                        }}>
                        </Image>
                        <Text style={{
                            fontSize:18,
                            fontWeight: 'bold',
                            color:"white",
                            marginTop:-30,
                            marginLeft:40,
                        }}> {this.state.lluvia}% </Text>
                    </View>

                    <View style={{
                        width:150,
                        height:60,
                        marginTop:-60,
                        marginLeft:235,
                        marginRight:20,
                    }}>
                        <Image  source={require('./Imagenes/icons/sun.png')} style={{
                            height:30,
                            width:30,
                        }}>
                        </Image>
                        <Text style={{
                            fontSize:18,
                            fontWeight: 'bold',
                            color:"white",
                            marginTop:-30,
                            marginLeft:40,
                        }}> {this.state.amanece} </Text>
                    </View>
                    
                </View>
                <View style={{
                    width:210,
                    height:60,
                    marginTop:0,
                    marginLeft:20,
                }}>
                    <Icono name="calendar-text-outline" size={25} style={{color:"white",}}></Icono>
                    <Text style={{
                        fontSize:18,
                        fontWeight: 'bold',
                        color:"white",
                        marginTop:-25,
                        marginLeft:30,
                    }}> Pronostico Diario </Text>
                </View>
                <View>
                    <ScrollView horizontal style={{
                        borderWidth:0,borderColor:"red"
                    }}>
                        <View style={{
                        width:600,
                    }}>
                            <View style={{
                                borderBottomWidth:0,
                                backgroundColor:'#385754',
                                width:100,
                                height:140,
                                borderRadius:20,
                                marginLeft:20,
                                marginTop:0,
                                }}> 
                                <Image  source={this.state.imgDia1===""?require('./Imagenes/images/heavyrain.png'):{uri:"http:"+this.state.imgDia1}} style={{width:50,
                                    height:50,
                                    marginTop:10,
                                    marginLeft:25,}}> 
                                </Image>
                                <Text style={{
                                    color:"white",
                                    textAlign: 'center',
                                    fontSize:15,
                                    fontWeight:800,
                                    marginTop:0,
                                }}>{this.state.textDia1}</Text>
                                <Text style={{
                                    color:"white",
                                    textAlign: 'center',
                                    fontSize:25,
                                    fontWeight:800,
                                    marginTop:0,
                                }}>{this.state.tempDia1}°</Text>
                            </View>

                            <View style={{
                                borderBottomWidth:0,
                                backgroundColor:'#385754',
                                width:100,
                                height:140,
                                borderRadius:20,
                                marginLeft:140,
                                marginTop:-140,
                                }}> 
                                <Image  source={this.state.imgDia2===""?require('./Imagenes/images/heavyrain.png'):{uri:"http:"+this.state.imgDia2}} style={{width:50,
                                    height:50,
                                    marginTop:10,
                                    marginLeft:25,}}> 
                                </Image>
                                <Text style={{
                                    color:"white",
                                    textAlign: 'center',
                                    fontSize:15,
                                    fontWeight:800,
                                    marginTop:0,
                                }}>{this.state.textDia2}</Text>
                                <Text style={{
                                    color:"white",
                                    textAlign: 'center',
                                    fontSize:25,
                                    fontWeight:800,
                                    marginTop:0,
                                }}>{this.state.tempDia2}°</Text>
                            </View>

                            <View style={{
                                borderBottomWidth:0,
                                backgroundColor:'#385754',
                                width:100,
                                height:140,
                                borderRadius:20,
                                marginLeft:260,
                                marginTop:-140,
                                }}> 
                                <Image  source={this.state.imgDia3===""?require('./Imagenes/images/heavyrain.png'):{uri:"http:"+this.state.imgDia3}} style={{width:50,
                                    height:50,
                                    marginTop:10,
                                    marginLeft:25,}}> 
                                </Image>
                                <Text style={{
                                    color:"white",
                                    textAlign: 'center',
                                    fontSize:15,
                                    fontWeight:800,
                                    marginTop:0,
                                }}>{this.state.textDia3}
                                </Text>
                                <Text style={{
                                    color:"white",
                                    textAlign: 'center',
                                    fontSize:25,
                                    fontWeight:800,
                                    marginTop:0,
                                }}>{this.state.tempDia3}°</Text>
                            </View>

                            <View style={{
                                borderBottomWidth:0,
                                backgroundColor:'#385754',
                                width:100,
                                height:140,
                                borderRadius:20,
                                marginLeft:385,
                                marginTop:-140,
                                }}> 
                                <Image  source={this.state.imgDia4===""?require('./Imagenes/images/heavyrain.png'):{uri:"http:"+this.state.imgDia4}} style={{width:50,
                                    height:50,
                                    marginTop:10,
                                    marginLeft:25,}}> 
                                </Image>
                                <Text style={{
                                    color:"white",
                                    textAlign: 'center',
                                    fontSize:15,
                                    fontWeight:800,
                                    marginTop:0,
                                }}>{this.state.textDia4}</Text>
                                <Text style={{
                                    color:"white",
                                    textAlign: 'center',
                                    fontSize:25,
                                    fontWeight:800,
                                    marginTop:0,
                                }}>{this.state.tempDia4}°</Text>
                            </View>

                        </View>
                    </ScrollView>
                </View>
                
            </ImageBackground>
        </View>
    );
  }
}
//area de estilos