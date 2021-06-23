import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, Image, ImageBackground} from 'react-native';

export default class HomeScreen extends React.Component{

render(){
    return(
        <View style={{flex:1}}>
            <SafeAreaView style={styles.safeArea}></SafeAreaView>
            <ImageBackground style={styles.backgroundImage} source={require('../assets/space.gif')}>
            <View style={styles.titleBar}><Text style={styles.titleText}>Stellar: A Space App</Text></View>

            <TouchableOpacity style={styles.routeCard} onPress={()=>{
                this.props.navigation.navigate("pic")
            }}>
                <Text style={styles.routeText}>Daily Picture</Text>
                <Text style={styles.numberText}>1</Text>
                <Text style={styles.knowMore}> {"Know More -->"}</Text>
                <Image style={styles.iconImage}source={require('../assets/daily_pictures.png')}></Image> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.routeCard} onPress={()=>{
                this.props.navigation.navigate("spaceship")
            }}>
                <Text style={styles.routeText}>Space Craft</Text>
                <Text style={styles.numberText}>2</Text>
                <Text style={styles.knowMore}>{"Know More -->"}</Text>
                <Image style={styles.iconImage} source={require('../assets/space_crafts.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.routeCard} onPress={()=>{
                this.props.navigation.navigate("map")
            }}>
                <Text style={styles.routeText}>Star Map</Text>
                <Text style={styles.numberText}>3</Text>
                <Text style={styles.knowMore}>{"Know More -->"}</Text>
                <Image style={styles.iconImage} source={require('../assets/star_map.png')}></Image>
            </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}

}

const styles = StyleSheet.create({
    titleText:{
        fontSize:75,
        fontWeight: 'bold',
        color: 'white'
    },
    safeArea:{
        marginTop: "Platform.OS === android"? StatusBar.currentHeight
                                            : 0
    },
    titleBar:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.15
    },
    routeCard:{
        flex: 0.25,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 30,
        borderRadius: 30,

        backgroundColor: 'white'
    },
    routeText:{
        fontSize: 50,
        fontWeight: 'bold',
        color: 'rgba(255, 0, 234, 1)',
        marginTop: 25,
        paddingLeft: 30
    },
    backgroundImage:{
        flex: 1,
        resizeMode: 'cover'

    },
    numberText:{
        color:'rgba(183,183,183, 0.5)',
        fontSize: 130,
        right: 20,
        bottom: -15,
        position: 'absolute',
        zIndex: -1

    },
    knowMore: {
        color: 'red',
        paddingLeft: 20,
        fontSize: 15,
        marginTop: 105
        
    },

    iconImage:{
        height: 200,
        width: 200,
        right: 150,
        position: 'absolute',
        resizeMode: 'contain'
    }
})