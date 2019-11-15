import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Platform, StatusBar, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';
var pkg = require('../../package.json');
const screenWidth = Dimensions.get("window").width;
const options = {
    title: 'Select Photo',
    storageOptions: {
      skipBackup: false,
      path: 'images',
    },
  };
export default class MainPage extends Component {
    state = {  }
    renderCameraIcon(){
        if(Platform.OS == "ios")
        {
            return <Image style={styles.ButtonImageStyle} resizeMode={"stretch"} source={require('../image/ios/camera.png')}/>
        }else if(Platform.OS == "android")
        {
            return <Image style={styles.ButtonImageStyle} resizeMode={"stretch"} source={require('../image/android/camera.png')}/>
        }
    }
    renderGalleryIcon(){
        if(Platform.OS == "ios")
        {
            return <Image style={styles.ButtonImageStyle} resizeMode={"stretch"} source={require('../image/ios/gallery.png')}/>
        }else if(Platform.OS == "android")
        {
            return <Image style={styles.ButtonImageStyle} resizeMode={"stretch"} source={require('../image/android/gallery.png')}/>
        }
    }
    render() {
        StatusBar.setTranslucent(true)
        StatusBar.setBackgroundColor("transparent");
        StatusBar.setBarStyle("light-content")
        return (
            <View style={styles.MainViewStyle}>
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.GradientBackground}>
                        <Text style={styles.TitleTextStyle}>Filter App</Text>
                </LinearGradient>
                <View style={{flex:0.2, alignItems:'center', justifyContent:'center'}}>
                <Text style={{alignSelf:'center', fontSize:25, fontWeight:'bold'}}>Start Creating With:</Text>

                </View>
                <View style={styles.CategoryViewStyle}>
                    
                        <TouchableOpacity onPress={() => {this.openCamera()}} style={styles.CameraButtonStyle}>
                        <LinearGradient colors={['#F44336', '#D32F2F']} style={styles.CameraButtonStyle}>
                            {this.renderCameraIcon()}
                            <Text style={{color:'white', fontWeight:'bold'}}>Camera</Text>
                        </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.openLibrary()}} style={styles.CameraButtonStyle}>
                        <LinearGradient colors={['#2196F3', '#1565C0']} style={styles.CameraButtonStyle}>
                            {this.renderGalleryIcon()}
                            <Text style={{color:'white', fontWeight:'bold'}}>Library</Text>
                        </LinearGradient>
                        </TouchableOpacity>
                </View>
            </View>
        );
    }
    openCamera(){
        ImagePicker.launchCamera(options, (response) => {
            if(response.error == false)
            {
                alert("An error occured");
            }else if(response.didCancel == true)
            {
                alert("Please take photo");
            }else{
                Actions.Edit({imageData: response.data});
            }
          });
    }
    openLibrary(){
        ImagePicker.launchImageLibrary(options, (response) => {
            if(response.error == false)
            {
                alert("An error occured");
            }else if(response.didCancel == true)
            {
                alert("Please select image");
            }else{
                Actions.Edit({imageData: response.data});
            }
          });
    }
}

const styles = StyleSheet.create({
    MainViewStyle: {
        flex:1,
    },
    CategoryViewStyle: {
        flex: 0.2,
        justifyContent:'space-evenly',
        alignItems:'flex-start',
        flexDirection:'row'
    },
    TitleTextStyle: {
        color:'white',
        fontSize: 20
    },
    CameraButtonStyle: {
        borderRadius: 100,
        width: (screenWidth/2)/3*1.7,
        height: (screenWidth/2)/3*1.7,
        alignItems:'center',
        justifyContent:'center'
    },
    ButtonImageStyle: {
        width: ((screenWidth/2)/3*2)/3*1.2,
        height: ((screenWidth/2)/3*2)/3*1.2
    }, 
    GradientBackground: {
        flex: 0.5,
        justifyContent:'center',
        alignItems:'center',
    }
})