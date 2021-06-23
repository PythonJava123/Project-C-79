import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
import axios from 'axios'

export default class StarMap extends React.Component{
    constructor(props){
        super(props)
        this.state={
            stars:{},
            latitude:'',
            longitude:'',
        }
    }

   /* getStarMap=()=>{
        axios.get("https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true")
        .then(response=>{
            this.setState({
                stars: response.data,
            })
        })
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
    componentDidMount=()=>{
        this.getStarMap()
    }*/
    render(){
        const {longitude, latitude} = this.state;
            const path = "https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true"
        return(
            <View>
               <SafeAreaView></SafeAreaView> 
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your latitude"
                    onChangeText={(text)=>{
                        this.setState({
                            latitude: text
                        })
                    }}> 
                </TextInput>
                <TextInput style={styles.textInput}
                placeholder="Enter your longitude"
                onChangeText={(text)=>{
                    this.setState({
                        longitude:text
                    })
                }}>   
                </TextInput>
                <WebView
                    scalesPageToFit={true}
                    source={{uri: 'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'}}
                    style={{marginTop: 20, marginBottom: 20}}>
                </WebView>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    textInput:{
        height:40,
        borderColor:"gray",
        borderWidth:1,
        borderRadius:20,
        marginTop:20,
        marginRight:20,
        marginLeft:20,
        textAlign: "center",
        color:"black",
        width:200
    }
})